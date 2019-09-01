<template>
	<div> i am parent
		i like eat {{food}}
		<router-view />
	</div>
</template>
<script>
export default {
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  }
}
</script>
