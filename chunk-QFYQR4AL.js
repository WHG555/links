import{a as H,b as ee}from"./chunk-UOHSMF5H.js";import"./chunk-7RN3ZLKX.js";import{d as X}from"./chunk-4VLQ76FQ.js";import"./chunk-43AY3RAK.js";import{a as E}from"./chunk-BOFNRZFS.js";import{d as te,f as ie,h as ne,i as oe,j as re,k as ae,l as le}from"./chunk-LJWEARSS.js";import"./chunk-RZXXLCF4.js";import{l as Y,m as Z}from"./chunk-V2Q6YCVH.js";import"./chunk-MQQRW7YS.js";import{F as T}from"./chunk-5KE5SWYJ.js";import{a as V,b as j,c as R}from"./chunk-YE5FYMBO.js";import"./chunk-BAWF3ACX.js";import{a as J,b as q}from"./chunk-P3HDNIYO.js";import{b as U}from"./chunk-DCI43WWU.js";import{$ as S,Hb as G,Jb as K,Mb as Q,Wb as I}from"./chunk-Q6DNEGIO.js";import{Ca as x,Cb as M,Cd as B,Da as h,Gc as k,Ib as _,Nd as L,Ob as c,Pd as F,Wd as W,ac as n,bc as o,cc as N,ce as A,ee as C,gc as y,he as s,jc as v,lc as f,nb as w,nd as P,od as $,qb as i,vb as z,wd as O,xc as r,yc as l,zc as g}from"./chunk-VWK6NSP4.js";function me(a,t){if(a&1){let e=y();n(0,"button",11),v("click",function(){x(e);let d=f(2);return h(d.handleSubmit())}),r(1),o()}if(a&2){let e=f(2);c("nzLoading",e.submitting),i(),g(" ",e.$t("_save")," ")}}function ce(a,t){a&1&&(n(0,"div",12),r(1," \u5904\u7406\u5B8C\u6210\u6240\u6709\u6570\u636E\u540E\u9700\u8981\u70B9\u51FB\u4E00\u6B21\u4FDD\u5B58\u65B9\u53EF\u751F\u6548 "),o())}function se(a,t){if(a&1&&N(0,"tag-list",20),a&2){let e=f().$implicit;c("data",e.tags)}}function de(a,t){if(a&1){let e=y();n(0,"tr")(1,"td")(2,"div")(3,"a",13),v("click",function(){let d=x(e),u=d.$implicit,b=d.index,p=f(2);return h(p.handleClick(u,b))}),r(4),o()(),n(5,"div",14)(6,"a",15),v("nzOnConfirm",function(){let d=x(e).index,u=f(2);return h(u.handleDelete(d))}),r(7),o()()(),n(8,"td"),r(9),o(),n(10,"td"),r(11),o(),n(12,"td"),N(13,"app-logo",16),o(),n(14,"td")(15,"a",17),r(16),o()(),n(17,"td"),_(18,se,1,1,"tag-list",18),o(),n(19,"td")(20,"pre",19),r(21),o()(),n(22,"td",9),r(23),o(),n(24,"td"),r(25),o()()}if(a&2){let e=t.$implicit,m=f(2);i(4),l(m.$t("_handle")),i(2),c("nzPopconfirmTitle",m.$t("_confirmDel")),i(),g(" ",m.$t("_del")," "),i(2),l(m.typeMap[e.extra.type]),i(2),l(e.id),i(2),c("src",e.icon)("name",e.name),i(2),c("href",e.url,w),i(),l(e.name),i(2),c("ngIf",e.tags),i(3),l(e.desc),i(2),g(" ",e.breadcrumb," "),i(2),l(e.createdAt)}}function pe(a,t){if(a&1){let e=y();n(0,"div"),_(1,me,2,2,"button",3),n(2,"button",4),v("click",function(){x(e);let d=f();return h(d.getUserCollect())}),r(3),o(),_(4,ce,2,0,"div",5),n(5,"nz-table",6,0)(7,"thead")(8,"tr")(9,"th",7),r(10),o(),n(11,"th",7),r(12),o(),n(13,"th",7),r(14,"ID"),o(),n(15,"th",7),r(16),o(),n(17,"th",8),r(18),o(),n(19,"th",8),r(20),o(),n(21,"th",9),r(22),o(),n(23,"th",9),r(24),o(),n(25,"th"),r(26),o()()(),n(27,"tbody"),_(28,de,26,13,"tr",10),o()()()}if(a&2){let e=f();i(),c("ngIf",!e.isSelfDevelop),i(),c("nzLoading",e.submitting),i(),g(" ",e.$t("_refresh")," "),i(),c("ngIf",!e.isSelfDevelop),i(),c("nzData",e.dataList)("nzShowPagination",!1),i(5),l(e.$t("_action")),i(2),l(e.$t("_type")),i(4),l(e.$t("_icon")),i(2),l(e.$t("_webName")),i(2),l(e.$t("_associatedLabels")),i(2),l(e.$t("_webDesc")),i(2),l(e.$t("_webTag")),i(2),l(e.$t("_createAt")),i(2),c("ngForOf",e.dataList)("ngForTrackBy",e.trackByItem)}}var D=class a{constructor(t,e,m){this.message=t;this.modal=e;this.notification=m}$t=s;isSelfDevelop=W;submitting=!1;isPermission=!!L();dataList=[];authCode="";tagMap=A;typeMap={1:s("_add"),2:s("_edit"),3:s("_del")};ngOnInit(){this.getUserCollect()}handleDelete(t){this.submitting=!0,Q({data:[this.dataList[t]]}).then(e=>{this.dataList=e.data?.data||[]}).finally(()=>{this.submitting=!1})}getUserCollect(){this.submitting=!0,K().then(t=>{this.isPermission=!0,this.dataList=t.data?.data||[]}).finally(()=>{this.submitting=!1})}handleSubmitAuthCode(){this.submitting||!this.authCode||(F(this.authCode),this.getUserCollect())}handleCreate(t,e){let m=this,d=0,u=0,b=0;try{d=C.findIndex(p=>p.title===t.breadcrumb[0]),u=C[d].nav.findIndex(p=>p.title===t.breadcrumb[1]),b=C[d].nav[u].nav.findIndex(p=>p.title===t.breadcrumb[2])}catch(p){this.notification.error(s("_error"),`${s("_classNoMatch")}\uFF1A${p.message}`)}try{S.emit("CREATE_WEB",{detail:t,oneIndex:d,twoIndex:u,threeIndex:b,isMove:!0}),S.emit("SET_CREATE_WEB",{detail:null,callback(){m.handleDelete(e)}})}catch(p){this.notification.error(s("_error"),p.message)}}handleDeleteWeb(t,e){this.modal.info({nzTitle:s("_confirmDel"),nzOnOk:()=>{X(t.id)&&this.message.success(s("_delSuccess")),this.handleDelete(e)}})}handleUpdateWeb(t){S.emit("CREATE_WEB",{detail:t})}handleClick(t,e){t.extra.type===1?this.handleCreate(t,e):t.extra.type===3?this.handleDeleteWeb(t,e):t.extra.type===2&&this.handleUpdateWeb(t)}handleSubmit(){this.submitting||this.modal.info({nzTitle:s("_syncDataOut"),nzOkText:s("_confirmSync"),nzContent:s("_confirmSyncTip"),nzOnOk:()=>{this.submitting=!0,G({message:"update db",content:JSON.stringify(C),path:B}).then(()=>{this.message.success(s("_syncSuccessTip"))}).finally(()=>{this.submitting=!1})}})}trackByItem(t,e){return e.id}static \u0275fac=function(e){return new(e||a)(z(I),z(T),z(E))};static \u0275cmp=M({type:a,selectors:[["user-collect"]],features:[k([I,T,E])],decls:2,vars:2,consts:[["basicTable",""],["nzTip","Loading...",3,"nzSpinning"],[4,"ngIf"],["nz-button","","nzType","primary",3,"nzLoading","click",4,"ngIf"],["nz-button","",3,"click","nzLoading"],["class","mb-2.5 mt-2.5 color-red font-bold",4,"ngIf"],[3,"nzData","nzShowPagination"],["nzWidth","80px"],["nzWidth","100px"],["nzWidth","300px"],[4,"ngFor","ngForOf","ngForTrackBy"],["nz-button","","nzType","primary",3,"click","nzLoading"],[1,"mb-2.5","mt-2.5","color-red","font-bold"],[3,"click"],[1,"mt-2.5"],["nz-popconfirm","","nzPopconfirmPlacement","rightTop","nzOkType","danger","nzPopconfirmPlacement","bottom",1,"color-red",3,"nzOnConfirm","nzPopconfirmTitle"],[3,"src","name"],["target","_blank",3,"href"],[3,"data",4,"ngIf"],[1,"desc"],[3,"data"]],template:function(e,m){e&1&&(n(0,"nz-spin",1),_(1,pe,29,16,"div",2),o()),e&2&&(c("nzSpinning",m.submitting),i(),c("ngIf",m.isPermission))},dependencies:[O,P,$,q,J,R,j,V,U,le,oe,te,ie,ae,ne,re,Z,Y,H,ee],styles:[".add-btn[_ngcontent-%COMP%]{margin-bottom:20px;margin-right:20px}.desc[_ngcontent-%COMP%]{width:300px;white-space:pre-wrap}.ant-table-wrapper[_ngcontent-%COMP%]{overflow:auto}"]})};export{D as default};
