<template>
	<div><button @click="handleClick">点击我</button></div>
</template>
<script>
export default {
  methods: {
    handleClick () {
      this.$emit('on-click', 'hello')
      this.$bus.$emit('on-click', 'hello')
    }
  },
  mounted () {
    this.$on('on-click', msg => {
      console.log(msg)
    })
  }
}
</script>
