<template>
  <div id="app">
	<div v-if="$store.state.Loginflag==true">
		<Header></Header>
		<div style="margin-top: 90px;position: absolute;margin-left: 160px;">
			<router-view></router-view>
		</div>
	</div>
	<div v-else="$store.state.Loginflag==false" class="logindemo">
		<router-view></router-view>
	</div>
  </div>
</template>


<script>
import Header from './components/main/Header.vue'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
.logindemo{
	font-family: Avenir, Helvetica, Arial, sans-serif;
	 -webkit-font-smoothing: antialiased;
	 -moz-osx-font-smoothing: grayscale;
	 text-align: center;
	 color: #2c3e50;
	 margin-top: 0px;
	 margin: 0;
	 padding: 0;
	 text-decoration: none;
	 overflow-x: hidden;
}
</style>
