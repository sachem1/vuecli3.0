const getters = {
  appNameWithVersion: (state) => {
    return state.appName + 'v2.0'
  },
  stateValue: (state) => {
    return state.stateValue
  }
}
export default getters
