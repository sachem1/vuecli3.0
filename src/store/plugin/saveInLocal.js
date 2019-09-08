export default store => {
  console.log('初始化')
  // 如果已存有这个对象,我们进行替换当前state
  if (localStorage.state) store.replaceState(JSON.parse(localStorage.state))
  store.subscribe((mutation, state) => {
    console.log('触发了')
    // 存储
    localStorage.state = JSON.stringify(state)
  })
}
