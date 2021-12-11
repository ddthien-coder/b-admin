(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57799873"],{4020:function(e,t,a){"use strict";a("d3b7");var l=a("bc3a"),o=a.n(l),i=a("323e"),r=a.n(i),n=(a("a5d8"),a("5c96")),s=o.a.create({baseURL:"https://www.dev-demo.website/admin/",timeout:5e3}),c=o.a.CancelToken;s.interceptors.request.use((function(e){var t=window.localStorage.getItem("user")||"{}",a=JSON.parse(t);if("{}"!==t&&"ROLE_admin"!==a.role&&"get"!==e.method)return e.cancelToken=new c((function(e){e("Demo mode, operation is not allowed")})),e;r.a.start();var l=window.localStorage.getItem("token");return l&&(e.headers.Authorization=l),e}),(function(e){return console.info(e),Promise.reject(e)})),s.interceptors.response.use((function(e){r.a.done();var t=e.data;if(200!==t.code){var a=t.msg||"Error";return n["Message"].error(a),Promise.reject(new Error(a))}return t}),(function(e){return console.info(e),n["Message"].error(e.message),Promise.reject(e)})),t["a"]=s},6486:function(e,t,a){"use strict";a("6f80")},"6f80":function(e,t,a){},"8b78":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:6}},[a("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-plus"},on:{click:function(t){e.addDialogVisible=!0}}},[e._v("Add")])],1)],1),a("el-table",{attrs:{data:e.tagList}},[a("el-table-column",{attrs:{label:"Name",prop:"name"}}),a("el-table-column",{attrs:{label:"color"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{float:"left",width:"100px"}},[e._v(e._s(t.row.color))]),a("span",{class:"me-"+t.row.color,staticStyle:{float:"left",width:"100px",height:"23px"}})]}}])}),a("el-table-column",{attrs:{label:"Operation"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(a){return e.showEditDialog(t.row)}}},[e._v("Edit")]),a("el-popconfirm",{attrs:{"confirm-button-text":"Yes","cancel-button-text":"No",title:"Are you sure delete this tag?",icon:"el-icon-delete",iconColor:"red"},on:{onConfirm:function(a){return e.deleteTagById(t.row.id)}}},[a("el-button",{attrs:{slot:"reference",size:"mini",type:"danger",icon:"el-icon-delete"},slot:"reference"},[e._v("Delete")])],1)]}}])})],1),a("el-pagination",{attrs:{"current-page":e.queryInfo.pageNum,"page-sizes":[10,20,30,50],"page-size":e.queryInfo.pageSize,total:e.total,layout:"total, sizes, prev, pager, next, jumper",background:""},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),a("el-dialog",{attrs:{title:"add",width:"50%",visible:e.addDialogVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.addDialogVisible=t},close:e.addDialogClosed}},[a("el-form",{ref:"addFormRef",attrs:{model:e.addForm,rules:e.formRules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"Name",prop:"name"}},[a("el-input",{model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name",t)},expression:"addForm.name"}})],1),a("el-form-item",{attrs:{label:"Color"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"please choose a color",clearable:!0},model:{value:e.addForm.color,callback:function(t){e.$set(e.addForm,"color",t)},expression:"addForm.color"}},e._l(e.colors,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}},[a("span",{staticStyle:{float:"left",width:"100px"}},[e._v(e._s(t.label))]),a("span",{class:"me-"+t.value,staticStyle:{float:"left",width:"100px",height:"inherit"}}),a("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.value))])])})),1)],1)],1),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.addDialogVisible=!1}}},[e._v("Cancel")]),a("el-button",{attrs:{type:"primary"},on:{click:e.addTag}},[e._v("Save")])],1)],1),a("el-dialog",{attrs:{title:"Edit",width:"50%",visible:e.editDialogVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.editDialogVisible=t},close:e.editDialogClosed}},[a("el-form",{ref:"editFormRef",attrs:{model:e.editForm,rules:e.formRules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"Name",prop:"name"}},[a("el-input",{model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name",t)},expression:"editForm.name"}})],1),a("el-form-item",{attrs:{label:"Color",prop:"color"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"please choose a color",clearable:!0},model:{value:e.editForm.color,callback:function(t){e.$set(e.editForm,"color",t)},expression:"editForm.color"}},e._l(e.colors,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}},[a("span",{staticStyle:{float:"left",width:"100px"}},[e._v(e._s(t.label))]),a("span",{class:"me-"+t.value,staticStyle:{float:"left",width:"100px",height:"inherit"}}),a("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.value))])])})),1)],1)],1),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.editDialogVisible=!1}}},[e._v("Cancel")]),a("el-button",{attrs:{type:"primary"},on:{click:e.editTag}},[e._v("Save")])],1)],1)],1)},o=[],i=a("5530"),r=a("6350"),n=a("4020");function s(e){return Object(n["a"])({url:"tags",method:"GET",params:Object(i["a"])({},e)})}function c(e){return Object(n["a"])({url:"tag",method:"POST",data:Object(i["a"])({},e)})}function d(e){return Object(n["a"])({url:"tag",method:"PUT",data:Object(i["a"])({},e)})}function u(e){return Object(n["a"])({url:"tag",method:"DELETE",params:{id:e}})}var m={name:"TagList",components:{Breadcrumb:r["a"]},data:function(){return{queryInfo:{pageNum:1,pageSize:10},tagList:[],total:0,addDialogVisible:!1,editDialogVisible:!1,addForm:{name:"",color:""},editForm:{},formRules:{name:[{required:!0,message:"Please enter a label name",trigger:"blur"}]},colors:[{label:"Red",value:"red"},{label:"Orange",value:"orange"},{label:"Yellow",value:"yellow"},{label:"Olive",value:"olive"},{label:"Green",value:"green"},{label:"Teal",value:"teal"},{label:"Blue",value:"blue"},{label:"Violet",value:"violet"},{label:"Purple",value:"purple"},{label:"Pink",value:"pink"},{label:"Brown",value:"brown"},{label:"Grey",value:"grey"},{label:"Black",value:"black"}]}},created:function(){this.getData()},methods:{getData:function(){var e=this;s(this.queryInfo).then((function(t){e.tagList=t.data.list,e.total=t.data.total}))},handleSizeChange:function(e){this.queryInfo.pageSize=e,this.getData()},handleCurrentChange:function(e){this.queryInfo.pageNum=e,this.getData()},addDialogClosed:function(){this.addForm.color="",this.$refs.addFormRef.resetFields()},editDialogClosed:function(){this.editForm={},this.$refs.editFormRef.resetFields()},addTag:function(){var e=this;this.$refs.addFormRef.validate((function(t){t&&c(e.addForm).then((function(t){e.msgSuccess(t.msg),e.addDialogVisible=!1,e.getData()}))}))},editTag:function(){var e=this;this.$refs.editFormRef.validate((function(t){t&&d(e.editForm).then((function(t){e.msgSuccess(t.msg),e.editDialogVisible=!1,e.getData()}))}))},showEditDialog:function(e){this.editForm=Object(i["a"])({},e),this.editDialogVisible=!0},deleteTagById:function(e){var t=this;u(e).then((function(e){t.msgSuccess(e.msg),t.getData()}))}}},f=m,p=(a("6486"),a("2877")),g=Object(p["a"])(f,l,o,!1,null,"15daf958",null);t["default"]=g.exports}}]);