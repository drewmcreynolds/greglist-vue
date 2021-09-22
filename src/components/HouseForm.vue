<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-group">
      <label for="price" class="">Price:</label>
      <input v-model="editable.price"
             type="number"
             class="form-control"
             name="price"
             id="price"
             min="25000"
             max="99999999"
      >
    </div>
    <div class="form-group">
      <label for="levels" class="">Levels:</label>
      <input v-model="editable.levels"
             type="levels"
             class="form-control"
             name="levels"
             id="levels"
      >
    </div>
    <div class="form-group">
      <label for="bedrooms" class="">Bedrooms:</label>
      <input v-model="editable.bedrooms"
             type="bedrooms"
             class="form-control"
             name="bedrooms"
             id="bedrooms"
      >
    </div>
    <div class="form-group">
      <label for="bathrooms" class="">Bathrooms:</label>
      <input v-model="editable.bathrooms"
             type="bathrooms"
             class="form-control"
             name="bathrooms"
             id="bathrooms"
      >
    </div>
    <div class="form-group">
      <label for="year" class="">year:</label>
      <input v-model="editable.year"
             type="year"
             class="form-control"
             name="year"
             id="year"
      >
    </div>
    <div class="form-group">
      <label for="description" class="">description:</label>
      <textarea v-model="editable.description"
                type="text"
                class="form-control"
                name="description"
                id="description"
                rows="5"
      ></textarea>
    </div>
    <div class="form-group">
      <label for="img" class="">img:</label>
      <input v-model="editable.img"
             type="img"
             class="form-control"
             name="img"
             id="img"
             required
      >
    </div>

    <div class="d-flex justify-content-between my-3">
      <button type="button" class="btn text-dark text-uppercase selectable lighten-20" data-bs-dismiss="modal" aria-label="Close">
        <b>
          cancel
        </b>
      </button>
      <button type="submit" class="btn text-primary text-uppercase selectable" data-bs-dismiss="modal" aria-label="Close">
        <b>
          submit
        </b>
      </button>
    </div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { House } from '../models/House.js'
import { watchEffect } from '@vue/runtime-core'
import { housesService } from '../services/HousesService.js'
import Pop from '../utils/Pop.js'

export default {
  props: {
    house: { type: House, default: () => new House() }
  },
  setup(props) {
    const editable = ref({})

    watchEffect(() => {
      editable.value = { ...props.house }
    })
    return {
      editable,
      async handleSubmit() {
        try {
          editable.value.id
            ? await housesService.editHouse(editable.value)
            : await housesService.createHouse(editable.value)
        } catch (error) {
          Pop.toast(error.message, 'error')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
