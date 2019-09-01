/* eslint-disable no-template-curly-in-string */
<template>
	<div class="home">
		<p>
			<button @click="handleClick('back')">返回上一页</button>
			<button @click="handleClick('push_3')">跳转</button>
			<button @click="handleClick('replace')">替换到parent</button>
		</p>
		<img alt="Vue logo"
				 src="../assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App" />

	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    handleClick (type) {
      if (type === 'back') this.$router.back()
      else if (type === 'push') this.$router.push('/parent')
      else if (type === 'push_1') {
        this.$router.push({
          name: 'parent',
          query: {
            name: 'jiesen'
          }
        })
      } else if (type === 'push_2') {
        this.$router.push({
          name: 'argu',
          params: {
            name: 'jiesen'
          }
        })
      } else if (type === 'push_3') {
        this.$router.push({
          path: '/argu/${name}'
        })
      } else if (type === 'replace') {
        this.$router.replace('parent')
      } else this.$router.push('/home')
    }
  }
}
</script>
