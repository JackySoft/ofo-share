<template>
    <div id="UseCar">
      <div class="panel panel-primary">
        <div class="panel-heading">输入车牌号</div>
        <div class="panel-body">
          <div class="form-group">
              <input type="number" class="form-control" v-model="carNo" placeholder="请输入您要解锁的车牌号">
          </div>
          <a class="btn btn-me btn-block" v-on:click="getCarPwd">获取密码</a>
        </div>
      </div>
      <div class="modal fade" :class="{'in':showModal}" v-show="showModal" style="display:block" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true" @click="showModal=false">
                &times;
              </button>
              <h4 class="modal-title" id="myModalLabel">
                爱心提示
              </h4>
            </div>
            <div class="modal-body text-center">
               <div v-if="totalNum == 0">
                  很抱歉,当前车辆未解锁,您可以共享此密码.
               </div>
              <div v-if="totalNum == 1">
                恭喜您,当前车辆已解锁,解锁密码为:{{carList[0].carPwd}}
              </div>
              <div v-if="totalNum > 1">
                  <table class="table table-striped table-hover">
                    <tr>
                      <td>车牌号</td>
                      <td>密码</td>
                    </tr>
                    <tr v-for="car in carList">
                      <td>{{car.carNo}}</td>
                      <td>{{car.carPwd}}</td>
                    </tr>
                  </table>
              </div>
            </div>
            <div class="modal-footer text-center">
              <router-link class="btn btn-info btn-block" @click="showModal=false" to="/">知道了,回到首页</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-backdrop fade" :class="{'in':showModal}" v-if="showModal"></div>
    </div>
</template>
<script>
  export default {
    name: 'useCar',
    data () {
      return {
        'carNo': '',
        'totalNum': 0,
        'carList': [],
        'showModal': false
      }
    },
    methods: {
      getCarPwd: function () {
        var _this = this
        this.$http.get('/ofo!getCarInfo.action', {
          params: {
            carNo: this.carNo
          }
        }).then(function (res) {
          var response = JSON.parse(res.data).response[0]
          _this.showModal = true
          if (response.status === '01') {
            _this.totalNum = response.result.totalNum
            _this.carList = response.result.list
          }
        })
      },
      confirm: function () {
        this.showModal = false
      }
    }
  }
</script>
<style>
  #myModal .modal-dialog{
    transform: translate(-50%,-50%);
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    margin:0;
  }
</style>
