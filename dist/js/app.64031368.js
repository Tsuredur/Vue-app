(function(){var e={4188:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});var o=function(){var e=this,t=e._self._c;return t("el-row",[t("el-col",{staticStyle:{"padding-right":"10px"},attrs:{span:8}},[t("div",{staticClass:"grid-content bg-purple"},[t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"user"},[t("img",{attrs:{src:a(158),alt:""}}),t("div",{staticClass:"userinfo"},[t("p",{staticClass:"name"},[e._v("SUN HAORAN")]),t("p",{staticClass:"access"},[e._v("2022M822")])])]),t("div",{staticClass:"login-info"},[t("p",[e._v("ログイン時間："),t("span",[e._v(e._s(e.currentTime))])]),t("p",[e._v("ログインアドレス："),t("span",[e._v(e._s(e.ip))])])])]),t("el-card",{staticStyle:{"margin-top":"20px",height:"520px"}},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},e._l(e.tableLabel,(function(e,a){return t("el-table-column",{key:e,attrs:{prop:a,label:e}})})),1)],1)],1)]),t("el-col",{staticStyle:{"padding-left":"10px"},attrs:{span:16}},[t("div",{staticClass:"num"},e._l(e.countData,(function(a){return t("el-card",{key:a.name,attrs:{"body-style":{display:"flex",padding:0}}},[t("i",{staticClass:"icon",class:`el-icon-${a.icon}`,style:{background:a.color}}),t("div",{staticClass:"detail"},[t("p",{staticClass:"price"},[e._v(e._s(a.value))]),t("p",{staticClass:"desc"},[e._v(e._s(a.name))])])])})),1),t("el-card",{staticStyle:{height:"280px"}},[t("div",{ref:"echarts1",staticStyle:{height:"280px",width:"900px"}})]),t("div",{staticClass:"graph"},[t("el-card",{staticStyle:{height:"240px"}},[t("div",{ref:"echarts2",staticStyle:{height:"260px"}})]),t("el-card",{staticStyle:{height:"240px"}},[t("div",{ref:"echarts3",staticStyle:{height:"260px","margin-top":"-26px"}})])],1)],1)],1)},n=[],l=(a(7658),a(586)),s=a(347),r={data(){return{ip:"",currentTime:(new Date).toLocaleString(),tableData:[],tableLabel:{name:"商品",todayBuy:"売上(日)",monthBuy:"売上(月)",totalBuy:"売上(年)"},countData:[{name:"今日の注文数",value:73,icon:"success",color:"#2ec7c9"},{name:"今日の顧客数",value:48,icon:"menu",color:"#ffb980"},{name:"今日の売上（円）",value:55772,icon:"s-goods",color:"#5ab1ef"},{name:"今月の注文数",value:2649,icon:"success",color:"#2ec7c9"},{name:"今月の顧客数",value:1810,icon:"menu",color:"#ffb980"},{name:"今月の売上（円）",value:1600762,icon:"s-goods",color:"#5ab1ef"}]}},methods:{async getIP(){const e=await fetch("https://ipapi.co/json/"),t=await e.json();this.ip=t.country_name+" "+t.city}},mounted(){this.getIP(),(0,l.Yu)().then((e=>{let{data:t}=e;const{tableData:a}=t.data;this.tableData=a;const o=s.S1(this.$refs.echarts1);var n={};const{orderData:l,userData:r,videoData:i}=t.data;console.log(l.date);l.date;const c=Object.keys(l.data[0]);l.date;n.xAxis={data:l.date},n.yAxis={},n.legend={data:Object.keys(l.data[0])},n.series=[],c.forEach((e=>{n.series.push({name:e,data:l.data.map((t=>t[e])),type:"line"})})),o.setOption(n);const u=s.S1(this.$refs.echarts2),m={legend:{textStyle:{color:"#333"}},grid:{left:"20%"},tooltip:{trigger:"axis"},xAxis:{type:"category",data:r.map((e=>e.date)),axisLine:{lineStyle:{color:"#17b3a3"}},aXisLabel:{interval:0,colorl:"#333"}},yAxis:[{type:"value",axisLine:{lineStyle:{color:"#17b3a3"}}}],color:["#2ec7c9","#b6a2de"],series:[{name:"増加数",data:r.map((e=>e.new)),type:"bar"},{name:"顧客総数",data:r.map((e=>e.active)),type:"bar"}]};u.setOption(m);const d=s.S1(this.$refs.echarts3),p={tooltip:{trigger:"item"},color:["#0f78f4","#dd536b","#946235","#a6a6a6","#e1bb22","#39c362","#3ed1cf","#da70d6"],title:{text:"売上数(年)",left:"center",top:"center"},series:[{data:i,type:"pie",radius:["40%","70%"]}]};d.setOption(p)}))}},i=r,c=a(1001),u=(0,c.Z)(i,o,n,!1,null,"bee3b1c8",null),m=u.exports},6567:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});var o=function(){var e=this,t=e._self._c;return t("el-form",{ref:"form",staticClass:"login-container",attrs:{"label-width":"70px",inline:!0,model:e.form,rules:e.rules}},[t("h3",{staticClass:"login_title"},[e._v("LogIn")]),t("el-form-item",{staticClass:"user",attrs:{label:"ユーザID",prop:"username","label-width":"84px"}},[t("el-input",{attrs:{placeholder:""},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),t("el-form-item",{staticClass:"password",attrs:{label:"パスワード",prop:"password","label-width":"94px"}},[t("el-input",{attrs:{type:"password",placeholder:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),t("el-form-item",[t("el-button",{staticStyle:{"margin-left":"75px","margin-top":"40px"},attrs:{type:"primary"},on:{click:e.submit}},[e._v("LogIn")])],1)],1)},n=[],l=(a(7658),a(7634),a(680)),s=a(586),r={data(){return{form:{username:"",password:""},rules:{username:[{required:!0,trigger:"blur",message:"ユーザーIDを入力してください"}],password:[{required:!0,trigger:"blur",message:"パスワードを入力してください"}]}}},methods:{submit(){this.$refs.form.validate((e=>{e&&(0,s.r7)(this.form).then((e=>{let{data:t}=e;console.log(t),2e4===t.code?(l.Z.set("token",t.data.token),this.$store.commit("setMenu",t.data.menu),this.$store.commit("addMenu",this.$router),this.$router.push("/home")):this.$message.error(t.data.message)}))}))}}},i=r,c=a(1001),u=(0,c.Z)(i,o,n,!1,null,"40fb5cc0",null),m=u.exports},1486:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return M}});var o=function(){var e=this,t=e._self._c;return t("div",[t("el-container",[t("el-aside",{staticStyle:{overflow:"hidden"},attrs:{width:"auto"}},[t("common-aside")],1),t("el-container",[t("el-header",[t("common-header")],1),t("common-tag"),t("el-main",[t("router-view")],1)],1)],1)],1)},n=[],l=function(){var e=this,t=e._self._c;return t("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1-4-1",collapse:e.isCollapse,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{open:e.handleOpen,close:e.handleClose}},[t("h3",[e._v(" "+e._s(e.isCollapse?"システム":"飲食店管理システム")+" ")]),e._l(e.noChildren,(function(a){return t("el-menu-item",{key:a.name,attrs:{index:a.name},on:{click:function(t){return e.clickMenu(a)}}},[t("i",{class:`el-icon-${a.icon}`}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(a.label))])])})),e._l(e.haveChildren,(function(a){return t("el-submenu",{key:a.label,attrs:{index:a.label}},[t("template",{slot:"title"},[t("i",{class:`el-icon-${a.icon}`}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(a.label))])]),e._l(a.children,(function(a){return t("el-menu-item-group",{key:a.name},[t("el-menu-item",{attrs:{index:a.name},on:{click:function(t){return e.clickMenu(a)}}},[e._v(e._s(a.label))])],1)}))],2)}))],2)},s=[],r=(a(7658),a(680)),i={data(){return{}},methods:{handleOpen(e,t){console.log(e,t)},handleClose(e,t){console.log(e,t)},clickMenu(e){this.$route.path===e.path||"/home"===this.$route.path&&"/"===e.path||this.$router.push(e.path),this.$store.commit("selectMenu",e)}},computed:{noChildren(){return this.menuData.filter((e=>!e.children))},haveChildren(){return this.menuData.filter((e=>e.children))},menuData(){return JSON.parse(r.Z.get("menu"))||this.$store.state.tab.menu},isCollapse(){return this.$store.state.tab.isCollapse}}},c=i,u=a(1001),m=(0,u.Z)(c,l,s,!1,null,"5b99522c",null),d=m.exports,p=function(){var e=this,t=e._self._c;return t("div",{staticClass:"header-container"},[t("div",{staticClass:"l-content"},[t("el-button",{staticStyle:{"margin-right":"20px"},attrs:{icon:"el-icon-menu",size:"mini"},on:{click:e.handleMenu}}),t("el-breadcrumb",{staticClass:"myColor",attrs:{separator:"/"}},e._l(e.tags,(function(a){return t("el-breadcrumb-item",{key:a.path,attrs:{to:{path:a.path}}},[e._v(e._s(a.label))])})),1)],1),t("div",{staticClass:"r-content"},[t("el-dropdown",{on:{command:e.handleClick}},[t("span",{staticClass:"el-dropdown-link"},[t("img",{staticClass:"user",attrs:{src:a(158),alt:""}})]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",{attrs:{command:"cancel"}},[e._v("ログアウト")])],1)],1)],1)])},h=[],f=a(3822),g={data(){return{}},methods:{handleMenu(){this.$store.commit("collapseMenu")},handleClick(e){"cancel"===e&&(console.log("登出"),r.Z.remove("token"),r.Z.remove("menu"),this.$router.push("/login"))}},computed:{...(0,f.rn)({tags:e=>e.tab.tabList})}},b=g,v=(0,u.Z)(b,p,h,!1,null,"5cc7d414",null),y=v.exports,k=function(){var e=this,t=e._self._c;return t("div",{staticClass:"tabs"},e._l(e.tags,(function(a,o){return t("el-tag",{key:a.path,attrs:{effect:e.$route.name===a.name?"dark":"plain",closable:"home"!==a.name,size:"small"},on:{click:function(t){return e.changeMenu(a)},close:function(t){return e.handleClose(a,o)}}},[e._v(" "+e._s(a.label)+" ")])})),1)},w=[],_={name:"CommonTag",data(){return{}},computed:{...(0,f.rn)({tags:e=>e.tab.tabList})},methods:{...(0,f.OI)(["closeTag"]),changeMenu(e){this.$router.push({name:e.name})},handleClose(e,t){this.closeTag(e);const a=this.tags.length;e.name===this.$route.name&&(t===a?this.$router.push({name:this.tags[t-1].name}):this.$router.push({name:this.tags[t].name}))}}},x=_,S=(0,u.Z)(x,k,w,!1,null,"15d7360e",null),C=S.exports,I={data(){return{}},components:{CommonAside:d,CommonHeader:y,CommonTag:C}},D=I,$=(0,u.Z)(D,o,n,!1,null,"b3e79fe0",null),M=$.exports},9082:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var o=function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("商品追加")]),t("el-form",{ref:"newItemForm",attrs:{model:e.newItem,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"商品名",prop:"name"}},[t("el-input",{attrs:{required:""},model:{value:e.newItem.name,callback:function(t){e.$set(e.newItem,"name",t)},expression:"newItem.name"}})],1),t("el-form-item",{attrs:{label:"価格",prop:"price"}},[t("el-input",{attrs:{type:"number",required:""},model:{value:e.newItem.price,callback:function(t){e.$set(e.newItem,"price",e._n(t))},expression:"newItem.price"}})],1),t("el-form-item",{attrs:{label:"在庫数",prop:"Stock"}},[t("el-input",{attrs:{type:"number",required:""},model:{value:e.newItem.Stock,callback:function(t){e.$set(e.newItem,"Stock",e._n(t))},expression:"newItem.Stock"}})],1),t("el-form-item",{attrs:{label:"分類",prop:"category"}},[t("el-select",{attrs:{placeholder:"Select",required:""},model:{value:e.newItem.category,callback:function(t){e.$set(e.newItem,"category",t)},expression:"newItem.category"}},[t("el-option",{attrs:{label:"麺類",value:"麺類"}}),t("el-option",{attrs:{label:"ご飯",value:"ご飯"}}),t("el-option",{attrs:{label:"おつまみ",value:"おつまみ"}})],1)],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.addItem}},[e._v("追加")])],1)],1),t("div",[t("h2",[e._v("メニュー")]),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.goodsMenu}},[t("el-table-column",{attrs:{label:"商品名",prop:"name"}}),t("el-table-column",{attrs:{label:"価格",prop:"price"}}),t("el-table-column",{attrs:{label:"カテゴリ",prop:"category"}}),t("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.showEditDialog(a.$index)}}},[e._v("編集")]),t("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){return e.showDeleteConfirm(a.$index)}}},[e._v("削除")])]}}])})],1)],1),t("el-dialog",{attrs:{title:"編集",visible:e.editDialogVisible},on:{"update:visible":function(t){e.editDialogVisible=t}}},[t("el-form",{ref:"editItemForm",attrs:{model:e.editItem,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"商品名",prop:"name"}},[t("el-input",{attrs:{required:""},model:{value:e.editItem.name,callback:function(t){e.$set(e.editItem,"name",t)},expression:"editItem.name"}})],1),t("el-form-item",{attrs:{label:"価格",prop:"price"}},[t("el-input",{attrs:{type:"number",required:""},model:{value:e.editItem.price,callback:function(t){e.$set(e.editItem,"price",e._n(t))},expression:"editItem.price"}})],1),t("el-form-item",{attrs:{label:"カテゴリ",prop:"category"}},[t("el-select",{attrs:{placeholder:"Select",required:""},model:{value:e.editItem.category,callback:function(t){e.$set(e.editItem,"category",t)},expression:"editItem.category"}},[t("el-option",{attrs:{label:"麺類",value:"麺類"}}),t("el-option",{attrs:{label:"ご飯",value:"ご飯"}}),t("el-option",{attrs:{label:"おつまみ",value:"おつまみ"}})],1)],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.saveEditItem}},[e._v("保存")])],1)],1)],1),t("el-dialog",{attrs:{title:"削除",visible:e.deleteDialogVisible},on:{"update:visible":function(t){e.deleteDialogVisible=t}}},[t("p",[e._v("削除しますか？")]),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.deleteDialogVisible=!1}}},[e._v("キャンセル")]),t("el-button",{attrs:{type:"primary"},on:{click:e.deleteItem}},[e._v("削除")])],1)])],1)},n=[],l=a(3822),s={computed:{...(0,l.rn)({goodsMenu:e=>e.tab.goodsMenu})},data(){return{newItem:{name:"",price:"",category:"麺類"},editDialogVisible:!1,deleteDialogVisible:!1,editItemIndex:null,editItem:{name:"",price:"",category:""}}},methods:{addItem(){this.$refs.newItemForm.validate((e=>{e&&(this.$store.commit("updateGoodsMenu",[...this.goodsMenu,{name:this.newItem.name,price:this.newItem.price,category:this.newItem.category,stock:this.newItem.Stock}]),this.$store.commit("updateGoodsMenu",[...this.goodsMenu,newItem]),this.resetForm())}))},showDeleteConfirm(e){this.editItemIndex=null,this.deleteItemIndex=e,this.deleteDialogVisible=!0},showEditDialog(e){this.deleteDialogVisible=!1,this.editItemIndex=e,this.editItem={...this.goodsMenu[e]},this.editDialogVisible=!0},saveEditItem(){this.$refs.editItemForm.validate((e=>{if(e){const e=[...this.goodsMenu];e.splice(this.editItemIndex,1,{name:this.editItem.name,price:this.editItem.price,category:this.editItem.category,stock:this.editItem.stock}),this.$store.commit("updateGoodsMenu",e),this.editDialogVisible=!1}}))},deleteItem(){if(null!==this.deleteItemIndex){const e=[...this.goodsMenu];e.splice(this.deleteItemIndex,1),this.$store.commit("updateGoodsMenu",e),this.deleteDialogVisible=!1}},resetForm(){this.$refs.newItemForm.resetFields()}}},r=s,i=a(1001),c=(0,i.Z)(r,o,n,!1,null,"382dd364",null),u=c.exports},3956:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var o=function(){var e=this,t=e._self._c;return t("div",[t("h2",[e._v("在庫管理")]),e.goodsMenu?t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.goodsMenu}},[t("el-table-column",{attrs:{label:"商品名",prop:"name"}}),t("el-table-column",{attrs:{label:"価格",prop:"price"}}),t("el-table-column",{attrs:{label:"在庫数"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{icon:"el-icon-minus",type:"danger",size:"mini"},on:{click:function(t){return e.decreaseStock(a.row,10)}}},[e._v("10")]),t("el-button",{attrs:{icon:"el-icon-minus",type:"danger",size:"mini"},on:{click:function(t){return e.decreaseStock(a.row,1)}}},[e._v("1")]),e._v(" "+e._s(a.row.stock)+" "),t("el-button",{attrs:{icon:"el-icon-plus",type:"success",size:"mini"},on:{click:function(t){return e.increaseStock(a.row,1)}}},[e._v("1")]),t("el-button",{attrs:{icon:"el-icon-plus",type:"success",size:"mini"},on:{click:function(t){return e.increaseStock(a.row,10)}}},[e._v("10")])]}}],null,!1,3024003389)})],1):e._e(),e.showAddStockDialog?t("el-dialog",{attrs:{title:"在庫不足",visible:e.showAddStockDialog,width:"30%",center:""},on:{"update:visible":function(t){e.showAddStockDialog=t}}},[t("p",[e._v("商品の在庫が不足しています。在庫を追加してください。")])]):e._e(),t("el-button",{staticStyle:{position:"fixed",top:"207px",right:"95px"},attrs:{icon:"el-icon-document",type:"info"},on:{click:e.showStockHistory}}),e.showStockHistoryDialog?t("el-dialog",{attrs:{title:"在庫履歴",visible:e.showStockHistoryDialog,width:"80%",center:""},on:{"update:visible":function(t){e.showStockHistoryDialog=t}}},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.stockHistory}},[t("el-table-column",{attrs:{label:"商品名",prop:"name"}}),t("el-table-column",{attrs:{label:"変更内容"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.change)+" ")]}}],null,!1,490390843)}),t("el-table-column",{attrs:{label:"数量変更",prop:"amountChange"}}),t("el-table-column",{attrs:{label:"日時",prop:"timestamp"}})],1)],1):e._e()],1)},n=[],l=a(3822),s={data(){return{showAddStockDialog:!1,showStockHistoryDialog:!1,stockHistory:[]}},computed:{...(0,l.rn)({goodsMenu:e=>e.tab.goodsMenu})},methods:{checkStockAndShowDialog(e){e.stock<3&&(this.showAddStockDialog=!0)},decreaseStock(e,t){e.stock>=t&&(e.stock-=t,this.recordStockChange(e,-t),this.checkStockAndShowDialog(e)),this.$store.commit("updateGoodsMenu",[...this.goodsMenu])},increaseStock(e,t){e.stock+=t,this.recordStockChange(e,t),this.$store.commit("updateGoodsMenu",[...this.goodsMenu])},showStockHistory(){this.showStockHistoryDialog=!0},recordStockChange(e,t){const a={name:e.name,change:""+(t>0?"増加":"減少"),amountChange:t,timestamp:(new Date).toLocaleString()};this.stockHistory.unshift(a)}}},r=s,i=a(1001),c=(0,i.Z)(r,o,n,!1,null,null,null),u=c.exports},9083:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return c}});var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"system-info"},[e._m(0),t("div",{staticClass:"right-content"},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.infoData,border:""}},[t("el-table-column",{attrs:{label:"操作説明"}},[t("el-table-column",{attrs:{prop:"key2",label:"項目"}}),t("el-table-column",{attrs:{prop:"value2",label:"詳細"}})],1)],1)],1)])},n=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"left-content"},[t("iframe",{staticClass:"frame",staticStyle:{border:"none","max-width":"100%","max-height":"100vh"},attrs:{width:"1000px",height:"1100px",src:"https://forms.office.com/r/FMu60ZCaGW?embed=true",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",webkitallowfullscreen:"",mozallowfullscreen:"",msallowfullscreen:""}})])}],l={data(){return{infoData:[{key2:"ホーム",value2:"ホームページでは、Echartsを用いた売上管理ができている。図表の線や凡例などをクリックすると図表の変化が行われる"},{key2:"メニュー管理",value2:"メニュー管理ページでは、料理を追加、編集、削除できる。新しい商品の追加や商品の編集・削除などの操作があった場合、在庫管理ページに変化もある"},{key2:"スタッフ管理",value2:"スタッフ管理ページでは、スタッフの個人データの編集や削除、スタッフの検索ができる"},{key2:"在庫管理",value2:"在庫管理ページでは、すべての商品の在庫情報を確認し、在庫を増減させることができる。メニュー管理でデータを変更すると、在庫管理の在庫も同期される。なお、在庫数が３以下の場合、在庫不足の通知ダイアログが出てくる。右上のボタンは、在庫商品の変化を記録している"},{key2:"左上のボタン",value2:"サイドバーの開閉の操作"},{key2:"パンくずリスト",value2:"画面の遷移が記録され、クリックすると指定のページに遷移できる。後ろの✗を押せばページが閉じられる。下のパンくずリストと上のナビゲーションバーが連動している"},{key2:"プロフィール画像",value2:"ログアウト"}]}}},s=l,r=a(1001),i=(0,r.Z)(s,o,n,!1,null,"2f3555f4",null),c=i.exports},9762:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"manage"},[t("el-dialog",{attrs:{title:"スタッフ管理",visible:e.dialogVisible,"before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("el-form",{ref:"form",attrs:{rules:e.rules,model:e.form,"label-width":"80px",width:"50%",inline:!0}},[t("el-form-item",{attrs:{label:"名前",prop:"name"}},[t("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"年齢",prop:"age"}},[t("el-input",{model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}})],1),t("el-form-item",{attrs:{label:"性別",prop:"sex"}},[t("el-select",{attrs:{placeholder:"選択肢"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[t("el-option",{attrs:{label:"男",value:1}}),t("el-option",{attrs:{label:"女",value:0}})],1)],1),t("el-form-item",{attrs:{label:"生年月日",prop:"birth"}},[t("div",{staticClass:"block"},[t("span",{staticClass:"demonstration"}),t("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-DD"},model:{value:e.form.birth,callback:function(t){e.$set(e.form,"birth",t)},expression:"form.birth"}})],1)]),t("el-form-item",{attrs:{label:"住所",prop:"addr"}},[t("el-input",{model:{value:e.form.addr,callback:function(t){e.$set(e.form,"addr",t)},expression:"form.addr"}})],1),t("el-form-item",{attrs:{label:"賃金",prop:"salary"}},[t("el-input",{model:{value:e.form.salary,callback:function(t){e.$set(e.form,"salary",t)},expression:"form.salary"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:e.cancel}},[e._v("キャンセル")]),t("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("確認")])],1)],1),t("div",{staticClass:"manage-header"},[t("el-button",{attrs:{type:"primary"},on:{click:e.handleAdd}},[e._v(" + 追加 ")]),t("el-form",{attrs:{inline:!0,model:e.userForm}},[t("el-form-item",[t("el-input",{attrs:{placeholder:"キーワードを入力してください"},model:{value:e.userForm.name,callback:function(t){e.$set(e.userForm,"name",t)},expression:"userForm.name"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("検索")])],1)],1)],1),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,height:"90%"}},[t("el-table-column",{attrs:{prop:"name",label:"名前"}}),t("el-table-column",{attrs:{prop:"sex",label:"性別"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(" "+e._s(1==a.row.sex?"男":"女"))])]}}])}),t("el-table-column",{attrs:{prop:"age",label:"年齢"}}),t("el-table-column",{attrs:{prop:"birth",label:"生年月日"}}),t("el-table-column",{attrs:{prop:"addr",label:"住所"}}),t("el-table-column",{attrs:{prop:"salary",label:"賃金"}}),t("el-table-column",{attrs:{prop:"button",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.handleEdit(a.row)}}},[e._v("編集")]),t("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.handleDelete(a.row)}}},[e._v("削除")])]}}])})],1),t("div",{staticClass:"pageChange"},[t("el-pagination",{attrs:{layout:"prev, pager, next",total:e.total},on:{"current-change":e.handlePage}})],1)],1)},n=[],l=a(586),s={data(){return{dialogVisible:!1,form:{name:"",age:"",sex:"",birth:"",addr:"",salary:""},rules:{name:[{required:!0,message:"名前を入力してください"}],age:[{required:!0,message:"年齢を入力してください"}],sex:[{required:!0,message:"性別を選択してください"}],birth:[{required:!0,message:"生年月日を選択してください"}],addr:[{required:!0,message:"住所を入力してください"}],salary:[{required:!0,message:"賃金を入力してください"}]},tableData:[],modelType:0,total:0,pageData:{page:1,limit:10},userForm:{name:""}}},methods:{submit(){this.$refs.form.validate((e=>{e&&(0===this.modelType?(0,l.cn)(this.form).then((()=>{this.getList()})):(0,l.uz)(this.form).then((()=>{this.getList()})),this.$refs.form.resetFields(),this.dialogVisible=!1)}))},handleClose(){this.$refs.form.resetFields(),this.dialogVisible=!1},cancel(){this.handleClose()},handleEdit(e){this.modelType=1,this.dialogVisible=!0,this.form=JSON.parse(JSON.stringify(e))},handleDelete(e){this.$confirm("データを削除しますか","提示",{confirmButtonText:"YES",cancelButtonText:"NO",type:"warning"}).then((()=>{(0,l.ti)({id:e.id}).then((()=>{this.$message({type:"success",message:"データを削除しました"}),this.getList()}))})).catch((()=>{this.$message({type:"info",message:"キャンセルしました"})}))},handleAdd(){this.modelType=0,this.dialogVisible=!0},getList(){(0,l.PR)({params:{...this.userForm,...this.pageData}}).then((e=>{let{data:t}=e;console.log(t),this.tableData=t.list,this.total=t.count||0}))},handlePage(e){this.pageData.page=e,this.getList()},onSubmit(){this.getList()}},mounted(){this.getList()}},r=s,i=a(1001),c=(0,i.Z)(r,o,n,!1,null,"fb515a7a",null),u=c.exports},586:function(e,t,a){"use strict";a.d(t,{cn:function(){return i},ti:function(){return u},uz:function(){return c},Yu:function(){return s},r7:function(){return m},PR:function(){return r}});var o=a(4161);const n=o.Z.create({baseURL:"/api",timeout:1e4});n.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),n.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}));var l=n;const s=()=>l.get("/home/getData"),r=e=>l.get("/user/getUser",e),i=e=>l.post("/user/add",e),c=e=>l.post("/user/edit",e),u=e=>l.post("/user/del",e),m=e=>l.post("/permission/getMenu",e)},144:function(e,t,a){"use strict";var o=a(7754),n=a.n(o),l=a(6369),s=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},r=[],i={name:"App"},c=i,u=a(1001),m=(0,u.Z)(c,s,r,!1,null,null,null),d=m.exports,p=a(2631),h=a(4188),f=a(9762),g=a(1486),b=a(9082),v=a(3956),y=a(9083),k=a(6567);l["default"].use(p.ZP);const w=[{path:"/",component:g["default"],name:"Main",redirect:"/home",children:[{path:"home",name:"home",component:h["default"]},{path:"user",name:"user",component:f["default"]},{path:"mall",name:"mall",component:b["default"]},{path:"page1",name:"page1",component:v["default"]},{path:"page2",name:"page2",component:y["default"]}]},{path:"/login",name:"login",component:k["default"]}],_=new p.ZP({routes:w});var x=_,S=a(3822),C=(a(7658),a(680)),I={state:{isCollapse:!1,threshold:5,tabList:[{path:"/",name:"home",label:"ホーム",icon:"s-home",url:"Home/Home"}],menu:[],goodsMenu:[{name:"ラーメン　塩",price:700,category:"麺類",stock:12},{name:"ラーメン　醤油",price:700,category:"麺類",stock:5},{name:"ラーメン　豚骨",price:900,category:"麺類",stock:9},{name:"チャーハン",price:600,category:"ご飯",stock:20},{name:"天津飯",price:780,category:"ご飯",stock:20},{name:"カレーライス",price:630,category:"ご飯",stock:20},{name:"唐揚げ",price:400,category:"おつまみ",stock:60},{name:"冷麺",price:550,category:"麺類",stock:25}]},mutations:{updateThreshold(e,t){e.threshold=t},updateGoodsMenu(e,t){e.goodsMenu=t},collapseMenu(e){e.isCollapse=!e.isCollapse},selectMenu(e,t){if("home"!==t.name){const a=e.tabList.findIndex((e=>e.name===t.name));-1===a&&e.tabList.push(t)}},closeTag(e,t){const a=e.tabList.findIndex((e=>e.name===t.name));e.tabList.splice(a,1)},setMenu(e,t){e.menu=t,C.Z.set("menu",JSON.stringify(t))},addMenu(e,t){if(!C.Z.get("menu"))return;const o=JSON.parse(C.Z.get("menu"));e.menu=o;const n=[];o.forEach((e=>{e.children?(e.children=e.children.map((e=>(e.component=()=>a(6968)(`./${e.url}`),e))),n.push(...e.children)):(e.component=()=>a(6968)(`./${e.url}`),n.push(e))})),n.forEach((e=>{t.addRoute("Main",e)}))}}};l["default"].use(S.ZP);var D=new S.ZP.Store({modules:{tab:I}}),$=a(7634),M=a.n($);let O=[];var R={getStatisticalData:()=>{for(let i=0;i<9;i++){let e=M().Random.float(100,8e3,0,0),t=M().Random.float(100,8e3,0,0),a=M().Random.float(100,8e3,0,0),o=M().Random.float(100,8e3,0,0),n=M().Random.float(100,8e3,0,0),l=M().Random.float(100,8e3,0,0),s=M().Random.float(100,8e3,0,0),r=M().Random.float(100,8e3,0,0);O.push(M().mock({"ラーメン_塩":e,"ラーメン_醤油":t,"ラーメン_豚骨":a,"天津飯":o,"チャーハン":n,"カレーライス":l,"冷麺":s,"唐揚げ":r}))}let e=M().Random.float(1245,5600,0,0),t=M().Random.float(2e3,4981,0,0),a=M().Random.float(1e3,6210,0,0),o=M().Random.float(1e3,3051,0,0),n=M().Random.float(546,4051,0,0),l=M().Random.float(702,4810,0,0),s=M().Random.float(300,3120,0,0),r=M().Random.float(600,1204,0,0);return{code:2e4,data:{videoData:[{name:"ラーメン_塩",value:e},{name:"ラーメン_醤油",value:t},{name:"ラーメン_豚骨",value:a},{name:"天津飯",value:o},{name:"チャーハン",value:n},{name:"カレーライス",value:l},{name:"冷麺",value:s},{name:"唐揚げ",value:r}],userData:[{date:"月曜日",new:0,active:32},{date:"火曜日",new:13,active:45},{date:"水曜日",new:22,active:67},{date:"木曜日",new:-13,active:54},{date:"金曜日",new:20,active:74},{date:"土曜日",new:60,active:134},{date:"日曜日",new:-33,active:101}],orderData:{date:["2023_05","2023_06","2023_07","2023_08","2023_09","2023_10","2023_11"],data:O},tableData:[{name:"ラーメン_塩",todayBuy:15,monthBuy:182,totalBuy:2417},{name:"ラーメン_醤油",todayBuy:17,monthBuy:309,totalBuy:3172},{name:"ラーメン_豚骨",todayBuy:24,monthBuy:671,totalBuy:6712},{name:"天津飯",todayBuy:3,monthBuy:71,totalBuy:728},{name:"チャーハン",todayBuy:11,monthBuy:279,totalBuy:2812},{name:"カレーライス",todayBuy:13,monthBuy:157,totalBuy:2192},{name:"冷麺",todayBuy:5,monthBuy:125,totalBuy:1192},{name:"唐揚げ",todayBuy:13,monthBuy:123,totalBuy:1392}]}}}};function B(e){const t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}let L=[];const Z=200;for(let F=0;F<Z;F++)L.push(M().mock({id:M().Random.guid(),name:M().Random.cname(),addr:M().mock("@county(true)"),"age|18-60":1,birth:M().Random.date(),sex:M().Random.integer(0,1),salary:M().Random.integer(18e4,4e5)}));var P={getUserList:e=>{const{name:t,page:a=1,limit:o=20}=B(e.url);console.log("name:"+t,"page:"+a,"分页大小limit:"+o);const n=L.filter((e=>!t||-1!==e.name.indexOf(t)||-1!==e.addr.indexOf(t))),l=n.filter(((e,t)=>t<o*a&&t>=o*(a-1)));return{code:2e4,count:n.length,list:l}},createUser:e=>{const{name:t,addr:a,age:o,birth:n,sex:l,salary:s}=JSON.parse(e.body);return console.log(JSON.parse(e.body)),L.unshift({id:M().Random.guid(),name:t,addr:a,age:o,birth:n,sex:l,salary:s}),{code:2e4,data:{message:"添加成功"}}},deleteUser:e=>{const{id:t}=JSON.parse(e.body);return t?(L=L.filter((e=>e.id!==t)),{code:2e4,message:"删除成功"}):{code:-999,message:"参数不正确"}},batchremove:e=>{let{ids:t}=B(e.url);return t=t.split(","),L=L.filter((e=>!t.includes(e.id))),{code:2e4,data:{message:"批量删除成功"}}},updateUser:e=>{const{id:t,name:a,addr:o,age:n,birth:l,sex:s,salary:r}=JSON.parse(e.body),i=parseInt(s);return L.some((e=>{if(e.id===t)return e.name=a,e.addr=o,e.age=n,e.birth=l,e.sex=i,e.salary=r,!0})),{code:2e4,data:{message:"编辑成功"}}}},T={getMenu:e=>{const{username:t,password:a}=JSON.parse(e.body);return"admin"===t&&"admin"===a?{code:2e4,data:{menu:[{path:"/home",name:"home",label:"ホーム",icon:"s-home",url:"Home.vue"},{path:"/mall",name:"mall",label:"メニュー管理",icon:"menu",url:"Mall.vue"},{path:"/user",name:"user",label:"スタッフ管理",icon:"user",url:"User.vue"},{label:"その他",icon:"location",children:[{path:"/page1",name:"page1",label:"在庫管理",icon:"takeaway-box",url:"PageOne.vue"},{path:"/page2",name:"page2",label:"説明",icon:"notebook-1",url:"PageTwo.vue"}]}],token:M().Random.guid(),message:"成功しました"}}:"xiaoxiao"===t&&"xiaoxiao"===a?{code:2e4,data:{menu:[{path:"/home",name:"home",label:"ホーム",icon:"s-home",url:"Home.vue"},{path:"/video",name:"video",label:"メニュー管理",icon:"menu",url:"Mall.vue"}],token:M().Random.guid(),message:"成功しました"}}:{code:-999,data:{message:"パスワードが間違っている"}}}};M().mock("/api/home/getData",R.getStatisticalData),M().mock("/api/user/add","post",P.createUser),M().mock("/api/user/edit","post",P.updateUser),M().mock("/api/user/del","post",P.deleteUser),M().mock(/api\/user\/getUser/,P.getUserList),M().mock(/api\/permission\/getMenu/,"post",T.getMenu),l["default"].use(n()),l["default"].config.productionTip=!1,x.beforeEach(((e,t,a)=>{const o=C.Z.get("token");o||"login"===e.name?o&&"login"===e.name?a({name:"home"}):a():a({name:"login"})})),new l["default"]({router:x,store:D,render:e=>e(d),created(){D.commit("addMenu",x)}}).$mount("#app")},6968:function(e,t,a){var o={"./Home":4188,"./Home.vue":4188,"./Login":6567,"./Login.vue":6567,"./Main":1486,"./Main.vue":1486,"./Mall":9082,"./Mall.vue":9082,"./PageOne":3956,"./PageOne.vue":3956,"./PageTwo":9083,"./PageTwo.vue":9083,"./User":9762,"./User.vue":9762};function n(e){return Promise.resolve().then((function(){if(!a.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}var n=o[e];return a(n)}))}n.keys=function(){return Object.keys(o)},n.id=6968,e.exports=n},158:function(e,t,a){"use strict";e.exports=a.p+"img/profile.2e27d9b8.jpg"}},t={};function a(o){var n=t[o];if(void 0!==n)return n.exports;var l=t[o]={exports:{}};return e[o].call(l.exports,l,l.exports,a),l.exports}a.m=e,function(){var e=[];a.O=function(t,o,n,l){if(!o){var s=1/0;for(u=0;u<e.length;u++){o=e[u][0],n=e[u][1],l=e[u][2];for(var r=!0,i=0;i<o.length;i++)(!1&l||s>=l)&&Object.keys(a.O).every((function(e){return a.O[e](o[i])}))?o.splice(i--,1):(r=!1,l<s&&(s=l));if(r){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[o,n,l]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.e=function(){return Promise.resolve()}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,l,s=o[0],r=o[1],i=o[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(n in r)a.o(r,n)&&(a.m[n]=r[n]);if(i)var u=i(a)}for(t&&t(o);c<s.length;c++)l=s[c],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(u)},o=self["webpackChunkmy_app"]=self["webpackChunkmy_app"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(144)}));o=a.O(o)})();
//# sourceMappingURL=app.64031368.js.map