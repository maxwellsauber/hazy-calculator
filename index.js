const calculate = (arr) => {
  const calculationData = sanitizeCalculationData(arr)
  const n1 = calculationData[0]
  const n2 = calculationData[2]
  const operator = calculationData[1]

  switch (operator) {
    case '+': return n1 + n2
    case '-': return n1 - n2
    case '*': return n1 * n2
    case '/': return n1 / n2
    default: return NaN
  }
}

const sanitizeCalculationData = (arr) => {
  const forCalculation = []
  const validOperators = ['+', '-', '*', '/']

  for (let i = 0; i < arr.length; i++) {
    if (validOperators.includes(arr[i])) { forCalculation.push(arr[i]) }
    if (Number(arr[i])) { forCalculation.push(arr[i]) }
    if (arr[i] === null) { forCalculation.push(0) }
  }

  return forCalculation.length === 3 ? forCalculation : NaN

}

module.exports = calculate
