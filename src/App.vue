<template>
  <div>
    <Header></Header>
    <div class="container">
      <router-view ></router-view>
    </div>
    <div class="footer">Copyright © 2016-Future JackBean</div>
  </div>
</template>
<style>
  body,h1,h2,h3,p,div,html,ul,li,dl,dt{
    margin: 0;
    padding: 0;
  }
  .footer{
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: black;
    color: white;
    font-size: 14px;
    position: fixed;
    bottom: 0;
    left: 0;
    right:0;
  }
  .btn-me {
    color: black;
    background-color: #fed52f;
    border-color: #fed52f;
  }
</style>
<script>
import Header from './components/Header'
import Home from './components/Home'

export default {
  name: 'app',
  components: {
    Header,
    Home
  }
}
</script>
