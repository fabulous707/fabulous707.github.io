var S=(t,n,c)=>new Promise((d,l)=>{var v=s=>{try{o(c.next(s))}catch(a){l(a)}},y=s=>{try{o(c.throw(s))}catch(a){l(a)}},o=s=>s.done?d(s.value):Promise.resolve(s.value).then(v,y);o((c=c.apply(t,n)).next())});import{_ as r,o as V,a as j,b as i,c as _,d as e,e as D,p as u,f as p,g as m,w as g,h as f,u as h,R as b,i as R,r as k,T as A,j as U,k as Y}from"./index-05ac0632.js";const q=""+new URL("avatar-b54518eb.jpg",import.meta.url).href;const w=t=>(u("data-v-521178d3"),t=t(),p(),t),F={class:"container"},z=D('<div class="self" data-v-521178d3><div class="box" data-v-521178d3><img src="'+q+'" alt="" class="img" data-v-521178d3><div class="content" data-v-521178d3><div class="name" data-v-521178d3><strong data-v-521178d3>I&#39;m gjq</strong></div><div class="link-top" data-v-521178d3></div><div data-v-521178d3>咸鱼一条👀</div><div data-v-521178d3>爱好吃饭、睡觉、打豆豆😍</div><div data-v-521178d3>喜欢吃辣🌶喜欢火锅🥘</div><div data-v-521178d3>喜欢烧烤🍖喜欢冰淇淋🍦</div><div data-v-521178d3>一个卑微的打工人⏰</div><div data-v-521178d3>没日没夜的为自己打工😭</div><div data-v-521178d3>希望成长为👇</div><div data-v-521178d3>A Better Person🎯</div><div data-v-521178d3><strong data-v-521178d3>&gt;相遇的意义大概就是彼此照亮✨</strong></div></div></div></div>',1),G={class:"wel"},J=w(()=>e("div",{class:"clock",id:"clock"},null,-1)),K=w(()=>e("div",{class:"text",id:"dynamicText"},"Welcome to my world！！",-1)),O=w(()=>e("div",{class:"tips"},"> You can click the button below ",-1)),Q=w(()=>e("div",{class:"tips"},"    to enter the corresponding section",-1)),X={class:"btnbox"},Z={class:"inner"},tt={class:"inner"},et={class:"inner"},st={class:"inner"},nt={class:"inner"},ot={class:"inner"},at={__name:"welcome",setup(t,{emit:n}){const c=n,d=o=>{c("changePage",o)};function l(){const o=new Date,s=o.getFullYear(),a=(o.getMonth()+1).toString().padStart(2,"0"),$=o.getDate().toString().padStart(2,"0"),x=o.getHours().toString().padStart(2,"0"),L=o.getMinutes().toString().padStart(2,"0"),E=o.getSeconds().toString().padStart(2,"0"),H=`${s}-${a}-${$} ${x}:${L}:${E}`;let N=document.getElementById("clock");N.innerText=H}const v=setInterval(l,1e3);function y(o,s){let a=0;const $=document.getElementById("dynamicText");$.innerHTML="";function x(){a<o.length?($.innerHTML+=o.charAt(a),a++,setTimeout(x,s)):$.innerHTML+="|"}x()}return V(()=>S(this,null,function*(){yield l(),yield y("Welcome to my world ! !!!!!!!!",250)})),j(()=>{clearInterval(v)}),(o,s)=>(i(),_("div",F,[z,e("div",G,[J,K,O,Q,e("div",X,[e("div",Z,[e("button",{class:"btn",onClick:s[0]||(s[0]=a=>d(2))},"study ")]),e("div",tt,[e("button",{class:"btn",onClick:s[1]||(s[1]=a=>d(3))},"daily")]),e("div",et,[e("button",{class:"btn",onClick:s[2]||(s[2]=a=>d(4))},"travel")]),e("div",st,[e("button",{class:"btn",onClick:s[3]||(s[3]=a=>d(5))},"mood")]),e("div",nt,[e("button",{class:"btn",onClick:s[4]||(s[4]=a=>d(6))},"family")]),e("div",ot,[e("button",{class:"btn",onClick:s[5]||(s[5]=a=>d(7))},"friends")])])])]))}},ct=r(at,[["__scopeId","data-v-521178d3"]]);const P=t=>(u("data-v-deb207b0"),t=t(),p(),t),dt={class:"container"},it=P(()=>e("div",{class:"text"},"Welcome to the learning world",-1)),_t=P(()=>e("div",{class:"tips"},"click me",-1)),lt={__name:"study",setup(t){return(n,c)=>(i(),_("div",dt,[it,_t,m(h(b),{class:"btn",to:"/study"},{default:g(()=>[f(">")]),_:1})]))}},rt=r(lt,[["__scopeId","data-v-deb207b0"]]);const C=t=>(u("data-v-74c33e4d"),t=t(),p(),t),vt={class:"container"},ut=C(()=>e("div",{class:"text"},"Welcome to my spiritual world",-1)),pt=C(()=>e("div",{class:"tips"},"click me",-1)),mt={__name:"mood",setup(t){return(n,c)=>(i(),_("div",vt,[ut,pt,m(h(b),{class:"btn",to:"/mood"},{default:g(()=>[f(">")]),_:1})]))}},gt=r(mt,[["__scopeId","data-v-74c33e4d"]]);const T=t=>(u("data-v-0b6f0918"),t=t(),p(),t),ft={class:"container"},ht=T(()=>e("div",{class:"text"},"welcome to my daily life",-1)),bt=T(()=>e("div",{class:"tips"},"click me",-1)),yt={__name:"daily",setup(t){return(n,c)=>(i(),_("div",ft,[ht,bt,m(h(b),{class:"btn",to:"/daily"},{default:g(()=>[f(">")]),_:1})]))}},$t=r(yt,[["__scopeId","data-v-0b6f0918"]]);const B=t=>(u("data-v-51e5df8d"),t=t(),p(),t),xt={class:"container"},kt=B(()=>e("div",{class:"text"},"My family",-1)),wt=B(()=>e("div",{class:"tips"},"click me",-1)),St={__name:"family",setup(t){return(n,c)=>(i(),_("div",xt,[kt,wt,m(h(b),{class:"btn",to:"/family"},{default:g(()=>[f(">")]),_:1})]))}},It=r(St,[["__scopeId","data-v-51e5df8d"]]);const M=t=>(u("data-v-65b21d9a"),t=t(),p(),t),Pt={class:"container"},Ct=M(()=>e("div",{class:"text"},"My friends",-1)),Tt=M(()=>e("div",{class:"tips"},"click me",-1)),Bt={__name:"friends",setup(t){return(n,c)=>(i(),_("div",Pt,[Ct,Tt,m(h(b),{class:"btn",to:"/friends"},{default:g(()=>[f(">")]),_:1})]))}},Mt=r(Bt,[["__scopeId","data-v-65b21d9a"]]);const W=t=>(u("data-v-8fb46d74"),t=t(),p(),t),Wt={class:"container"},Lt=W(()=>e("div",{class:"text"},"Welcome to the traveling world",-1)),Et=W(()=>e("div",{class:"tips"},"click me",-1)),Ht={__name:"travel",setup(t){return(n,c)=>(i(),_("div",Wt,[Lt,Et,m(h(b),{class:"btn",to:"/travel"},{default:g(()=>[f(">")]),_:1})]))}},Nt=r(Ht,[["__scopeId","data-v-8fb46d74"]]),Vt=R("page",()=>{const t=k(1),n=k(7);return{currentPage:t,totalPage:n,nextPage:(d,l)=>{}}},{persist:!0});const jt={class:"full-page-container"},Dt={class:"buttons-container"},Rt=["disabled"],At=["disabled"],I=7,Ut={__name:"index",setup(t){Vt();const n=k(1);function c(){n.value=1}function d(){n.value<I&&(n.value+=1)}function l(){n.value>1&&(n.value-=1)}const v=s=>{switch(s){case 1:return ct;case 2:return rt;case 3:return $t;case 4:return Nt;case 5:return gt;case 6:return It;case 7:return Mt;default:return null}},y=k(v(n.value)),o=s=>{n.value=s,y.value=v(s)};return(s,a)=>(i(),_("div",jt,[e("div",Dt,[e("button",{onClick:c},"回到首页"),e("button",{onClick:l,disabled:n.value===1},"上一页",8,Rt),e("button",{onClick:d,disabled:n.value===I},"下一页",8,At)]),m(A,{name:"fade",mode:"out-in"},{default:g(()=>[(i(),_("div",{class:"page-container",key:n.value},[(i(),U(Y(v(n.value)),{onChangePage:o},null,32))]))]),_:1})]))}},Ft=r(Ut,[["__scopeId","data-v-03a6c33e"]]);export{Ft as default};
