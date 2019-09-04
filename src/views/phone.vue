<template>
	<div>
		<p> {{message}}</p>
	</div>
</template>
<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  mounted () {
    this.$bus.$on('on-click', msg => {
      // 给当前事件绑定一个事件监听，读取$bus里的on-click事件
      this.message = msg
    })
  }
}
</script>
