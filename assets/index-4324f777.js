var I=(t,a,n)=>new Promise((h,o)=>{var l=s=>{try{v(n.next(s))}catch(c){o(c)}},$=s=>{try{v(n.throw(s))}catch(c){o(c)}},v=s=>s.done?h(s.value):Promise.resolve(s.value).then(l,$);v((n=n.apply(t,a)).next())});import{d as C,r as k,_ as r,o as R,a as V,b as i,c as _,e,t as A,u,f as T,p,g as m,h as g,w as f,i as b,R as y,T as Q,j as U,k as Y}from"./index-fbb70907.js";const F=""+new URL("avatar-b54518eb.jpg",import.meta.url).href,z=C("record",()=>({recordnum:k(0),count:n=>n+1}),{persist:!0});const w=t=>(p("data-v-aed08a8c"),t=t(),m(),t),G={class:"container"},J=T('<div class="self" data-v-aed08a8c><div class="box" data-v-aed08a8c><img src="'+F+'" alt="" class="img" data-v-aed08a8c><div class="content" data-v-aed08a8c><div class="name" data-v-aed08a8c><strong data-v-aed08a8c>I&#39;m gjq</strong></div><div class="link-top" data-v-aed08a8c></div><div data-v-aed08a8c>咸鱼一条👀</div><div data-v-aed08a8c>爱好吃饭、睡觉、打豆豆😍</div><div data-v-aed08a8c>喜欢吃辣🌶喜欢火锅🥘</div><div data-v-aed08a8c>喜欢烧烤🍖喜欢冰淇淋🍦</div><div data-v-aed08a8c>一个卑微的打工人⏰</div><div data-v-aed08a8c>没日没夜的为自己打工😭</div><div data-v-aed08a8c>希望成长为👇</div><div data-v-aed08a8c>A Better Person🎯</div><div data-v-aed08a8c><strong data-v-aed08a8c>&gt;相遇的意义大概就是彼此照亮✨</strong></div></div></div></div>',1),K={class:"wel"},O=w(()=>e("div",{class:"clock",id:"clock"},null,-1)),X=w(()=>e("div",{class:"text",id:"dynamicText"},"Welcome to my world！！",-1)),Z=w(()=>e("div",{class:"tips"},"> You can click the button below ",-1)),tt=w(()=>e("div",{class:"tips"},"    to enter the corresponding section",-1)),et={class:"btnbox"},st={class:"inner"},at={class:"inner"},nt={class:"inner"},ct={class:"inner"},ot={class:"inner"},dt={class:"inner"},it={class:"info"},_t=T('<div class="box" data-v-aed08a8c><div class="textbox" data-v-aed08a8c><div class="title" data-v-aed08a8c>Contact</div><div class="inner" data-v-aed08a8c>Email：2030928717@qq.com</div><div class="inner" data-v-aed08a8c>Tel：18397863962</div><div class="inner" data-v-aed08a8c>WeChat：gjq2030928717</div><div class="inner" data-v-aed08a8c>QQ：2030928717</div></div><div class="img" data-v-aed08a8c></div></div>',1),lt={__name:"welcome",setup(t,{emit:a}){const n=z();n.recordnum=n.count(n.recordnum),console.log(n.recordnum);const h=a,o=s=>{h("changePage",s)};function l(){const s=new Date,c=s.getFullYear(),d=(s.getMonth()+1).toString().padStart(2,"0"),x=s.getDate().toString().padStart(2,"0"),S=s.getHours().toString().padStart(2,"0"),q=s.getMinutes().toString().padStart(2,"0"),D=s.getSeconds().toString().padStart(2,"0"),H=`${c}-${d}-${x} ${S}:${q}:${D}`;let N=document.getElementById("clock");N.innerText=H}const $=setInterval(l,1e3);function v(s,c){let d=0;const x=document.getElementById("dynamicText");x.innerHTML="";function S(){d<s.length?(x.innerHTML+=s.charAt(d),d++,setTimeout(S,c)):x.innerHTML+="|"}S()}return R(()=>I(this,null,function*(){yield l(),yield v("Welcome to my world ! !!!!!!!!",250)})),V(()=>{clearInterval($)}),(s,c)=>(i(),_("div",G,[J,e("div",K,[O,X,Z,tt,e("div",et,[e("div",st,[e("button",{class:"btn btn1",onClick:c[0]||(c[0]=d=>o(2))},"study ")]),e("div",at,[e("button",{class:"btn btn2",onClick:c[1]||(c[1]=d=>o(3))},"daily")]),e("div",nt,[e("button",{class:"btn btn3",onClick:c[2]||(c[2]=d=>o(4))},"travel")]),e("div",ct,[e("button",{class:"btn btn4",onClick:c[3]||(c[3]=d=>o(5))},"mood")]),e("div",ot,[e("button",{class:"btn btn5",onClick:c[4]||(c[4]=d=>o(6))},"family")]),e("div",dt,[e("button",{class:"btn btn6",onClick:c[5]||(c[5]=d=>o(7))},"friends")])])]),e("div",it,[e("div",null,A(u(n).recordnum),1),_t])]))}},rt=r(lt,[["__scopeId","data-v-aed08a8c"]]);const B=t=>(p("data-v-21c3450f"),t=t(),m(),t),vt={class:"container"},ut=B(()=>e("div",{class:"text"},"Welcome to the learning world",-1)),pt=B(()=>e("div",{class:"tips"},"click me",-1)),mt={__name:"study",setup(t){return(a,n)=>(i(),_("div",vt,[ut,pt,g(u(y),{class:"btn",to:"/study"},{default:f(()=>[b(">")]),_:1})]))}},gt=r(mt,[["__scopeId","data-v-21c3450f"]]);const M=t=>(p("data-v-64146e58"),t=t(),m(),t),ft={class:"container"},ht=M(()=>e("div",{class:"text"},"Welcome to my spiritual world",-1)),bt=M(()=>e("div",{class:"tips"},"click me",-1)),yt={__name:"mood",setup(t){return(a,n)=>(i(),_("div",ft,[ht,bt,g(u(y),{class:"btn",to:"/mood"},{default:f(()=>[b(">")]),_:1})]))}},$t=r(yt,[["__scopeId","data-v-64146e58"]]);const W=t=>(p("data-v-faa03503"),t=t(),m(),t),xt={class:"container"},kt=W(()=>e("div",{class:"text"},"welcome to my daily life",-1)),St=W(()=>e("div",{class:"tips"},"click me",-1)),wt={__name:"daily",setup(t){return(a,n)=>(i(),_("div",xt,[kt,St,g(u(y),{class:"btn",to:"/daily"},{default:f(()=>[b(">")]),_:1})]))}},It=r(wt,[["__scopeId","data-v-faa03503"]]);const E=t=>(p("data-v-c9f584a2"),t=t(),m(),t),Pt={class:"container"},Ct=E(()=>e("div",{class:"text"},"My family",-1)),Tt=E(()=>e("div",{class:"tips"},"click me",-1)),Bt={__name:"family",setup(t){return(a,n)=>(i(),_("div",Pt,[Ct,Tt,g(u(y),{class:"btn",to:"/family"},{default:f(()=>[b(">")]),_:1})]))}},Mt=r(Bt,[["__scopeId","data-v-c9f584a2"]]);const L=t=>(p("data-v-09c8447d"),t=t(),m(),t),Wt={class:"container"},Et=L(()=>e("div",{class:"text"},"My friends",-1)),Lt=L(()=>e("div",{class:"tips"},"click me",-1)),jt={__name:"friends",setup(t){return(a,n)=>(i(),_("div",Wt,[Et,Lt,g(u(y),{class:"btn",to:"/friends"},{default:f(()=>[b(">")]),_:1})]))}},qt=r(jt,[["__scopeId","data-v-09c8447d"]]);const j=t=>(p("data-v-3eb1f485"),t=t(),m(),t),Dt={class:"container"},Ht=j(()=>e("div",{class:"text"},"Welcome to the traveling world",-1)),Nt=j(()=>e("div",{class:"tips"},"click me",-1)),Rt={__name:"travel",setup(t){return(a,n)=>(i(),_("div",Dt,[Ht,Nt,g(u(y),{class:"btn",to:"/travel"},{default:f(()=>[b(">")]),_:1})]))}},Vt=r(Rt,[["__scopeId","data-v-3eb1f485"]]),At=C("page",()=>{const t=k(1),a=k(7);return{currentPage:t,totalPage:a,nextPage:(h,o)=>{}}},{persist:!0});const Qt={class:"full-page-container"},Ut={class:"buttons-container"},Yt=["disabled"],Ft=["disabled"],P=7,zt={__name:"index",setup(t){At();const a=k(1);function n(){a.value=1}function h(){a.value<P&&(a.value+=1)}function o(){a.value>1&&(a.value-=1)}const l=s=>{switch(s){case 1:return rt;case 2:return gt;case 3:return It;case 4:return Vt;case 5:return $t;case 6:return Mt;case 7:return qt;default:return null}},$=k(l(a.value)),v=s=>{a.value=s,$.value=l(s)};return(s,c)=>(i(),_("div",Qt,[e("div",Ut,[e("button",{class:"btn",onClick:n},"回到首页"),e("button",{class:"btn",onClick:o,disabled:a.value===1},"上一页",8,Yt),e("button",{class:"btn",onClick:h,disabled:a.value===P},"下一页",8,Ft)]),g(Q,{name:"fade",mode:"out-in"},{default:f(()=>[(i(),_("div",{class:"page-container",key:a.value},[(i(),U(Y(l(a.value)),{onChangePage:v},null,32))]))]),_:1})]))}},Kt=r(zt,[["__scopeId","data-v-8b2243cb"]]);export{Kt as default};
