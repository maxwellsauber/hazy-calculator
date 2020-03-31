const calculate = (arr) => {
  const calculationData = sanitizeCalculationData(arr)
  const n1 = Number(calculationData[0])
  const n2 = Number(calculationData[2])
  const operator = calculationData[1]

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

const sanitizeCalculationData = (arr) => {
  const validForCalculation = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === null) {
      validForCalculation.push(0)
    } else if (arr[i]) {
      validForCalculation.push(arr[i])
    }
  }

  return validForCalculation
}

module.exports = calculate
