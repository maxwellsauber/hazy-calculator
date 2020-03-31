const calculate = (arr) => {
  const calculationData = sanitiezeCalculationData(arr)
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

const sanitiezeCalculationData = (arr) => {
  const validForCalculation = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === null) {
      arr[i] = 0
      validForCalculation.push(arr[i])
    } else if (arr[i]) {
      validForCalculation.push(arr[i])
    }
  }

  return validForCalculation
}

module.exports = calculate
