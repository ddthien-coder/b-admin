(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d24df8e4"],{"3da0":function(e,t,a){"use strict";a("b2fd")},4020:function(e,t,a){"use strict";a("d3b7");var n=a("bc3a"),o=a.n(n),i=a("323e"),r=a.n(i),s=(a("a5d8"),a("5c96")),l=o.a.create({baseURL:"https://www.dev-demo.website/admin/",timeout:5e3}),c=o.a.CancelToken;l.interceptors.request.use((function(e){var t=window.localStorage.getItem("user")||"{}",a=JSON.parse(t);if("{}"!==t&&"ROLE_admin"!==a.role&&"get"!==e.method)return e.cancelToken=new c((function(e){e("Demo mode, operation is not allowed")})),e;r.a.start();var n=window.localStorage.getItem("token");return n&&(e.headers.Authorization=n),e}),(function(e){return console.info(e),Promise.reject(e)})),l.interceptors.response.use((function(e){r.a.done();var t=e.data;if(200!==t.code){var a=t.msg||"Error";return s["Message"].error(a),Promise.reject(new Error(a))}return t}),(function(e){return console.info(e),s["Message"].error(e.message),Promise.reject(e)})),t["a"]=l},b2fd:function(e,t,a){},b604:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{attrs:{inline:""}},[a("el-form-item",{attrs:{label:"Time"}},[a("DateTimeRangePicker",{attrs:{date:e.queryInfo.date,setDate:e.setDate}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-search"},on:{click:e.search}},[e._v("Search")])],1)],1),a("el-table",{attrs:{data:e.logList}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"table-expand",attrs:{"label-position":"left"}},[a("el-form-item",{attrs:{label:"Request"}},[a("span",[e._v(e._s(t.row.uri))])]),a("el-form-item",{attrs:{label:"Parameter"}},[a("span",[e._v(e._s(t.row.param))])])],1)]}}])}),a("el-table-column",{attrs:{label:"Method",prop:"method",width:"80"}}),a("el-table-column",{attrs:{label:"Description",prop:"description"}}),a("el-table-column",{attrs:{label:"ip",prop:"ip"}}),a("el-table-column",{attrs:{label:"IP",prop:"ipSource","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"OS",prop:"os"}}),a("el-table-column",{attrs:{label:"Browser",prop:"browser","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"Time",width:"170"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("dateFormat")(t.row.createTime)))]}}])}),a("el-table-column",{attrs:{label:"Operation",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"warning",icon:"el-icon-view",size:"mini"},on:{click:function(a){return e.showDetail(t.row.error)}}},[e._v("Detail")]),a("el-popconfirm",{attrs:{"confirm-button-text":"Yes","cancel-button-text":"No",title:"Are you sure delete?",icon:"el-icon-delete",iconColor:"red"},on:{onConfirm:function(a){return e.deleteLogById(t.row.id)}}},[a("el-button",{attrs:{slot:"reference",size:"mini",type:"danger",icon:"el-icon-delete"},slot:"reference"},[e._v("Delete")])],1)]}}])})],1),a("el-pagination",{attrs:{"current-page":e.queryInfo.pageNum,"page-sizes":[10,20,30,50],"page-size":e.queryInfo.pageSize,total:e.total,layout:"total, sizes, prev, pager, next, jumper",background:""},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),a("el-dialog",{attrs:{title:"Exception","append-to-body":"",top:"20px",width:"80%",visible:e.detailDialogVisible,"destroy-on-close":""},on:{"update:visible":function(t){e.detailDialogVisible=t}}},[a("div",{staticClass:"match-braces rainbow-braces"},[a("pre",[e._v("\t\t\t\t\t"),a("code",{staticClass:"language-java"},[e._v(e._s(e.detail))]),e._v("\n\t\t\t\t")])]),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.detailDialogVisible=!1}}},[e._v("Close")])],1)])],1)},o=[],i=a("5530"),r=a("6350"),s=a("4020");function l(e){return Object(s["a"])({url:"exceptionLogs",method:"GET",params:Object(i["a"])({},e)})}function c(e){return Object(s["a"])({url:"exceptionLog",method:"DELETE",params:{id:e}})}var u=a("eb7a"),d={name:"ExceptionLog",components:{DateTimeRangePicker:u["a"],Breadcrumb:r["a"]},data:function(){return{queryInfo:{date:[],pageNum:1,pageSize:10},logList:[],total:0,detailDialogVisible:!1,detail:""}},created:function(){this.getData()},methods:{getData:function(){var e=this,t=Object(i["a"])({},this.queryInfo);t.date&&2===t.date.length&&(t.date=t.date[0]+","+t.date[1]),l(t).then((function(t){e.logList=t.data.list,e.total=t.data.total}))},handleSizeChange:function(e){this.queryInfo.pageSize=e,this.getData()},handleCurrentChange:function(e){this.queryInfo.pageNum=e,this.getData()},deleteLogById:function(e){var t=this;c(e).then((function(e){t.msgSuccess(e.msg),t.getData()}))},showDetail:function(e){this.detail="\n"+e,this.detailDialogVisible=!0,this.$nextTick((function(){Prism.highlightAll()}))},search:function(){this.queryInfo.pageNum=1,this.queryInfo.pageSize=10,this.getData()},setDate:function(e){this.queryInfo.date=e}}},p=d,m=(a("3da0"),a("2877")),f=Object(m["a"])(p,n,o,!1,null,"5e88a3a3",null);t["default"]=f.exports},eb7a:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-date-picker",{attrs:{type:"datetimerange",align:"center",size:"small","unlink-panels":"","picker-options":e.pickerOptions,"value-format":"yyyy-MM-dd HH:mm:ss","default-time":["00:00:00","23:59:59"],"start-placeholder":"Start date","end-placeholder":"End Date","range-separator":"-"},on:{change:function(t){return e.setDate(e.thisDate)}},model:{value:e.thisDate,callback:function(t){e.thisDate=t},expression:"thisDate"}})},o=[],i={name:"DateTimeRangePicker",props:{date:{required:!0},setDate:{type:Function,required:!0}},data:function(){return{thisDate:this.date,pickerOptions:{shortcuts:[{text:"Today",onClick:function(e){var t=new Date,a=new Date;t.setHours(0),t.setMinutes(0),t.setSeconds(0),a.setHours(23),a.setMinutes(59),a.setSeconds(59),e.$emit("pick",[t,a])}},{text:"Yesterday",onClick:function(e){var t=new Date,a=new Date,n=new Date;a.setTime(t.getTime()-864e5),n.setTime(t.getTime()-864e5),a.setHours(0),a.setMinutes(0),a.setSeconds(0),n.setHours(23),n.setMinutes(59),n.setSeconds(59),e.$emit("pick",[a,n])}},{text:"The last three days",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e5),e.$emit("pick",[a,t])}},{text:"Last week",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"Last month",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}}]}}}},r=i,s=a("2877"),l=Object(s["a"])(r,n,o,!1,null,"1398d8c3",null);t["a"]=l.exports}}]);