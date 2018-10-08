<template lang="html">
  <div class="navmenu">
    <el-menu class="menu-vertical" :default-active="$route.path" @open="handleOpen" @close="handleClose" background-color="#2a3542" text-color="#fff" :collapse="isCollapse" router active-text-color="#ffd04b">
      <el-menu-item index="/homepage">
        <el-icon name="lx-home" />
        <span slot="title">系统主页</span>
      </el-menu-item>
      <el-submenu index="/home/info">
        <template slot="title">
          <i class="el-icon-lx-text"></i>
          <span>基础报表</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="/home/info">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="/icon">
        <el-icon name="lx-emoji" />
        <span slot="title">自定义icon</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import bus from '../common/bus'
export default {
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    handleOpen () {},
    handleClose () {}
  },
  created () {
    bus.$on('collapse', result => {
      this.isCollapse = result
    })
  }
}
</script>

<style lang="css" scoped>
  .menu-vertical:not(.el-menu--collapse) {
    width: 200px;
  }

  .navmenu > ul {
    height: 100%;
  }

  .navmenu {
    height: 100%;
  }
</style>
