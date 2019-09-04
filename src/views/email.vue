<template>
	<div><button @click="handleClick">点击我</button></div>
</template>
<script>
export default {
  methods: {
    handleClick () {
      this.$emit('on-click', 'hello')
      this.$bus.$emit('on-click', 'hello') // this.$bus.$emit触发当前实例上的事件，把on-click事件绑定在$bus上
    }
  },
  mounted () {
    this.$on('on-click', msg => {
      console.log(msg)
    })
  }
}
</script>
