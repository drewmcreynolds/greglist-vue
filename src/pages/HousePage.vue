<template>
  <div v-if="house" class="py-4">
    <div class="d-flex flex-warp w-100">
      <House :house="house" class="house-details" />
      <div class="ms-4 flex-grow-1">
        <p>
          <b>Contact Seller</b>
        </p>
        <div class="d-flex clip-text align-items-center">
          <img :src="house.creator.picture" alt="" class="rounded-circle" height="64">
          <h4 class="ms-3">
            {{ house.creator.name }}
          </h4>
        </div>
        <div v-if="house.creatorId === account.id">
          <p>
            <b>Listing Controls</b>
          </p>
          <div class="">
            <button class="btn text-dark lighten-20" @click="remove(house)">
              <b>
                Remove Listing
              </b>
            </button>
            <button class=" btn btn-danger text-white" data-bs-toggle="modal" data-bs-target="#edit-modal">
              <b>
                Edit
              </b>
            </button>
          </div>
        </div>
      </div>
    </div>
    <Modal id="edit-modal">
      <template #modal-title>
        Year: {{ house.year }} bed: {{ house.bedrooms }} bath: {{ house.bathrooms }}   ${{ house.price }}
      </template>
      <template #modal-body>
        <HouseForm :house="house" />
      </template>
    </Modal>
  </div>
  <div v-else>
    Loading........
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import { housesService } from '../services/HousesService.js'
import { AppState } from '../AppState.js'
import Pop from '../utils/Pop.js'
import { router } from '../router.js'
export default {
  setup() {
    const route = useRoute()

    onMounted(() => {
      housesService.getHouseById(route.params.houseId)
    })

    return {
      account: computed(() => AppState.account),
      house: computed(() => AppState.house),
      async remove(house) {
        try {
          const yes = await Pop.confirm('Are you sure?')
          if (!yes) { return }
          await housesService.removeHouse(house.id)
          router.push({ name: 'Houses' })
        } catch (error) {
          Pop.toast(error.message)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
 .house-details{
   max-width: 50vw;
 }

</style>
