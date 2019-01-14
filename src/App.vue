<template>
  <div id="app">
    <Layout class="layout">
      <!-- 头部 -->
      <r-header>
      </r-header>
      <!-- 内容 -->
      <Layout >
        <Content class="layout-content">
          <Row>
            <Col span="11" push="4">
              <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
              </keep-alive>
              <router-view v-if="!$route.meta.keepAlive"></router-view>
            </Col>
            <Col span="8" push="5">
              <r-sider></r-sider>
            </Col>
          </Row>
        </Content>
      </Layout>
      <!-- 底部 -->
      <r-footer class="layout-footer-center"></r-footer>
    </Layout>
</div>

</template>

<script>
import RHeader from './components/R_Header'
import RFooter from './components/R_Footer'
import RSider from './components/R_Sider'

export default {
  name: 'app',
  components: {
    RHeader,
    RFooter,
    RSider
  }
}
</script>

<style lang="less">
@import './common/css/reset.less';

.layout{
  min-height: 100%;
  border: 0px solid #d7dde4;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-content {
  height: 100%;
  margin-top: 20px;
  padding: 24px 0;
  background-color:#fff;
}
.layout-footer-center{
  height: 50px;
  text-align: center;
}
</style>