<template>
	
</template>

<script>

export default {
	name: 'directory',
	components: { UserList },
	data() {
		return {
			users: [
				{ name: "Mark", phone: "123", email: "nilson@nel.son"}
			]
		}
	},
	computed: {
		description: function() {
			return "You have " + this.users.length + " team members";
		}
	}
}

</script>

<style scoped>
	ul {
		list-style-type: none;
	}
</style>