<template>
  <div class="home-container">
      <div class="circle circle-ani"></div>
      <router-link to="/detail/16049">ENTER</router-link> 
      <div class="title">VUE-VIDEO SPA DEMO</div>    
  </div>
</template>

<script>
</script>
<style lang="scss">
.home-container{
  width:100%;
  height:100%;
  display:relative;
  animation: mainEnter 1s;
  a{
    position:absolute;   
    display:block;
    width: 100px;
    height: 100px;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    border:1px solid dodgerblue;
    border-radius: 100px;
    text-align:center;
    line-height:100px;
    font-size:18px;
    color:dodgerblue;
    &:hover, &:active{
      background:#444;
    }

  }
  .circle{
    position:absolute;   
    display:block;
    width: 100px;
    height: 100px;
    border-radius: 100px;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    border:1px solid dodgerblue;   
  }

  .circle-ani{
    animation:enter 2s infinite; 
  }

  .title{
    color:dodgerblue;
    text-align:center;
    position:fixed;
    bottom:50px;
    left:50%;
    transform:translateX(-50%);
    font-weight:lighter;


  }
} 

@keyframes enter {
  0% {transform:translate(-50%,-50%) scale(1,1); opacity:1;}
  100% {transform:translate(-50%,-50%) scale(1.4,1.4); opacity:0;}
}

@keyframes mainEnter {
  0% {opacity:0;}
  100% {opacity:1;}
}
</style>
