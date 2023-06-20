class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    setInterval(() => {
      this.currentTime += 1;
        if (printTimeCallback) {
        printTimeCallback();
        }
      }
    , 1000)
  }

  getMinutes() {
    const totalMin = Math.floor(this.currentTime/60)
    return  totalMin;
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    let twoDigNum = "";
    if(value < 10){
      twoDigNum = "0"+value.toString();
    }else {
      twoDigNum = value.toString();
    }
    return twoDigNum;
    /* return (value).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) */

/*     if (this.getMinutes.length < 2) {
      return `0${this.getMinutes.value}`
    } else {
      return `${this.getMinutes.value}`
    }
 */
    
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const min = this.computeTwoDigitNumber(this.getMinutes())
    const sec = this.computeTwoDigitNumber(this.getSeconds())

    return `${min}:${sec}`
  }
}
