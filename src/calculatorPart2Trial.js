"use strict";
class Calculator {
  constructor() {
    this.results = [];
    this.memorySlot = [];
  }

  add() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
      if (arguments[i] == "LAST") {
        sum += this.last();
      } else if (
        typeof arguments[i] == "string" &&
        arguments[i].includes("SLOT_")
      ) {
        let slotPosition = arguments[i].match(/\d+/g);
        parseInt(slotPosition);
        sum += this.getSlot(slotPosition);
      } else {
        sum += arguments[i];
      }
    }
    this.results.push(sum);
    return sum;
  }

  multiply() {
    var product = 1;
    for (var k = 0; k < arguments.length; k++) {
      if (arguments[k] == "LAST") {
        product *= this.last();
      } else if (
        typeof arguments[k] == "string" &&
        arguments[k].includes("SLOT_")
      ) {
        let slotPosition = arguments[k].match(/\d+/g);
        parseInt(slotPosition);
        product *= this.getSlot(slotPosition);
      } else {
        product *= arguments[k];
      }
    }
    this.results.push(product);
    return product;
  }

  last() {
    var last = this.results[this.results.length - 1];
    return last;
  }

  setSlot(slotslotPositionber) {
    this.memorySlot.push(this.results[slotslotPositionber - 1]);
  }
  getSlot(slotslotPositionber) {
    return this.results[slotslotPositionber - 1];
  }
}

module.exports = Calculator