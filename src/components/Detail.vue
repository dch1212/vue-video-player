<template>
	<div class="vue-container">
		<div class="vue-player">
			<video ref="player" class="vue-player-video" webkit-playsinline="ture" :controls="playing"
				:src="v.url"></video>
			<div class="cover" :style="v.cover" v-show="!playing"></div>
			<div class="icon-play" @click="play()" v-show="!playing"></div>
		</div>
		<div class="vue-video-info">
			<div class="video-meta">
				<h1>{{ v.title }}</h1>
				<div class="divider divider-short"></div>
				<p>{{ v.cat }} / {{ v.time }}</p>
				<p class="description">{{ v.desc}}</p>
			</div>			
		</div>
		
		<!-- 导航栏 -->
		<div class="video-nav">			
				<router-link
					class="tab"
					:to="{name:'relate-video'}"
					active-class="active"
					tag="div"><a>相关</a></router-link>	
				<router-link
					class="tab"
					:to="{name:'comment'}"
					active-class="active"
					tag="div"><a>评论<span class="comment-count" v-show="videoComment.length > 0">{{ videoComment.length }}</span></a></router-link>		
		</div>
		
		<!-- 相关视频 及 评论栏 -->
		<div class="meta-container">
			<transition :name="slideName">
				<router-view class="relate-meta"></router-view>
			</transition>
		</div>			
	</div>		
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import RelateVideo from './RelateVideo.vue'
import Comment from './Comment.vue'

export default {
	data(){
		return {
			slideName: 'slide-left',
			playing: false,
		}
	},
	computed: {
		video(){
			return this.$store.state.video
		},
		relateVideo(){
			return this.$store.state.relateVideo
		},
		videoComment(){
			return this.$store.state.videoComment
		},
		v(){
			const _v = this.video;
			return {
				title: _v.title,
				desc: _v.description,
				cat: _v.category,
				tags: _v.tags,
				url: _v.playUrl,
				time: _v.time,
				cover: {
					backgroundImage: `url(${_v.coverForDetail})`,
				},
			}
		}
	},
	
	created(){
		this.fetchData();
	},

	watch:{
		'$route'(to,from){
			this.fetchData();
			this.playing = false;
			let arr = to.path.split('/');
			let str = arr[arr.length-1];
			if(str == 'comment') {
				this.slideName = 'slide-left';
			}else if (str == 'index') {
				this.slideName = 'slide-right';
			}
		}
	},
	methods:{
		fetchData(){
			const VID = this.$route.params.vid;
			const BASE_URL = 'http://baobab.wandoujia.com/api/v1';
			const _that = this;
			axios.get(`${BASE_URL}/video/${VID}`)
				.then(function(res){
					_that.$store.commit('GET_VIDEO_INFO_SUCCESS', res);
				});

			axios.get(`${BASE_URL}/video/related/${VID}?num=5`)
				.then(function(res){
					_that.$store.commit('GET_RELATE_VIDEO_LIST_SUCCESS', res);
				});

			axios.get(`${BASE_URL}/replies/video?id=${VID}&num=5`)
				.then(function(res){
					_that.$store.commit('GET_VIDEO_COMMENT_SUCCESS', res);
				});	
		},
		play(){
			const $player = this.$refs.player;
			$player.play();
			this.playing = true;
		}
	}			
}

</script>

<style lang="scss">
	@import "../assets/scss/detail.scss";

	.icon-play{
		background-image:url(../assets/img/icon-play.png)
	}	
</style>