<template>
	<div class="split-pane-wrapper"
			 ref="outer">
		<div class="pane pane-left"
				 :style="{width:leftOffsetPercent, paddingRight: `${this.triggerWidth / 2}px` }">
			<button @click="handleClick">
				<slot name="left"></slot>
			</button>
		</div>
		<div class="pane-trigger-con"
				 @mousedown="handleMousedown"
				 @mouseup="handleMouseup"
				 :style="{left:triggerLeft,width:`${triggerWidth}px`}"></div>
		<div class="pane pane-right"
				 :style="{left:leftOffsetPercent, paddingLeft: `${this.triggerWidth / 2}px`}">
			<slot name="right"></slot>
		</div>
	</div>
</template>

<script>
export default {
  name: 'SplitPane',
  props: {
    triggerWidth: {
      type: Number,
      default: 8
    },
    offsetVal: {
      type: Number,
      default: 0.3
    },
    min: {
      type: Number,
      default: 0.3
    },
    max: {
      type: Number,
      default: 0.7
    }
  },
  data () {
    return {
      canMove: false,
      initOffset: 0
    }
  },
  computed: {
    leftOffsetPercent () {
      return `${this.offsetVal * 100}%`
    },
    triggerLeft () {
      console.log(`calc(${this.offsetVal * 100}% -${this.triggerWidth / 2}px)`)
      return `calc(${this.offsetVal * 100}% - ${this.triggerWidth / 2}px)`
    }
  },
  methods: {
    handleClick () {
      this.leftOffset -= 0.02
    },
    handleMousemove (event) {
      if (!this.canMove) return
      console.log('event.pageX-->' + event.pageX)
      const outerRect = this.$refs.outer.getBoundingClientRect()
      console.log(outerRect.left)
      const offset = event.pageX - this.initOffset + this.triggerWidth / 2 - outerRect.left
      let leftOffset = (offset / outerRect.width)
      if (leftOffset < this.min) leftOffset = this.min
      if (leftOffset > this.max) leftOffset = this.max
      // this.offsetVal = leftOffset
      // this.$emit('input', leftOffset)
      this.$emit('update:offsetVal', leftOffset)
    },
    handleMousedown (event) {
      this.canMove = true
      document.addEventListener('mousemove', this.handleMousemove)
      document.addEventListener('mouseup', this.handleMouseup)
      this.initOffset = event.pageX - event.srcElement.getBoundingClientRect().left
    },
    handleMouseup () {
      this.canMove = false
    }
  }
}
</script>

<style lang="less">
.split-pane-wrapper {
	height: 100%;
	width: 100%;
	position: relative;
	.pane {
		position: absolute;
		top: 0;
		height: 100%;
		&-left {
			background: palevioletred;
		}
		&-right {
			right: 0;
			bottom: 0;
			background: paleturquoise;
		}
		&-trigger-con {
			height: 100%;
			background: red;
			position: absolute;
			top: 0;
			z-index: 10;
			user-select: none;
			cursor: col-resize;
		}
	}
}
</style>
