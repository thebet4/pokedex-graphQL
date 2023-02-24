const padStart = (str: string, len: number, padChar: string) => {
  while (str.length < (len || 2)) {
    str = padChar + str
    console.log(str)
  }
  return str
}

export default padStart
