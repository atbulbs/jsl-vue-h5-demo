<template>
<div class="home-root">
  <div class="avatar">
  </div>
  <p class="welcome title">
    welcome to jsl-vue-h5
  </p>
  <p class="welcome">
    a vue.js plugins library for h5 devlopment
  </p>
  <jsl-button
    class="home-btn"
    v-for="(item, index) in btnList"
    :key="index + 'home-btn'"
    :text="item.text"
    @click.native="handleClick(index)"
  />
 </div>
</template>


<script type="text/ecmascript-6">
export default {
  data () {
    return {
      btnList: [
        {
          text: 'to demo list page',
          name: 'list'
        },
        {
          text: 'to jsl-vue-h5 npm site',
          location: 'https://www.npmjs.com/package/jsl-vue-h5'
        },
        {
          text: 'to Jason Liao github',
          location: 'https://github.com/8bulbs'
        },
        {
          text: 'to Jason Liao blog',
          location: 'https://8bulbs.github.io'
        }
      ]
    }
  },
  methods: {
    handleClick (index) {
      if (this.btnList[index].name) {
        this.$router.push({
          name: this.btnList[index].name
        })
      } else {
        window.location = this.btnList[index].location
      }
    }
  }
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~styles/mixin'

.home-root
  >.avatar
    with-bg(150px, 170px, '../assets/images/avatar.jpg')
    margin 10px auto
  >.title
    font-weight bold
  >.welcome
    tac()
    margin 25px
  >.home-btn
    margin-bottom 25px
</style>
