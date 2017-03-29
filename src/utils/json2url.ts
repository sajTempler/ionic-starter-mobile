export function json2url (data) {
  let arr = []
  for (let i in data) {
    arr.push(i + '=' + data[i])
  }
  return arr.join('&')
}
