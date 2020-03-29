const calculate = (arr) => {
  const calculationData = sanitiezeCalculateArr(arr)
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

const sanitiezeCalculateArr = (arr) => {
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
