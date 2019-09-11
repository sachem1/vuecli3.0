<template>
	<div>
		<count-to :end-val="endVal">
			<span>总金额: </span>
		</count-to>
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
  }
}
</script>

<style>
</style>
