<template>
  <div>
  	 {{ greeter }}
  	 <ul>
  	 	<li v-for="item in arr">
  	 		<span>{{item.id}}</span>
  	 		<span>{{item.name}}</span>
  	 	</li>
  	 </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      greeter: 'Hello, Vu3232e!',
      arr: []
    }
  },
  mounted: function() {
  	this.$http.apiXxx().then(res => {
  		this.arr = res.data
  	})
  }
}
</script>

<style lang="stylus" src="./index.styl"></style>
