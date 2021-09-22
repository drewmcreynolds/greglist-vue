import { AppState } from '../AppState.js'
import { House } from '../models/House.js'
import { api } from './AxiosService.js'

class HousesService {
  async getHouses() {
    AppState.houses = []
    const res = await api.get('api/houses')
    AppState.houses = res.data.map(h => new House(h))
  }

  async getHouseById(houseId) {
    AppState.house = null
    const res = await api.get(`api/houses/${houseId}`)
    AppState.house = new House(res.data)
  }
}
