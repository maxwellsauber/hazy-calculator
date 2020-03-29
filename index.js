const calculate = (arr) => {
  const filteredArr = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === null) {
      arr[i] = 0
      filteredArr.push(arr[i])
    } else if (arr[i] !== '' && arr[i] !== undefined) {
      filteredArr.push(arr[i])
    }
  }

  if (filteredArr.length < 3) { return NaN }

  const n1 = Number(filteredArr[0])
  const n2 = Number(filteredArr[2])

  switch (filteredArr[1]) {
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

module.exports = calculate
