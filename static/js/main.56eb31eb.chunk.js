(this.webpackJsonptoso=this.webpackJsonptoso||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"title":"\u9003\u8d70\u4e2d\u3068\u306e\u51fa\u4f1a\u3044","description":"5\u6b73\u306e\u9803\u306b\u653e\u9001\u3055\u308c\u305f\u30b8\u30e3\u30f3\u30d7\uff01\u3007\u3007\u4e2d\u3092\u898b\u3066\u91d8\u4ed8\u3051\uff01\u4ee5\u964d\u3069\u3093\u306a\u7528\u4e8b\u304c\u3042\u308d\u3046\u3068\u6b20\u304b\u3055\u305a\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u8996\u8074","imagePath":"./images/IMG_3608.png"},{"title":"\u652f\u3048","description":"\u5e7c\u5c11\u671f\u304b\u3089\u306e\u96e3\u75c5\u3067\u4f55\u3082\u3067\u304d\u306a\u304b\u3063\u305f\u4eba\u751f\u3092\u652f\u3048\u3066\u304f\u308c\u305f\u306e\u304c\u9003\u8d70\u4e2d\u306e\u5b58\u5728\u3067\u3059\u3002\u56de\u5fa9\u3057\u305f\u4eca\u9003\u8d70\u6210\u529f\u3092\u679c\u305f\u3057\u3066\u4e00\u3064\u306e\u6210\u529f\u4f53\u9a13\u3092\u63b4\u307f\u305f\u3044\uff01","imagePath":"./images/IMG_3609.png"},{"title":"3000\u6642\u9593\u30d7\u30ec\u30a4","description":"\u300e\u9003\u8d70\u4e2d \u53f2\u4e0a\u6700\u5f37\u306e\u30cf\u30f3\u30bf\u30fc\u305f\u3061\u304b\u3089\u306b\u3052\u304d\u308c\u300f\u306f\u767a\u58f2\u304b\u3089\u904a\u3073\u7d9a\u3051\u3001\u305d\u306e\u30d7\u30ec\u30a4\u6642\u9593\u306f12\u5e74\u9593\u30673000\u6642\u9593\u3092\u7a81\u7834\uff01\uff01","imagePath":"./images/IMG_3733.jpg"}]')},19:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){},27:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var s=a(3),n=a.n(s),i=a(9),c=a.n(i),l=(a(19),a(20),a(21),a(10)),r=(a(22),a(5)),m=a.n(r),o=a(2);var d=e=>Object(o.jsx)("section",{className:"contents",children:Object(o.jsxs)("div",{className:"inner",children:[Object(o.jsx)(m.a,{classNameNotInView:"hidden",classNameInView:"animate__animated animate__fadeInLeft slower",children:Object(o.jsx)("img",{src:e.imagePath,alt:e.title,className:"img"})}),Object(o.jsxs)("div",{className:"description",children:[Object(o.jsx)(m.a,{classNameNotInView:"hidden",classNameInView:"animate__animated animate__fadeInRight slower",children:Object(o.jsx)("h1",{className:"title",children:e.title})}),Object(o.jsx)(m.a,{classNameNotInView:"hidden",classNameInView:"animate__animated animate__fadeInRight slower",children:Object(o.jsx)("p",{className:"text",children:e.description})})]})]})}),j=a(34);a(27);var h=()=>{const[e,t]=Object(s.useState)({name:"",email:"",message:""}),a=a=>{t({...e,[a.target.name]:a.target.value})};return Object(o.jsxs)("div",{className:"formContainer",children:[Object(o.jsx)("h1",{className:"title",children:"\u304a\u554f\u3044\u5408\u308f\u305b\u30d5\u30a9\u30fc\u30e0"}),Object(o.jsxs)("form",{onSubmit:async t=>{try{if("delete"===t.target.type){const e=await j.a.post("http://localhost/toso/backend/FromDelete.php",{});alert(e.data)}else{t.preventDefault(),console.log("\u9001\u4fe1\u3059\u308b\u30c7\u30fc\u30bf:",e);const a=new FormData;a.append("name",e.name),a.append("email",e.email),a.append("message",e.message);const s=await j.a.post("http://localhost/toso/backend/SaveData.php",a,{headers:{"Content-Type":"multipart/form-data"}});alert(s.data)}}catch(a){console.error("\u30d5\u30a9\u30fc\u30e0\u9001\u4fe1\u30a8\u30e9\u30fc:",a),alert("\u9001\u4fe1\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002")}},children:[Object(o.jsx)("input",{type:"text",name:"name",placeholder:"\u540d\u524d",value:e.name,onChange:a,required:!0,className:"input"}),Object(o.jsx)("input",{type:"email",name:"email",placeholder:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9",value:e.email,onChange:a,required:!0,className:"input"}),Object(o.jsx)("textarea",{name:"message",placeholder:"\u30e1\u30c3\u30bb\u30fc\u30b8",value:e.message,onChange:a,required:!0,className:"textarea"}),Object(o.jsx)("button",{type:"submit",className:"button",children:"\u9001\u4fe1"}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{type:"delete",className:"button",children:"\u6700\u65b0\u30ec\u30b3\u30fc\u30c9\u524a\u9664"})]})]})},b=a(11);var p=()=>Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("section",{children:Object(o.jsx)("div",{className:"main_image",children:Object(o.jsx)(m.a,{classNameNotInView:"hidden",classNameInView:"animate__animated animate__fadeInRight slower",children:Object(o.jsx)("h1",{className:"title1",children:Object(o.jsxs)("p",{style:{textAlign:"left"},children:["\u540d\u524d\uff1a\u5409\u7530 \u67ca\uff08\u3088\u3057\u3060 \u3057\u3085\u3046\uff09",Object(o.jsx)("br",{}),"\u5e74\u9f62\uff1a22\u6b73\uff08\u5c02\u9580\u5b66\u751f\uff09",Object(o.jsx)("br",{}),"\u51fa\u8eab\uff1a\u5948\u826f\u770c"]})})})})}),Object(o.jsx)("div",{className:"card",children:l.map(((e,t)=>Object(o.jsx)(d,{title:e.title,description:e.description,imagePath:e.imagePath},t)))}),Object(o.jsx)("div",{className:"formContainer",children:Object(o.jsx)(m.a,{classNameNotInView:"hidden",classNameInView:"animate__animated animate__fadeInLeft slower",children:Object(o.jsx)(h,{})})}),Object(o.jsx)("footer",{className:"footer",children:Object(o.jsx)("small",{children:Object(o.jsx)("div",{children:Object(o.jsx)("a",{href:"https://twitter.com/hiiraagii",target:"_blank",rel:"noreferrer",children:Object(o.jsx)(b.a,{className:"icon"})})})})})]});var x=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,35)).then((t=>{let{getCLS:a,getFID:s,getFCP:n,getLCP:i,getTTFB:c}=t;a(e),s(e),n(e),i(e),c(e)}))};console.log("Hello, world!"),c.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root")),x()}},[[32,1,2]]]);
//# sourceMappingURL=main.56eb31eb.chunk.js.map