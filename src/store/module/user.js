const state = {
  userName: 'jiesen'
}
const getters = {
  firstLetter: (state) => {
    return state.userName.substr(0, 1)
  }
}
const mutatioins = {
  //
}
const actions = {
  //
}
export default {
  // namespced: true,
  state,
  mutatioins,
  actions,
  getters
}
