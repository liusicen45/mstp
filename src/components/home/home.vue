<template lang="html">
  <el-container>
    <el-header height="50px">
      <Header />
    </el-header>
    <el-container>
      <el-aside width="none" type="flex">
        <Navmenu />
      </el-aside>
      <el-main>
        <div class="taglist">
          <Tags />
        </div>
        <div class="content">
          <router-view />
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from './header'
import Navmenu from './navmenu'
import Tags from './tags'
export default {
  components: {
    Header,
    Navmenu,
    Tags
  },
  // data () { },
  methods: {
    tohome () {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="css" scoped>
  .el-aside {
    display: flex;
    flex-direction: column;
  }

  .el-header {
    padding: 0;
    display: flex;
  }

  .el-main {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .taglist {
    height: 50px;
    background: red;
    background: #fff;
    border-radius: 5px;
  }

  .content {
    overflow: auto;
    margin-top: 10px;
    /* background: #fff; */
    flex: 1;
    /* padding: 10px; */
    border-radius: 5px;
  }
</style>
