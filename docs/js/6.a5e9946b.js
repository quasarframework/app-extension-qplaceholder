(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{2514:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("section",{staticClass:"page-header"},[a("div",{staticClass:"text-h1 project-name"},[e._v("QPlaceHolder")]),a("div",{staticClass:"text-h2 project-tagline"}),a("div",{staticClass:"byline"},[e._v("Created and maintained by Jeff Galbraith")]),a("div",{staticClass:"quasar"},[e._v("A Quasar Framework App Extension")]),a("q-btn",{staticClass:"btn",attrs:{type:"a",href:"https://github.com/quasarframework/app-extension-qplaceholder",target:"_blank",label:"View on GitHub","no-caps":"",flat:""}}),a("q-btn",{staticClass:"btn",attrs:{to:"/docs",label:"Docs","no-caps":"",flat:""}}),a("q-btn",{staticClass:"btn",attrs:{to:"/examples",label:"Examples","no-caps":"",flat:""}}),a("q-btn",{staticClass:"btn",attrs:{type:"a",href:"https://donate.quasar.dev",target:"_blank",label:"Donate","no-caps":"",flat:""}})],1),a("main",{staticClass:"flex flex-start justify-center inset-shadow"},[a("div",{staticClass:"q-pa-md col-12-sm col-8-md col-6-lg inset-shadow",staticStyle:{width:"100%",height:"3px"}}),a("div",{staticClass:"q-pa-md col-12-sm col-8-md col-6-lg bg-white shadow-1",staticStyle:{"max-width":"800px",width:"100%"}},[e._t("default")],2)])])},n=[],r={name:"Hero"},l=r,s=a("2877"),i=Object(s["a"])(l,o,n,!1,null,null,null);t["a"]=i.exports},"8b24":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("hero",[a("q-markdown",{attrs:{src:e.markdown,toc:""},on:{data:e.onToc}})],1)},n=[],r=a("2514"),l='QPlaceholder\n===\n\nQPlaceholder is a [Quasar App Extension](https://quasar.dev/app-extensions/introduction). It allows you to display a placeholder before your data arrives from your server.\n\n![QPlaceholder](statics/qplaceholder.png "QPlaceholder" =800x800)\n\nThis work is currently in `beta` and there are expected changes while things get worked out. Your help with testing is greatly appreciated. Suggestions and PRs welcomed.\n\n# Install\nTo add this App Extension to your Quasar application, run the following (in your Quasar app folder):\n```\nquasar ext add @quasar/qplaceholder\n```\n\n# Uninstall\nTo remove this App Extension from your Quasar application, run the following (in your Quasar app folder):\n```\nquasar ext remove @quasar/qplaceholder\n```\n\n# Describe\n(TBD) You can use `quasar describe QPlaceholder`\n\n# Docs\nCan be found [here](https://quasarframework.github.io/app-extension-qplaceholder).\n\n# Examples\nCan be found [here](https://quasarframework.github.io/app-extension-qplaceholder/examples).\n\n# Demo (source) Project\nCan be found [here](https://github.com/quasarframework/app-extension-qplaceholder/tree/master/demo).\n\n# QPlaceholder API\n\n## QPlaceholder Properties\n| Vue Property | Type | Description |\n| --- | --- | --- |\n| value | Boolean | v-model: use to show/hide the component |\n| animated | Boolean | make the component animated (performance hit) |\n| image-size | Number | how big to make the image placeholder (in px).<br>Default: 80 |\n| avatar | Boolean | make the image placeholder round |\n| title | Boolean | display a title placeholder |\n| title-width | Number | the width of the title placeholder as a percentage.<br>Default: 50 |\n| title-height | Number | the height of the title placeholder (in px).<br>Default 16 |\n| rows | Number | the number of placeholder rows to be displayed.<br>Default: 4 |\n| row-height | Number | the height of a row placeholder (in px).<br>Default: 12 |\n| random | Boolean | normally the width of a placeholder row is 100%. Using `random` causes each row to be different lengths |\n| color | String | The color of the placeholder foreground. Any color from the [Quasar Color Pallete](https://quasar.dev/style/color-palette) or any CSS color.<br>Default: #eee |\n| background-color | String | The color of the placeholder background. Any color from the [Quasar Color Pallete](https://quasar.dev/style/color-palette) or any CSS color.<br>Default: #eee |\n| shimmer-color | String | The color of the placeholder shimmer when `animated` is used. Any color from the [Quasar Color Pallete](https://quasar.dev/style/color-palette) or any CSS color.<br>Default: #eee |\n\n\n# Donate\nIf you appreciate the work that went into this App Extension, please consider [donating to Quasar](https://donate.quasar.dev).\n\n---\nThis page created with [QMarkdown](https://quasarframework.github.io/app-extension-qmarkdown), another great Quasar App Extension.',s={name:"PageIndex",components:{Hero:r["a"]},data:function(){return{markdown:l}},computed:{toc:{get:function(){return this.$store.state.common.toc},set:function(e){this.$store.commit("common/toc",e)}}},methods:{onToc:function(e){this.toc=e}}},i=s,c=a("2877"),h=Object(c["a"])(i,o,n,!1,null,null,null);t["default"]=h.exports}}]);