export class House {
  constructor(houseData = {}) {
    this.id = houseData.id
    this.year = houseData.year
    this.description = houseData.description
    this.price = houseData.price
    this.levels = houseData.levels
    this.bedrooms = houseData.bedrooms
    this.bathrooms = houseData.bathrooms
    this.img = houseData.img
    this.creatorId = houseData.creatorId
    this.creator = houseData.creator || {}
  }
}
