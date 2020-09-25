// import axios from 'axios'
// const fakeUrl = 'https://jsonplaceholder.typicode.com/posts'

export const state = () => ({
  widgets: [],
  project: [],
  selectedWidget: '-1'
})

// export const getters = {
//     titles: state => state.titles
// }

export const mutations = {
  SET_PROJECT: (state, data) => {
    state.project.push(data)
  },
  DELETE_PROJECT: (state) => {
    state.project = []
  },
  SELECT_WIDGET: (state, data) => {
    state.selectedWidget = data
  }
}

export const actions = {
  // async nuxtServerInit ({ commit }) {
  //   const response = await axios.get(fakeUrl)
  //   const data = response.data
  //   const Titles = data.map(({ title }) => title)
  //   commit('SET_TITLES', Titles)
  // },
  project: ({ commit }, dataProject) => {
    commit('SET_PROJECT', dataProject)
  },
  removeProject: ({ commit }) => {
    commit('DELETE_PROJECT')
  },
  selectedWidget: ({ commit }, dataSelected) => {
    commit('SELECT_WIDGET')
  }
}
