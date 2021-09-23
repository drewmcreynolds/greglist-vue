<template>
  <div class="mb-4 listing">
    <router-link :to="{name: 'House', params: { houseId: house.id }}">
      <div class="card selectable">
        <img :src="house.img" alt="listing image" class="rounded">
        <div class="card-body">
          <h5 class="d-flex justify-content-between">
            <span>Year: {{ house.year }} ${{ house.price }}</span>
            <span> Bed: {{ house.bedrooms }} Bath: {{ house.bathrooms }} </span>
          </h5>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { House } from '../models/House.js'
import { logger } from '../utils/Logger.js'

export default {
  props: {
    house: { type: House, required: true }
  },
  setup(props) {
    return {
      deleteHouse() {
        logger.log('is this working?')
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
