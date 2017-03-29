export function refreshing (refresher) {
  refresher && refresher.complete()
  let loading = this.create({ dismissOnPageChange: true })
  loading.present()
  return loading
}
