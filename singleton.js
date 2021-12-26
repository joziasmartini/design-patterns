class PersonLogger {
    // Create a new instance with empty array
    // Or returns the same instance everytime
    constructor() {
      if (PersonLogger.instance == null) {
        this.logs = []
        PersonLogger.instance = this
      }
      return PersonLogger.instance
    }
  
    log(message) {
      this.logs.push(message)
      console.log(`Logged: ${message}`)
    }
  
    printLogCount() {
      console.log(`${this.logs.length} Logs`)
    }
}

// Create logger and freeze
const logger = new PersonLogger()
Object.freeze(logger)

function walk() {
  logger.printLogCount()
  logger.log('Person is walking')
  logger.printLogCount()
}

function sit() {
  logger.printLogCount()
  logger.log('Person is sitting')
  logger.printLogCount()
}

walk()
sit()
