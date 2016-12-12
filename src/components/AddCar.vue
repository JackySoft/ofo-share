<template>
  <div id="AddCar">
    <div class="panel panel-primary">
      <div class="panel-heading">共享密码</div>
      <div class="panel-body">
        <div class="form-group">
          <input type="number" class="form-control" v-model="carNo" placeholder="请输入共享的车牌号">
        </div>
        <div class="form-group">
          <input type="number" class="form-control" v-model="carPwd" placeholder="请输入共享的密码">
        </div>
        <div class="form-group">
          <a class="btn btn-me btn-block" @click="addCar">填好了</a>
        </div>
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
          <div class="modal-body text-center" v-text="addMessage">

          </div>
          <div class="modal-footer text-center">
            <router-link class="btn btn-info btn-block" @click="showModal=false" to="/">不客气,回到首页</router-link>
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
        'carPwd': '',
        'showModal': false,
        'addMessage': ''
      }
    },
    methods: {
      addCar: function () {
        if (!this.carNo) {
          this.addMessage = '请输入共享的车牌号,希望您认真填写.'
          _this.showModal = true
          return false
        }
        if (!this.carPwd) {
          this.addMessage = '请输入共享的解锁密码,希望您认真填写.'
          _this.showModal = true
          return false
        }
        var _this = this
        this.$http.get('/ofo!addCarInfo.action', {
          params: {
            carNo: this.carNo,
            carPwd: this.carPwd
          }
        }).then(function (res) {
          var response = JSON.parse(res.data).response[0]
          _this.showModal = true
          if (response.result && response.result.flag) {
            _this.addMessage = '非常感谢您宝贵的分享,其它同学会感谢您的.'
          } else {
            _this.addMessage = '非常抱歉,服务器目前有一些小问题,请您先把密码保存在备忘录里面.'
          }
        })
      }
    }
  }
</script>
