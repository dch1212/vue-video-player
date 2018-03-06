<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
	*{margin: 0; padding: 0; box-sizing: border-box;}
	body{background: #333; font-size: 13px; font-family:Helvetica,Arial,sans-serif;}
	a{text-decoration:none;}
</style>

<script>
	export default {
		created(){
			try {								
				setTimeout(function(){
					document.body.removeChild(document.getElementById('apploading'));	
				 	document.getElementById('app').style.display="block";
				},2000);
			} catch (e) {
				console.log(e)
			}
		}
	}
</script>
