<template>
    <div>
      <div class="btn-list">
        <router-link to="/useCar" class="btn btn-me btn-lg btn-block">现在用车</router-link>
        <router-link to="/addCar" class="btn btn-me btn-lg btn-block">共享密码</router-link>
        <router-link to="/carList" class="btn btn-me btn-lg btn-block">单车列表</router-link>
      </div>
      <a href="javascript:;" class="pay">
        <span class="text-center pay-author">打赏作者</span>
        <img src="./../assets/pay-me.png">
      </a>
    </div>
</template>
<style>
  .btn-list a{
    margin-bottom: 20px;
  }
  .pay-author{
    color: black;
  }
  .pay img{
    width: 100%;
    height: 100%;
  }
  .pay{
    display: inline-block;
    width: 50%;
    height: 50%;
    transform-origin: center center;
    transition-property: transform,-webkit-transform;
    transform: translate(50%,10%) scale(1);
    transition-duration: 1s;
    margin-bottom: 60px;
    text-align: center;
  }
  .expanded .pay{
    transform-origin: right top;
    transition-duration: 1s;
    transform: translate(0) scale(1);
    transition-property: transform,-webkit-transform;
    transform: translate(-24px,24px) scale(0);
  }
</style>
