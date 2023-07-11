class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
    }
  

  start(printTimeCallback) {
    
    this.intervalId = setInterval(()=>{
      this.currentTime += 1
      if (printTimeCallback){
      printTimeCallback() /// not clear
    } 
    }, 1000)
    
      
  }
  

  getMinutes() {
    let minsElapsed = Math.floor(this.currentTime/60)
    return minsElapsed
  }

  getSeconds() {

    let secondsElapsed = Math.floor(this.currentTime%60)
    return secondsElapsed
  }

  computeTwoDigitNumber(value) {
    if (value < 10){
      let twoDigits = "0" + value.toString()
      return twoDigits
    } else {
      return value.toString()
    }
    
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    const all = this.computeTwoDigitNumber(this.getMinutes())
    const allTwo = this.computeTwoDigitNumber(this.getSeconds())
    return `${all}:${allTwo}`
  }
}

