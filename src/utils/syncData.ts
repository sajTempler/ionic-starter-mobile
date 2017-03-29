export function syncData (data) {
  for (let i in data) {
    this[i] = data[i]
  }
}
