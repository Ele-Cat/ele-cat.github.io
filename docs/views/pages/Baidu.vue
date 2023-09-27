<template>
  <div class="padding baidu">
    <div class="top-box flex justify-between align-center">
      <div class="left">
        <img
          src="https://www.baidu.com/img/flexible/logo/pc/result.png"
          alt=""
        />
      </div>
      <div class="center">
        <a-input-search
          v-model:value="searchValue"
          placeholder="检索一下"
          enter-button="百度一下"
          @search="onSearch"
          class="search-input"
        />
        <div class="flex justify-around margin-top-xs">
          <a href="javascript:;" class="active">网页</a>
          <a href="javascript:;">视频</a>
          <a href="javascript:;">图片</a>
          <a href="javascript:;">资讯</a>
          <a href="javascript:;">采购</a>
          <a href="javascript:;">地图</a>
          <a href="javascript:;">知道</a>
          <a href="javascript:;">贴吧</a>
          <a href="javascript:;">文库</a>
          <a href="javascript:;">更多</a>
        </div>
      </div>
      <div class="right">
        <a href="https://www.cnblogs.com/e-cat/" target="_blank">博客园</a>
        <a href="https://ele-cat.gitee.io/" target="_blank">个人站点</a>
        <a href="javascript:;" target="_blank">关于我</a>
      </div>
    </div>
    <div class="main-box">
      <p>百度为您找到相关结果约100,000,000个</p>
      <div class="main-item">
        <p class="title"><span class="highlight">李佳茂</span>_百度百科</p>
        <div class="flex">
          <div>
            <img
              src="https://himg.bdimg.com/sys/portrait/item/public.1.8bead50d.XdutG2bUCkKHKLRM9nUIvg.jpg"
              alt=""
              srcset=""
            />
          </div>
          <div class="userinfo">
            <p>姓名：李佳茂</p>
            <p>生日：1992.10</p>
            <p>简介：李佳茂，毕业于天津城市建设大学，计算机专业。</p>
            <p>
              <a href="javascript:;">热爱学习</a>-<a href="javascript:;"
                >结果导向</a
              >-<a href="javascript:;">专注</a>-<a href="javascript:;">创造</a>
            </p>
            <p>
              博客：<a href="https://www.cnblogs.com/e-cat/" target="_blank"
                >https://www.cnblogs.com/e-cat/</a
              >
            </p>
            <p>
              Gitee：<a href="https://gitee.com/ele-cat/" target="_blank"
                >https://gitee.com/ele-cat/</a
              >
            </p>
          </div>
        </div>
      </div>

      <div class="main-item">
        <p class="title"><span class="highlight">李佳茂</span>_专业技能</p>
        <div class="list">
          <ul>
            <li v-for="item in skills" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>

      <div class="main-item">
        <p class="title"><span class="highlight">李佳茂</span>_工作经历</p>
        <div class="experience">
          <div v-for="item in experience" :key="item">
            <div class="flex margin-top">
              <div style="width: 200px">{{ item.dateSpan }}</div>
              <div style="flex: 1">{{ item.company }}</div>
              <div>{{ item.position }}</div>
            </div>
            <div>
              <ul>
                <li v-for="sItem in item.desc" :key="sItem">{{ sItem }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="main-item">
        <p class="title"><span class="highlight">李佳茂</span>_项目经验</p>
        <div class="project margin-top" v-for="item in projects" :key="item">
          <p>
            <span>项目名称：</span><span class="bold">{{ item.name }} <a :href="item.link" v-if="item.link" class="margin-left">项目地址</a></span>
          </p>
          <p>
            <span>项目周期：</span><span>{{ item.dateSpan }}</span>
          </p>
          <p>
            <span>项目描述：</span><span class="bold">{{ item.desc }}</span>
          </p>
          <p v-if="item.tech">
            <span>技术栈：</span><span class="bold">{{ item.tech }}</span>
          </p>
          <p v-if="item.duty">
            <span>技术要点：</span>
            <span>
              <ol>
                <li v-for="sItem in item.duty" :key="sItem">{{ sItem }}</li>
              </ol>
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const searchValue = ref("李佳茂 前端开发工程师");
    const skills = ref([
      "熟悉网站设计规范，能够独立完成企业站、专题站、论坛、ERP以及商城的pc端及移动端页面制作，精通HTML5+CSS3，熟练解决主流浏览器的兼容性问题。",
      "熟练使用 Less 和 Sass 等 css 预处理器，优化代码，提高开发效率。",
      "熟练使用Vue以及相关Vue全家桶制作SPA，熟悉Vue3技术栈。",
      "熟练使用Ant-design-vue、ElementUI、VantUI等UI框架，可快速搭建、实现复杂业务的模块及功能。",
      "熟练使用微信小程序，时常关注小程序生态及更新。",
      "熟练使用Uniapp制作兼容性高的WebApp（兼容多平台）。",
      "熟练使用Node.js（Egg.js）搭建服务API，了解PHP（THINKPHP5）、Mysql、MongoDB。",
    ]);
    const experience = ref([
      {
        dateSpan: "2015.10-2017.07",
        company: "天津市龙和正文网络科技有限公司",
        position: "前端开发工程师（兼后端）",
        desc: [
          "主要负责对接美工和服务器，制作前端静态页面及jq特效，参与网站构架、设计。",
          "运用 html5、div+css、Javascript、jquery，制作 html 页面，js 脚本的处理。",
          "负责 PC 端和移动端的开发工作。",
        ],
      },
      {
        dateSpan: "2017.07-2018.11",
        company: "天津市海鑫融智科技有限公司",
        position: "前端开发工程师（教研组）",
        desc: ["主要负责公司网站、APP、小程序项目的开发、维护。"],
      },
      {
        dateSpan: "2018.11-2020.08",
        company: "北京好奇猫科技有限公司",
        position: "前端开发工程师（社交组）",
        desc: ["主要负责公司Saas平台网站维护、参与小程序制作与优化。"],
      },
      {
        dateSpan: "2020.08-至今",
        company: "上海楫智牧业有限公司",
        position: "前端开发工程师（）",
        desc: ["主要负责公司saas平台网站维护、参与APP制作与优化。"],
      },
    ]);

    const projects = ref([
      {
        name: "卖家云平台",
        link: "http://www.maijiayun.cn/",
        dateSpan: "2016.10-2016.11",
        desc: "该项目为供应商管理、仓储物流、全渠道管理与服务平台（企业展示PC站）。",
        tech: "H5、CSS3、JS、Bootstrap、JQuery。",
        duty: [
          "使用 animate.css 实现动效。",
          "负责项目的整体风格控制。",
          "百分百还原设计原图，当时项目设计图是客户提供的，每一个元素和动画都是经过多次商榷、修改呈现出来的。",
        ],
      },
      {
        name: "名大厨",
        link: "http://cooker.mdachu.com/",
        dateSpan: "2017.10-2017.11",
        desc: "该项目为B2B厨师上门服务平台（微商城）。",
        tech: "VUE全家桶、Less、Ajax、Iconfont。",
        duty: [
          "该项目采用前后端分离开发模式与后台接口对接，进行数据交互，进行页面渲染和实现功能模块的判断。",
          "使用第三方VUE的UI框架 VUX 搭建页面，坑比较多，基本都踩过了。",
          "项目包含商城、购物车系统，采用微信支付方式付款，前后端接口调试配合较多。",
        ],
      },
      {
        name: "南开融智教育云app",
        link: "http://www.mooc-cloud.com",
        dateSpan: "2017.10-2018.11",
        desc: "该项目为一款为南开大学在校生使用的在线教育平台（app）。",
        tech: "UniApp、Vue.Js、Zepto.js、ajax、Iconfont。",
        duty: [
          "使用 UniApp 作为开发框架搭建，模块化开发。",
          "App页面较多，在二开中不断抽离组件。",
          "为加快app运行速度，使用本地LocalStorage储存一部分信息。",
          "异步ajax调用后台接口数据，用户交互体验良好。",
        ],
      },
      {
        name: "公司saas平台网站",
        link: "https://www.itimebox.com/cloud_backstage/index.html",
        dateSpan: "2018.11-2020.06",
        desc: "该项目为一款基于vue的saas平台网站。",
        tech: "Vue.Js、axios、elementUI、Echart、normalize.css。",
        duty: [
          "通过productType来区分项目，通过启动命令控制测试、正式环境，一套代码产出多个项目",
          "使用Vue页面懒加载，加快首页渲染速度。",
        ],
      },
      {
        name: "“好组织”项目",
        dateSpan: "2018.11-2020.06",
        desc: "该项目为一款社交微信小程序，目标用户：长江商学院等组织，北大、复旦等高校。",
        duty: [
          "多人协同开发，统一规范。"
        ],
      },
    ]);

    return {
      searchValue,
      skills,
      experience,
      projects,
    };
  },
};
</script>

<style lang="scss">
$link-color: #2440b3;
.baidu {
  a {
    color: $link-color;
    &:hover,
    &.active {
      color: #315efb;
    }
  }
  .highlight {
    color: #f73131;
  }
  .bold {
    font-weight: bold;
  }
  .top-box {
    .left {
      width: 100px;
      img {
        position: relative;
        top: -6px;
      }
    }
    .center {
      width: 700px;
      margin: 20px 0 0 20px;
    }
    .right {
      flex: 1;
      text-align: right;
      a {
        margin-left: 15px;
      }
    }
  }
  .main-box {
    padding: 6px 0 0 120px;
    width: 820px;
    .main-item {
      margin: 10px 0;
      .title {
        font-size: 18px;
        color: $link-color;
        text-decoration: underline;
        text-underline-offset: 2px;
      }
      .userinfo {
        margin-left: 10px;
      }
      .project {
        ~.project {
          padding-top: 10px;
          border-top: 1px dashed #eee;
        }
      }
    }
  }
}
</style>