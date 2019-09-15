<template>
	<div class="split-pane-con">
		<!-- 手动实现v-model -->
		<!-- <split-pane :offsetVal="offset"
								@input="updateVal"></split-pane> -->
		<!-- 这种方式相当于子组件里面有一个属性叫value,默认给它赋值 -->
		<!-- <split-pane v-model="offset"></split-pane> -->
		<!-- 这种事sync 的赋值方式 -->
		<split-pane :offsetVal.sync="offset">
			<div slot="left">left:123</div>
			<div slot="right">right:123</div>
		</split-pane>
	</div>
</template>

<script>
import SplitPane from '@/components/split-pane'

export default {
  name: 'split_pane',
  data () {
    return {
      offset: 0.6
    }
  },
  components: {
    SplitPane
  },
  methods: {
    updateVal (value) {
      this.offset = value
    }
  }

}
</script>

<style lang="less">
.split-pane-con {
	width: 400px;
	height: 200px;
	background: papayawhip;
}
</style>
