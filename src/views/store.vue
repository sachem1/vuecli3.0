<template>
	<div>
		<a-input v-model="stateValue" />
		<a-input :value="handleInput"
						 @input='inputChange' />
		<p>{{stateValue}} last letter is -> {{inputValueLastLetter}}</p>
		<p>{{handleInput}}</p>
		<a-show :content="stateValue" />
		<p>appName:{{appName}} -->{{appNameWithVersion}}</p>
		<p>userName:{{userName}} --> firstLetter:{{firstLetter}}</p>

		<button @click='chanageAppName'>修改appName</button>
		<button @click='chanageUserName'>修改userName</button>

	</div>
</template>
<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'store',
  data () {
    return {
      inputValue: ''
    }
  },
  components: {
    AInput,
    AShow
  },
  computed: {
    // ... 表示展开操作符，剩余操作符，返回一个对象，把各个属性扁平化
    // ...mapState(['appName', 'userName'])
    ...mapState({
      // appName: state => state.appName,
      userName: state => state.user.userName, // user 是模块名称
      handleInput: state => state.handleInput,
      stateValue: state => state.stateValue
    }),
    ...mapGetters(['appNameWithVersion', 'firstLetter', 'stateValue']),
    // stateValue: {
    //   get () {
    //     return this.$store.state.stateValue
    //   },
    //   set (value) {
    //     this.SET_INPUT_VALUE(value)
    //   }
    // },
    // appName () {
    //   return this.$store.state.appName
    // },
    // userName () {
    //   return this.$store.state.user.userName
    // }
    inputValueLastLetter () {
      return this.inputValue.substr(-1, 1)
    },
    appNameWithVersion () {
      return this.$store.getters.appNameWithVersion
    },
    appName () {
      return this.$store.state.appName
    }

  },
  methods: {
    ...mapActions(['updateAppName']),
    ...mapMutations([
      'SET_APP_NAME',
      'SET_INPUT_VALUE'
    ]),
    // handleInput (val) {
    //   this.inputValue = val
    // },
    chanageUserName (username) {
      this.userName = username
    },
    chanageAppName () {
      //提交mutation
      // this.$store.commit('SET_APP_NAME', 'newAppName')
      this.$store.dispatch('updateAppName')
    },
    inputChange (val) {
      this.SET_INPUT_VALUE(val)
    }

  }
}
</script>
