<template>
	<div>
		<count-to ref="countTo"
							:end-val="endVal"
							@on-animation-end="handleEnd">
			<span slot="left">总金额: </span>
			<span slot="right">元</span>
		</count-to>
		<button @click="updateEndVal">更新值</button>
		<button @click="getNumber">获取值</button>
	</div>
</template>

<script>
import CountTo from '@/components/count-to'

export default {
  name: 'count_to',
  components: {
    CountTo
  },
  data () {
    return {
      endVal: 100
    }
  },
  methods: {
    updateEndVal () {
      this.endVal = Math.random() * 1000
      // this.$refs.countTo.updateEndVal(endVal,0)
    },
    getNumber () {
      console.log(this.$refs.countTo.getCount())
    },
    handleEnd (endVal) {
      console.log('end -->', endVal)
    }
  }
}
</script>

<style>
</style>
