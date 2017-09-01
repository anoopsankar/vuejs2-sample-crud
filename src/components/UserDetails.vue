<template>
	<div class="user-details">
		<router-link :to="{name: 'home'}">
			<button style="float:right;">X</button>
		</router-link>

		<page-title :title="title" subtitle="Edit info and role"></page-title>
		<p>
			<label>Info</label>
			<br/>
			<form v-on:submit.prevent='updateUser'>
				<input type="text" v-model="user.firstname" /><br/>
				<input type="text" v-model="user.lastname" /><br/>
				<input type="text" v-model="user.email" /><br/>
				<input type="text" v-model="user.phone" /><br/>
				<p><input type="submit" class="button" value="Save" style="float:right" /></p>
			</form>
			<p v-if="!isNewUser"><button class="button danger" v-on:click='deleteUser'>Delete</button></p>

		</p>
	</div>
</template>

<script>
	
import PageTitle from '@/components/PageTitle'
import store from '@/store'

export default {
	name: 'user-details',
	components: { PageTitle },
	
	props: ['id', 'isNewUser'],

	data() {
		return {
			user: Object.assign({}, store.getUserById(this.id))
		}
	},

	methods: {
		updateUser: function() {
			store.createOrUpdateUser(this.user)
			this.$router.push('/')
		},

		deleteUser: function() {
			store.deleteUser(this.user)
			this.$router.push('/')
		}
	},

	computed: {
		title: function() {
			if (this.isNewUser) 
				return "Create Team Member"
			else
				return "Edit Team Member"
		}
	}


}
</script>

<style scoped>
input[type="text"] {
  padding: 5px;
  width: 485px;

  font-size: 0.9em;
  border: solid 2px #bdbdbd;
  transition: border 0.5s;
  margin-bottom: 5px;
}

input[type="text"]:focus {
  border: solid 2px #795548;
  outline: none;
}

</style>