<template>
	<div class="userList">
		<router-link :to="{name: 'user_new'}">
			<button style="float:right;">+</button>
		</router-link>

		<page-title title="Team Members" :subtitle="description"></page-title>
		<ul>
			<li v-for="user in users" :key="user.id">
				<router-link :to="{name: 'user_edit', params: {id: user.id}}">
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
		border-top: 1px solid #2196F3;
		border-bottom: 1px solid #2196F3;
		color: #616161;
		font-size: 0.9em;
	}

	li a {
		text-decoration: none;
		color: inherit;
	}

	h5 {
		margin: 0;
		color: #212121;
		font-size: 1em;
	}

</style>