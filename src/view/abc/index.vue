<template>
  <div>
  	<table class="container" cellpadding="0" cellspacing="0">
  		<tr class="firstLine">
  			<td>来源/用途</td>
  			<td>变更</td>
  			<td>变更剩余</td>
  			<td>变更前有效期</td>
  			<td>变更后有效期</td>
  			<td>操作时间</td>
  		</tr>
  		<tr v-for="item in operations">
  			<td>{{item.source}}</td>
  			<td>{{item.times}}次</td>
  			<td>{{item.leaves}}次</td>
  			<td>{{item.beforeline}}</td>
  			<td>{{item.deadline}}</td>
  			<td>{{item.date}}</td>
  		</tr>

  	</table>
  	 
  </div>
</template>

<style lang="less" src="./index.less"></style>
<script>

export default {
	data(){
		return {
			operations: []
		}
	},

	mounted(){
		this.$http.apiGetLog().then(res=>{
			console.log(res);
			this.operations = res.data;
		})
	}
}



</script>