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
      this.message = msg
    })
  }
}
</script>
