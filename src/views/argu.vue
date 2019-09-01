<template>
	<div>{{$route.params.name}}</div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: 'jiesen'
    }
  }
}
</script>
