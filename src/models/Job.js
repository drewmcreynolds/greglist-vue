export class Job {
  constructor(jobData = {}) {
    this.id = jobData.id
    this.description = jobData.description
    this.pay = jobData.pay
    this.company = jobData.company
    this.creatorId = jobData.creatorId
    this.creator = jobData.creator
  }
}
