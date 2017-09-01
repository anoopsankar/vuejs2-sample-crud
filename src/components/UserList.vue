<template>
	<div class="userList">
		<page-title title="Team Members" :subtitle="description"></page-title>
		<ul>
			<li v-for="user in users">
				<router-link :to="{name: 'user', params: {id: user.id}}">
				<p>
					<h5>{{ user.firstname }} {{ user.lastname }}</h5>
					    {{ user.phone }}<br/>
					    {{ user.email }}
				</p>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
import PageTitle from '@/components/PageTitle'
import store from '@/store'

export default {
	name: 'userList',
	components: { PageTitle },
	data() {
		return {
			users: store.users
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
		padding:0;
	}

	li {
		border-top: 1px solid #fee;
		border-bottom: 1px solid #fee;
	}

	li a {
		text-decoration: none;
	}

	h5 {
		margin: 0;
	}

</style>