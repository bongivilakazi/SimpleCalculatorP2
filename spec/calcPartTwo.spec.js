"use strict"
describe("calculator class", function () {
    beforeEach(function (){
        global.Calculator = require('../src/calculatorPart2Trial.js');
        global.calculatorInstance = new Calculator()
    });
    it("It should return the sum from the  add function", function () {
        expect(calculatorInstance.add(1, 2)).toBe(3)
        expect(calculatorInstance.add(1, 2, 3, 4)).toBe(10)
    });
    it(" It should return the product of the multiply function", function () {
        expect(calculatorInstance.multiply(1, 2)).toBe(2)
        expect(calculatorInstance.multiply(1, 2, 3, 4)).toBe(24)
    });
    it("It  should get the last elements in the storage array", function () {``
        calculatorInstance.add(1, 2, 3, 4)
        calculatorInstance.multiply(1, 2, 3, 4)
        expect(calculatorInstance.last()).toBe(24)
    })
    it("It should allow the function last() to be passed as an argument and used in an operation", function () {
        calculatorInstance.add(1, 2, 3, 4)
        calculatorInstance.multiply(1, 2, 3, 4)
        expect(calculatorInstance.multiply("LAST", 2)).toBe(48)
    });
    it("It should return an element on a specific index determined by the setslot argument", function () {
        calculatorInstance.add(1, 2)
        calculatorInstance.setSlot(1)
        expect(calculatorInstance.getSlot(1)).toBe(3)

        calculatorInstance.add(10, 20)
        calculatorInstance.setSlot(2)
        expect(calculatorInstance.getSlot(2)).toBe(30)

        calculatorInstance.add(100, 200)
        expect(calculatorInstance.getSlot(1)).toBe(3)
        expect(calculatorInstance.getSlot(2)).toBe(30)
        expect(calculatorInstance.last()).toBe(300)

        expect(calculatorInstance.add(calculatorInstance.last(), 10)).toBe(310)
        expect(calculatorInstance.add("SLOT_1", 5)).toBe(8)
        expect(calculatorInstance.multiply(calculatorInstance.getSlot(2), 2)).toBe(60)

    });
});
