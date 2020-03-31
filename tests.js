const { expect } = require('chai')
const { describe, it } = require('mocha')
const calculate = require('./index')

describe('HazyCalculator', () => {
  it('multiplies two numbers when one is stringified', () => {
    const calculationSteps = ['2', '*', 4]

    expect(calculate(calculationSteps)).to.equal(8)
  })

  it('treats null values as zeroes and includes them in the calculation', () => {
    const calculationSteps = [10, '+', null]

    expect(calculate(calculationSteps)).to.equal(10)
  })

  it('ignores undefined and empty string values and continues operation', () => {
    const calculationSteps = [, , '', 23, '-', , 12] // eslint-disable-line no-sparse-arrays

    expect(calculate(calculationSteps)).to.equal(11)
  })

  it('returns NaN if the array does not represent a proper operation', () => {
    const calculationSteps = ['13', , '', 15] // eslint-disable-line no-sparse-arrays

    expect(calculate(calculationSteps)).to.be.NaN
  })

  // Additional Tests
  it('ignores string values and continues operation', () => {
    const calculationSteps = [3, 'foo', '+', null] // eslint-disable-line no-sparse-arrays

    expect(calculate(calculationSteps)).to.equal(3)
  })

  it('returns NaN if the array does not represent a proper operation - too many items on left of operator', () => {
    const calculationSteps = [10, 10, '10', '+', '10'] // eslint-disable-line no-sparse-arrays

    expect(calculate(calculationSteps)).to.be.NaN
  })

  it('returns NaN if the array does not represent a proper operation - too many items on right of operator', () => {
    const calculationSteps = [10, '+', '10', 10, 10] // eslint-disable-line no-sparse-arrays

    expect(calculate(calculationSteps)).to.be.NaN
  })
})
