<template>
	<div class="user-details">
		<page-title title="Edit Team Member" subtitle="Edit info and role"></page-title>
		<p>
			<label>Info</label>
			<br/>
			<form v-on:submit.prevent='addUser'>
				<input type="text" v-model="user.firstname" /><br/>
				<input type="text" v-model="user.lastname" /><br/>
				<input type="text" v-model="user.email" /><br/>
				<input type="text" v-model="user.phone" /><br/>

				<input type="submit" value="Submit" />
			</form>
		</p>
	</div>
</template>

<script>
	
import PageTitle from '@/components/PageTitle'
import store from '@/store'

export default {
	name: 'user-details',
	components: { PageTitle },
	isNewUser: false,

	props: ['id'],

	data() {
		return {
			user: Object.assign({}, store.getUserById(this.id))
		}
	},

	methods: {
		addUser: function() {
			store.createOrUpdateUser(this.user)
			console.log("Adding User")
		}
	}
}
</script>