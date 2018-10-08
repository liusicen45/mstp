<template>
  <div class="tags">
    <el-tag class="el-tag" :type="item.path === $route.fullPath ? 'success' : ''" v-for="(item, index) in tagList" @click="toggle" closable :key="index">{{item.title}}</el-tag>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tagList: []
    }
  },
  methods: {
    // 切换路由
    toggle () {
      alert('aaaa')
    },
    // 添加便签
    tagPush (tag) {
      // 判断一下当前路由对象的路径是否在taglist中存在
      let isExist = this.tagList.some(item => {
        return item.path === tag.fullPath
      })
      if (!isExist) {
        this.tagList.push({
          path: tag.fullPath,
          title: tag.meta.title
        })
      }
    }
  },
  watch: {
    // 监控路由信息对象
    $route (newValue, oldValue) {
      this.tagPush(newValue)
    }
  }
}
</script>

<style lang="css" scoped>
  .tags {
    width: 100%;
    height: 50px;
    /* background: #fff; */
    display: flex;
    align-items: center;
  }

  .el-tag{
    margin: 0 4px;
  }

</style>
