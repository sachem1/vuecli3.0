/* eslint-disable no-template-curly-in-string */
<template>
	<div class="home">
		<div>{{food}}</div>
		<p>
			<button @click="handleClick('back')">返回上一页</button>
			<button @click="handleClick('push_3')">跳转</button>
			<button @click="handleClick('replace')">替换到parent</button>
			<button @click="getInfo()">请求数据</button>
		</p>
		<img alt="Vue logo"
				 src="../assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App" />

	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import axios from 'axios'
import { getUserInfo } from '@/api/user'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  props: {
    food: {
      type: String,
      default: 'apple'
    }
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
          path: '/argu/${name}' // http://localhost:8080/argu/jiesen
        })
      } else if (type === 'replace') {
        this.$router.replace('parent')
      } else this.$router.push('/home')
    },
    getInfo () {
      getUserInfo({ userId: 21 }).then(res => {
        console.log('res: ', res)
      })
      // axios.get('http://api.jieqiang.top/Setting/CustomerService/GetSignTypes').then(res => {
      //   console.log('res:' + res)
      // })
    }
  }
}
</script>
