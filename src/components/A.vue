<template>
  <div class="hello">
    <div>A</div>
    <input type="text" v-model="a">
    <div><router-link to='/B'>to B</router-link></div>
    <div><router-link to='/C'>to C</router-link></div>

    <p>A,B,C</p>

    <p>A->B->A A不刷新</p>
    
    <p>A->C->A A刷新</p>
    <p v-if="activated.length > 1"> 页面是缓存页面，可以在activated()里更新</p>
  </div>
</template>

<script>
export default {
  name: 'A',
  props: {
    msg: String
  },
  data(){
    return{
      a:'',
      activated:[]
    }
  },
  created() {
    console.log('created')
  },
  mounted() {
    console.log('mounted')
  },
  beforeRouteLeave (to, from, next) {
    console.log(to,from)
    if (to.name === 'B') {
       from.meta.keepAlive = true
    } else if (to.name === 'C') {
       from.meta.keepAlive = false
    }
    next()
  },
  activated(){
    console.log('activated')
    this.activated.push('activated')
    console.log('this.activated',this.activated)
  }
}
</script>

