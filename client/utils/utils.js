export const fetch = (api, request = {}) => {
  request.mode = request.mode || 'cors'

  request.headers = Object.assign({}, {
    'Accept': '*/*',
    'Content-Type': 'application/json; charset=UTF-8',
  }, request.headers)

  if (request.headers['Content-Type'] === 'multipart/form-data-import') {
    delete request.headers['Content-Type']
  }

  return window.fetch(api, request)
}
