<template>
  <div id="AddCar" class="car-list">
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <td>序号</td>
          <td>车牌号</td>
          <td>密码</td>
          <td>上传者</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(car,index) in carList">
          <td>{{index+1}}</td>
          <td>{{car.carNo}}</td>
          <td>{{car.carPwd}}</td>
          <td>{{car.userOwner}}</td>
        </tr>
      </tbody>
    </table>
    <a href="javascript:;" class="btn btn-me btn-lg btn-block" @click="getCarList(++currentPage)" v-if="carList.length==10">下一页</a>
  </div>
</template>
<script>
  export default {
    name: 'useCar',
    data () {
      return {
        'currentPage': 1,
        'carList': []
      }
    },
    mounted: function () {
      this.getCarList(1)
    },
    methods: {
      getCarList: function (curPage) {
        var _this = this
        this.$http.get('/ofo!getAllCarInfo.action', {
          params: {
            currentPage: curPage
          }
        }).then(function (res) {
          var response = JSON.parse(res.data).response[0]
          _this.carList = response.result.list
        })
      }
    }
  }
</script>
<style scoped>
  .car-list {
    margin-top: -40px;
  }
</style>
