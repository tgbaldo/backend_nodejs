class DataNotFoundException extends Error {
  constructor(message, statusCode = 404) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

module.exports = {
  DataNotFoundException
}
