<template>
	<div class="relate-video-list">			
		<div
			class="relate-video"
			v-for="video in relateVideo"
			:key="video.id">
			<router-link :to="{ path:'/detail/'+ video.id + '/index'}">
				<div class="relate-cover">
					<img :src="video.coverForDetail">
				</div>
				<div class="relate-meta">
					<div class="title">{{ video.title }}</div>
					<div class="category">#{{ video.category }} / {{ video.time }}</div>
				</div>
			</router-link>
		</div>
		<detail-footer :video="v"></detail-footer>	
	</div>
	
</template>
<script>
import DetailFooter from './DetailFooter.vue'

export default {
	components:{
		'detail-footer':DetailFooter
	},
	computed:{
		relateVideo(){
			return this.$store.state.relateVideo;
		},
		v(){
			return this.$store.state.video;
		}
	}
}

</script>

