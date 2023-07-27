import BaseError from "./baseError"

class ServerError extends BaseError {
  
  constructor (options:any = {}) {
    super(options)
    this.name = this.constructor.name
    this.message = options.message
    this.status = options.status
  }
}

export default ServerError