const calculate = (arr) => {
  const forCalculation = cleanCalculateInput(arr)
  const n1 = Number(forCalculation[0])
  const n2 = Number(forCalculation[2])
  const operator = forCalculation[1]

  switch (operator) {
    case '+':
      return n1 + n2
    case '-':
      return n1 - n2
    case '*':
      return n1 * n2
    case '/':
      return n1 / n2
    default:
      return NaN
  }
}

const cleanCalculateInput = (arr) => {
  const validForCalculate = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === null) {
      arr[i] = 0
      validForCalculate.push(arr[i])
    } else if (arr[i]) {
      validForCalculate.push(arr[i])
    }
  }

  return validForCalculate
}

module.exports = calculate
