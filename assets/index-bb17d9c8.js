var S=(t,a,c)=>new Promise((i,l)=>{var v=s=>{try{n(c.next(s))}catch(o){l(o)}},y=s=>{try{n(c.throw(s))}catch(o){l(o)}},n=s=>s.done?i(s.value):Promise.resolve(s.value).then(v,y);n((c=c.apply(t,a)).next())});import{_ as r,o as N,a as V,b as d,c as _,d as e,e as P,p as u,f as p,g as m,w as f,h as g,u as h,R as b,i as D,r as k,T as R,j as A,k as Q}from"./index-8f392623.js";const U=""+new URL("avatar-b54518eb.jpg",import.meta.url).href;const w=t=>(u("data-v-a602710e"),t=t(),p(),t),Y={class:"container"},F=P('<div class="self" data-v-a602710e><div class="box" data-v-a602710e><img src="'+U+'" alt="" class="img" data-v-a602710e><div class="content" data-v-a602710e><div class="name" data-v-a602710e><strong data-v-a602710e>I&#39;m gjq</strong></div><div class="link-top" data-v-a602710e></div><div data-v-a602710e>咸鱼一条👀</div><div data-v-a602710e>爱好吃饭、睡觉、打豆豆😍</div><div data-v-a602710e>喜欢吃辣🌶喜欢火锅🥘</div><div data-v-a602710e>喜欢烧烤🍖喜欢冰淇淋🍦</div><div data-v-a602710e>一个卑微的打工人⏰</div><div data-v-a602710e>没日没夜的为自己打工😭</div><div data-v-a602710e>希望成长为👇</div><div data-v-a602710e>A Better Person🎯</div><div data-v-a602710e><strong data-v-a602710e>&gt;相遇的意义大概就是彼此照亮✨</strong></div></div></div></div>',1),z={class:"wel"},G=w(()=>e("div",{class:"clock",id:"clock"},null,-1)),J=w(()=>e("div",{class:"text",id:"dynamicText"},"Welcome to my world！！",-1)),K=w(()=>e("div",{class:"tips"},"> You can click the button below ",-1)),O=w(()=>e("div",{class:"tips"},"    to enter the corresponding section",-1)),X={class:"btnbox"},Z={class:"inner"},tt={class:"inner"},et={class:"inner"},st={class:"inner"},at={class:"inner"},nt={class:"inner"},ot=P('<div class="info" data-v-a602710e><div class="box" data-v-a602710e><div class="textbox" data-v-a602710e><div class="title" data-v-a602710e>Contact</div><div class="inner" data-v-a602710e>Email：2030928717@qq.com</div><div class="inner" data-v-a602710e>Tel：18397863962</div><div class="inner" data-v-a602710e>WeChat：gjq2030928717</div><div class="inner" data-v-a602710e>QQ：2030928717</div></div><div class="img" data-v-a602710e></div></div></div>',1),ct={__name:"welcome",setup(t,{emit:a}){const c=a,i=n=>{c("changePage",n)};function l(){const n=new Date,s=n.getFullYear(),o=(n.getMonth()+1).toString().padStart(2,"0"),$=n.getDate().toString().padStart(2,"0"),x=n.getHours().toString().padStart(2,"0"),L=n.getMinutes().toString().padStart(2,"0"),j=n.getSeconds().toString().padStart(2,"0"),q=`${s}-${o}-${$} ${x}:${L}:${j}`;let H=document.getElementById("clock");H.innerText=q}const v=setInterval(l,1e3);function y(n,s){let o=0;const $=document.getElementById("dynamicText");$.innerHTML="";function x(){o<n.length?($.innerHTML+=n.charAt(o),o++,setTimeout(x,s)):$.innerHTML+="|"}x()}return N(()=>S(this,null,function*(){yield l(),yield y("Welcome to my world ! !!!!!!!!",250)})),V(()=>{clearInterval(v)}),(n,s)=>(d(),_("div",Y,[F,e("div",z,[G,J,K,O,e("div",X,[e("div",Z,[e("button",{class:"btn btn1",onClick:s[0]||(s[0]=o=>i(2))},"study ")]),e("div",tt,[e("button",{class:"btn btn2",onClick:s[1]||(s[1]=o=>i(3))},"daily")]),e("div",et,[e("button",{class:"btn btn3",onClick:s[2]||(s[2]=o=>i(4))},"travel")]),e("div",st,[e("button",{class:"btn btn4",onClick:s[3]||(s[3]=o=>i(5))},"mood")]),e("div",at,[e("button",{class:"btn btn5",onClick:s[4]||(s[4]=o=>i(6))},"family")]),e("div",nt,[e("button",{class:"btn btn6",onClick:s[5]||(s[5]=o=>i(7))},"friends")])])]),ot]))}},it=r(ct,[["__scopeId","data-v-a602710e"]]);const C=t=>(u("data-v-21c3450f"),t=t(),p(),t),dt={class:"container"},_t=C(()=>e("div",{class:"text"},"Welcome to the learning world",-1)),lt=C(()=>e("div",{class:"tips"},"click me",-1)),rt={__name:"study",setup(t){return(a,c)=>(d(),_("div",dt,[_t,lt,m(h(b),{class:"btn",to:"/study"},{default:f(()=>[g(">")]),_:1})]))}},vt=r(rt,[["__scopeId","data-v-21c3450f"]]);const T=t=>(u("data-v-64146e58"),t=t(),p(),t),ut={class:"container"},pt=T(()=>e("div",{class:"text"},"Welcome to my spiritual world",-1)),mt=T(()=>e("div",{class:"tips"},"click me",-1)),ft={__name:"mood",setup(t){return(a,c)=>(d(),_("div",ut,[pt,mt,m(h(b),{class:"btn",to:"/mood"},{default:f(()=>[g(">")]),_:1})]))}},gt=r(ft,[["__scopeId","data-v-64146e58"]]);const B=t=>(u("data-v-faa03503"),t=t(),p(),t),ht={class:"container"},bt=B(()=>e("div",{class:"text"},"welcome to my daily life",-1)),yt=B(()=>e("div",{class:"tips"},"click me",-1)),$t={__name:"daily",setup(t){return(a,c)=>(d(),_("div",ht,[bt,yt,m(h(b),{class:"btn",to:"/daily"},{default:f(()=>[g(">")]),_:1})]))}},xt=r($t,[["__scopeId","data-v-faa03503"]]);const M=t=>(u("data-v-c9f584a2"),t=t(),p(),t),kt={class:"container"},wt=M(()=>e("div",{class:"text"},"My family",-1)),St=M(()=>e("div",{class:"tips"},"click me",-1)),It={__name:"family",setup(t){return(a,c)=>(d(),_("div",kt,[wt,St,m(h(b),{class:"btn",to:"/family"},{default:f(()=>[g(">")]),_:1})]))}},Pt=r(It,[["__scopeId","data-v-c9f584a2"]]);const W=t=>(u("data-v-09c8447d"),t=t(),p(),t),Ct={class:"container"},Tt=W(()=>e("div",{class:"text"},"My friends",-1)),Bt=W(()=>e("div",{class:"tips"},"click me",-1)),Mt={__name:"friends",setup(t){return(a,c)=>(d(),_("div",Ct,[Tt,Bt,m(h(b),{class:"btn",to:"/friends"},{default:f(()=>[g(">")]),_:1})]))}},Wt=r(Mt,[["__scopeId","data-v-09c8447d"]]);const E=t=>(u("data-v-3eb1f485"),t=t(),p(),t),Et={class:"container"},Lt=E(()=>e("div",{class:"text"},"Welcome to the traveling world",-1)),jt=E(()=>e("div",{class:"tips"},"click me",-1)),qt={__name:"travel",setup(t){return(a,c)=>(d(),_("div",Et,[Lt,jt,m(h(b),{class:"btn",to:"/travel"},{default:f(()=>[g(">")]),_:1})]))}},Ht=r(qt,[["__scopeId","data-v-3eb1f485"]]),Nt=D("page",()=>{const t=k(1),a=k(7);return{currentPage:t,totalPage:a,nextPage:(i,l)=>{}}},{persist:!0});const Vt={class:"full-page-container"},Dt={class:"buttons-container"},Rt=["disabled"],At=["disabled"],I=7,Qt={__name:"index",setup(t){Nt();const a=k(1);function c(){a.value=1}function i(){a.value<I&&(a.value+=1)}function l(){a.value>1&&(a.value-=1)}const v=s=>{switch(s){case 1:return it;case 2:return vt;case 3:return xt;case 4:return Ht;case 5:return gt;case 6:return Pt;case 7:return Wt;default:return null}},y=k(v(a.value)),n=s=>{a.value=s,y.value=v(s)};return(s,o)=>(d(),_("div",Vt,[e("div",Dt,[e("button",{class:"btn",onClick:c},"回到首页"),e("button",{class:"btn",onClick:l,disabled:a.value===1},"上一页",8,Rt),e("button",{class:"btn",onClick:i,disabled:a.value===I},"下一页",8,At)]),m(R,{name:"fade",mode:"out-in"},{default:f(()=>[(d(),_("div",{class:"page-container",key:a.value},[(d(),A(Q(v(a.value)),{onChangePage:n},null,32))]))]),_:1})]))}},Ft=r(Qt,[["__scopeId","data-v-8b2243cb"]]);export{Ft as default};
