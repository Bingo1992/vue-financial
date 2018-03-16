<template>
  <div class="home">
     <!-- <ul>
       <li v-for="(item, i) in proList">{{item.name}}</li>
     </ul> -->
     <header class="fixed-top">
        <div class="nav-outer">
            <ul class="nav-tabs border-bottom">
                <li class="active">
                    <a>6月期</a>
                </li>
                <li>
                    <a>7月期</a>
                </li>
                <li>
                    <a>8月期</a>
                </li>
            </ul>
        </div>
    </header>

    <div class="banner-bt">
      <ul v-show="num == 0" class="content-list">
        <li></li>
      </ul>
    </div>

  </div>
</template>

<script>
 import {proList} from '/api/index'
export default {
  name: 'home',
  data () {
    return {
      proList: []
    }
  },
  created() {
     this._getPro();
  },
  methods: {
    async _getPro() {
      proList().then( res => {
          this.proList = res;
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../../assets/scss/var.scss';
.nav-outer {
  width: 100%;
  overflow: hidden;
  background-color: #fff;
}
.nav-tabs {
  display: -webkit-box;
  overflow-x: auto;
  padding: 10px;
  a {
    width: 80px;  
    display: block;
      text-align: center;
      line-height: 36px;
      border-radius: 18px;
  }
  .active {
    a {
      background: $bgk-theme;
      color: #fff;
    }
  }

}

</style>
