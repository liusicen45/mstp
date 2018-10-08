<template lang="html">
  <div class="header">
    <div class="logo">
      <i class="el-icon-lx-apps" @click="collapse"></i>
      后台管理<span>系统</span>
    </div>
    <!-- 按钮标记 -->
    <div class="tools">
      <!-- 任务 -->
      <el-badge :value="tasks.length" class="item">
        <el-popover placement="bottom-start" width="240" trigger="click">
          <!-- 进度条 开始 -->
          <ul class="popover-panel">
            <li class="panel-title">
              您有{{tasks.length}}个未完成的任务
            </li>
            <li v-for="(item, index) in tasks" :key="index">
              <span>{{ item.title }}</span>
              <el-progress :text-inside="false" :stroke-width="12" :percentage="item.progress" :color="item.color"></el-progress>
            </li>
            <li class="more">
              查看全部任务
            </li>
          </ul>
          <!-- 进度条 结束 -->
          <el-button size="mini" slot="reference" icon="el-icon-lx-sort"></el-button>
        </el-popover>
      </el-badge>
      <!-- 邮件 -->
      <el-badge :value="msgs.length" class="item">
        <el-popover placement="bottom-start" trigger="click">
          <ul class="popover-panel">
            <li class="panel-title">
              您有{{msgs.length}}封未读邮件
            </li>
            <li v-for="(item, index) in msgs" :key="index" class="msg-core">
              <div>
                <img :src="item.url" alt="">
              </div>
              <div>
                <span class="msg-name">{{ item.name }}</span>
                <span class="msg-text">{{ item.msg }}</span>
              </div>
            </li>
            <li class="more">
              查看全部邮件
            </li>
          </ul>
          <el-button size="mini" slot="reference" icon="el-icon-message"></el-button>
        </el-popover>
      </el-badge>
      <!-- 消息 -->
      <el-badge :value="notice.length" class="item">
        <el-popover placement="bottom-start" trigger="click">
          <ul class="popover-panel">
            <li class="panel-title">
              您有{{ notice.length }}条未读消息
            </li>
            <li v-for="(item, index) in notice" :key="index" class="notice">
              <div class="notice-text">
                {{ item.text }}
              </div>
              <div>
                <span class="notice-time">{{ item.time }}</span>
              </div>
            </li>
            <li class="more">
              查看全部消息
            </li>
          </ul>
          <el-button size="mini" slot="reference" icon="el-icon-bell"></el-button>
        </el-popover>
      </el-badge>
    </div>
    <!-- 右侧 搜索 和 按钮 -->
    <div class="admin">
      <!-- 搜索框 -->
      <div>
        <el-input size="small" placeholder="Search" style="width: 220px;" prefix-icon="el-icon-search" v-model="search"></el-input>
      </div>
      <!-- 按钮 按钮点击以后的弹出框 -->
      <div>
        <!-- 弹出框 -->
        <el-popover placement="bottom-start" trigger="click">
          <ul class="setting">
            <li>
              <div>
                <i class="el-icon-printer"></i>
                <span>Profile</span>
              </div>
              <div>
                <i class="el-icon-setting"></i>
                <span>Settings</span>
              </div>
              <div>
                <i class="el-icon-goods"></i>
                <span>Notification</span>
              </div>
            </li>
            <!-- 按钮 -->
            <li @click="out">
              <div>
                <i class="el-icon-edit-outline"></i>
                <span>LOG OUT</span>
              </div>
            </li>
          </ul>
          <el-button slot="reference" size="small">liu sisi <i class="el-icon-caret-bottom"></i></el-button>
        </el-popover>
      </div>
    </div>
  </div>
</template>

<script>
import bus from '../common/bus'
export default {
  data () {
    return {
      search: '',
      isCollapse: false,
      tasks: [
        {
          title: '解决100个jira',
          progress: 10,
          color: '#5cb85c'
        },
        {
          title: '解决60个jira',
          progress: 20,
          color: '#f0ad4e'
        },
        {
          title: '发布现场',
          progress: 40,
          color: '#428bca'
        },
        {
          title: '与现场练调',
          progress: 90,
          color: '#d9534f'
        },
        {
          title: '解决45个bug',
          progress: 67,
          color: '#5cb85c'
        }
      ],
      msgs: [
        {
          name: 'HR-小张',
          url: require('@/assets/img/avatar-mini.jpg'),
          msg: '关于国庆放假通知'
        },
        {
          name: '测试-小张',
          url: require('@/assets/img/avatar-mini3.jpg'),
          msg: '系统测试报告'
        },
        {
          name: '美工-小张',
          url: require('@/assets/img/avatar-mini2.jpg'),
          msg: '新系统demo图已经做好'
        }
      ],
      notice: [
        {
          text: '40服务器炸了，正在紧急维护',
          time: '10钟之前'
        },
        {
          text: '数据库数据已经导入完毕',
          time: '1小时之前'
        },
        {
          text: '新用户注册',
          time: '刚刚'
        },
        {
          text: '服务06已经过载',
          time: '1钟之前'
        }
      ]
    }
  },
  methods: {
    collapse () {
      // alert(bus)
      this.isCollapse = !this.isCollapse
      bus.$emit('collapse', this.isCollapse)
    },
    out () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
  .header {
    flex: 1;
    display: flex;
    background-color: #fff;
  }

  .logo {
    height: 50px;
    line-height: 50px;
    font-size: 1.2rem;
    background: #fff;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    cursor: pointer;
    width: 200px;
  }

  .logo > i {
    margin-left: .8rem;
    margin-right: .3rem;
    font-size: 20px;
  }

  .logo > span {
    color: #ff6c60;
    margin-left: .1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .el-row {
    width: 100%;
  }

  .item {
    margin-top: 4px;
    margin-right: 20px;
  }

  .setting {
    width: 260px;
    padding: 6px;
  }

  .setting > li {
    display: flex;
    color: #999;
  }

  .setting > li:last-child {
    background-color: #a9d96c;
    color: #fff;
    border-radius: 4px;
    font-size: 13px;
    cursor: pointer;
  }

  .setting > li:last-child:hover {
    background-color: rgba(101, 177, 26, 0.83);
  }

  .setting > li > div {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding: 8px 0;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }

  .setting > li > div i {
    font-size: 20px;
    margin: 2px 0;
    cursor: pointer;
  }

  .setting > li > div i:hover {
    color: rgb(11, 162, 227);
  }

  .tools {
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: 15px;
    justify-content: space-between;;
    /* padding: 10px; */
  }

  .admin {
    align-self: center;
    display: flex;
    justify-content: flex-end;
    flex: 1;
  }

  .admin > div{
    margin-right: 10px;
  }

  .el-popover {
    padding: 0;
  }

  .popover-panel > li {
    padding: 6px 10px;
  }

  .panel-title {
    height: 30px;
    border-bottom: 1px solid #eee;
    /* background: #a9d86e; */
    color: #75b02b;
    line-height: 30px;
    font-size: 16px;
  }

  .more {
    border-top: 1px solid #eee;
    user-select: none;
    height: 30px;
    line-height: 30px;
    cursor: pointer;
  }

  .more:hover {
    background: #eee;
  }

  .msg-core:hover {
    background: #eee;
  }

  .msg-core {
    display: flex;
    cursor: pointer;
  }

  .msg-core > div:nth-of-type(1) {
    padding-right: 10px;
  }

  .msg-core > div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .msg-name {
    font-size: 15px;
    font-weight: 400;
  }

  .msg-text {
    color: #999;
    font-size: 13px;
  }

  .notice {
    display: flex;
    border-bottom: 1px solid #eee;
  }

  .notice-text {
    color: #333;
  }

  .notice-time {
    padding-left: 20px;
    font-size: 12px;
  }
</style>
