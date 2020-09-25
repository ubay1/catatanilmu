import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  window.onNuxtReady(() => {
    new VuexPersistence({
      key: 'drawww',
      storage: window.localStorage
    }).plugin(store)
  })
}
