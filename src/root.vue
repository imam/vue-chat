<template>
	<chat ref="chat" :name="name" :title="title" :profile-picture="profile_picture"></chat>
</template>

<script>
	import Chat from './chat.vue'

	export default{
		data:{
			name: 'Imam Assidiqqi',
			title: 'CEO',
			profile_picture: 'https://sekolahreact.github.io/assets/images/8213031.jpg'
		},
		components: {
			chat: Chat
		},
		mounted(){
			window.chat = this.$refs.chat
		}
	}
</script>