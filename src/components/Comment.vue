<template>
	<div class="video-comment-list">
		<div
			class="comment"
			v-for="comment in videoComment"
			:key="comment.id">
			<div class="avatar">
				<img :src="comment.avatar">
			</div>
			<div class="meta">
				<p class="user-name">{{ comment.userName }}</p>
				<p class="time">{{ comment.time }}</p>
				<p class="text">{{ comment.message }}</p>
				<div class="like">
					<div class="like-count">
						<span>{{ comment.likeCount }}</span>
						<img src="../assets/img/icon-like.png">
					</div>
					<div class="like-hot" v-show="comment.hot">- Hot -</div>
				</div>
				<div class="divider" v-show="!comment.lasted"></div>
			</div>
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
		videoComment(){
			return this.$store.state.videoComment;
		},
		v(){
			return this.$store.state.video;
		}
	}
}
	
</script>
<style lang="scss">
	.video-comment-list{
		padding-top:30px;
		font-size:12px;
		background:#fafafa;
		position:absolute;
		width:100%;
		.comment{
			margin-bottom:20px;
			.avatar{
				width:40px;
				height:40px;
				border-radius:40px;
				background:#ddd;
				float:left;
				margin-left:20px;
				overflow:hidden;
				position:relative;
				img{
					width:100%;
					height:auto;
					display:block;
					position:absolute;
					top:50%;
					transform: translateY(-50%);
				}
			}
			.meta{
				margin-left:70px;
				position:relative;
				.user-name{
					margin-bottom:4px;
				}
				.time{
					margin-bottom:4px;
					opacity:.85;
				}
				.text{
					margin-bottom:20px;
					padding-right:20px;
				}
				.like{
					position: absolute;
					right:20px;
					top:0;
					text-align:right;
					.like-count img{
						width:15px;
						height:15px;
						margin-left:3px;
					}

				}
			}
		}			
	}
</style>