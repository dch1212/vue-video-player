<template>
 	<div>
		<div class="divider"></div>
		<div class="tags-container">
			<header>热门标签</header>
			<div class="tag-list">
				<span class="tag" v-for="tag in video.tags">{{tag.name}}</span>
			</div>
		</div>

		<div class="divider"></div>
		<div class="footer">
			Powered By Vue.js
		</div>
	</div>
</template>
<script>
	export default {
		props:['video']
	}
</script>