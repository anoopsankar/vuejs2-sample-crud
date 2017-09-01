<template>
	<div class="page-title">
		<h1>{{ title }}</h1>
		<h2>{{ subtitle }}</h2>
	</div>
</template>

<script>
	export default {
		name: 'page-title',
		props: ['title', 'subtitle']
	}

</script>

<style scoped>
 h1 {
 	font-size: 1.5em;
 	padding: 0;
 	margin: 0;
 }

 h2 {
 	font-size: 1.1em;
 	font-weight: normal;
 	margin: 0;
 	color:#616161;
 }
</style>