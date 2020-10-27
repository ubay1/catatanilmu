export default $http => resource => ({
  index () {
    return $http.$get(`${resource}`)
  },

  show (id) {
    return $http.$get(`${resource}/${id}`)
  },

  create (payload) {
    return $http.$post(`${resource}`, payload)
  },

  update (id, payload) {
    return $http.$post(`${resource}/${id}`, payload)
  },

  delete (id) {
    return $http.$delete(`${resource}/${id}`)
  }
})
