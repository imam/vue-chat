<template>
	<div>
		<div class="timestamp">{{hour}}:{{minute}}</div>
		<div v-if="delivered" class="checkmark-sent-delivered">&check;</div>
	    <div v-if="read" class="checkmark-read">&check;</div>
	</div>
</template>

<script>
	export default{
		props: [
			'hour',
			'minute',
			'delivered',
			'read'
		]
	}
</script>