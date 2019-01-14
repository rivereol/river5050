<template>
	<Menu mode="horizontal" theme="light" active-name="1">
    <div class="logo">
      白僵君logo
    </div>
    <div class="layout-nav">
      <MenuItem name="1">
        <router-link :to="{name:'index'}">
          <Icon type="ios-navigate"></Icon>
            &nbsp;首页
        </router-link>
      </MenuItem>
      <MenuItem name="2">
        <router-link :to="{name:'comment'}">
          <Icon type="ios-keypad"></Icon>
            &nbsp;留言
        </router-link>
      </MenuItem>
      <MenuItem name="3">
        <router-link :to="{name:'tag'}">
          <Icon type="ios-analytics"></Icon>
            &nbsp;标签
        </router-link>
      </MenuItem>
      <MenuItem name="4">
        <router-link :to="{name:'tag'}">
          <Icon type="ios-paper"></Icon>
            &nbsp;记录
        </router-link>
      </MenuItem>
    </div>
  </Menu>
</template>

<script>
export default {
	name: 'r_header'
}
</script>

<style scoped>
a {
  color: #515a6e;
}
.logo {
  margin-left: 20px;
  font-size: 18px;
  font-weight: bold;
  color: #39c5bb;
  float: left;
  background-color: #39c5bb;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>