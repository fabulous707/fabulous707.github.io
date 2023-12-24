var re=Object.defineProperty,le=Object.defineProperties;var de=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var ce=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable;var J=(m,i,l)=>i in m?re(m,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):m[i]=l,B=(m,i)=>{for(var l in i||(i={}))ce.call(i,l)&&J(m,l,i[l]);if(N)for(var l of N(i))ue.call(i,l)&&J(m,l,i[l]);return m},z=(m,i)=>le(m,de(i));import{_ as pe,o as me,b as fe,c as ve,e as he}from"./index-05ac0632.js";const Ee={id:"overlay"},ge=he('<ul data-v-ee67d3e5><li data-v-ee67d3e5><button class="btn" id="btnA" type="button" data-v-ee67d3e5> Snowflakes Falling Down by Simon Panrucker </button></li><li data-v-ee67d3e5><button class="btn" id="btnB" type="button" data-v-ee67d3e5>This Christmas by Dott</button></li><li data-v-ee67d3e5><button class="btn" id="btnC" type="button" data-v-ee67d3e5>No room at the inn by TRG Banks</button></li><li data-v-ee67d3e5><button class="btn" id="btnD" type="button" data-v-ee67d3e5>Jingle Bell Swing by Mark Smeby</button></li><li class="separator" data-v-ee67d3e5>或者</li><li data-v-ee67d3e5><input type="file" id="upload" hidden data-v-ee67d3e5><label for="upload" data-v-ee67d3e5>上传音乐</label></li></ul>',1),_e=[ge],be={__name:"Christmas",setup(m){return me(()=>{const{PI:i,sin:l,cos:Y}=Math,G=2*i,T=(e,t,n,o,a)=>o+(e-t)/(n-t)*(a-o),K=(e,t=0)=>Array(e).fill(t).map((n,o)=>n+o),u=(e,t=0)=>t+Math.random()*(e-t),O=(e,t=0)=>Math.floor(t+Math.random()*(e-t)),U=e=>e[O(e.length)],Q=(e,t=1)=>[t*Y(e),t*l(e)];let x,C,w,M,F=0;const h={time:{type:"f",value:0},step:{type:"f",value:0}},D={exposure:1,bloomStrength:.9,bloomThreshold:0,bloomRadius:.5};let S;const k=2048,W=4e3,$=new THREE.AudioListener,R=new THREE.Audio($);document.querySelector("input").addEventListener("change",Z,!1),document.querySelectorAll(".btn").forEach((e,t)=>e.addEventListener("click",()=>X(t)));function V(){document.getElementById("overlay").remove(),x=new THREE.Scene,w=new THREE.WebGLRenderer({antialias:!0}),w.setPixelRatio(window.devicePixelRatio),w.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(w.domElement),C=new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,1,1e3),C.position.set(-.09397456774197047,-2.5597086635726947,24.420789670889008),C.rotation.set(.10443543723052419,-.003827152981119352,.0004011488708739715);const t=w.capabilities.isWebGL2?THREE.RedFormat:THREE.LuminanceFormat;h.tAudioData={value:new THREE.DataTexture(M.data,k/2,1,t)},te(x,h,3e3),ee(x,h),K(10).map(a=>{q(x,h,W,[20,0,-20*a]),q(x,h,W,[-20,0,-20*a])});const n=new THREE.RenderPass(x,C),o=new THREE.UnrealBloomPass(new THREE.Vector2(window.innerWidth,window.innerHeight),1.5,.4,.85);o.threshold=D.bloomThreshold,o.strength=D.bloomStrength,o.radius=D.bloomRadius,S=new THREE.EffectComposer(w),S.addPass(n),S.addPass(o),oe(C,w,S),j()}function j(e){M.getFrequencyData(),h.tAudioData.value.needsUpdate=!0,F=(F+1)%1e3,h.time.value=e,h.step.value=F,S.render(),requestAnimationFrame(j)}function X(e){document.getElementById("overlay").innerHTML='<div class="text-loading">等一下哈 马上来啦...</div>';const n=["https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Simon_Panrucker/Happy_Christmas_You_Guys/Simon_Panrucker_-_01_-_Snowflakes_Falling_Down.mp3","https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Dott/This_Christmas/Dott_-_01_-_This_Christmas.mp3","https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/TRG_Banks/TRG_Banks_Christmas_Album/TRG_Banks_-_12_-_No_room_at_the_inn.mp3","https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Mark_Smeby/En_attendant_Nol/Mark_Smeby_-_07_-_Jingle_Bell_Swing.mp3"][e];new THREE.AudioLoader().load(n,function(a){R.setBuffer(a),R.play(),M=new THREE.AudioAnalyser(R,k),V()})}function Z(e){document.getElementById("overlay").innerHTML='<div class="text-loading">等一下哈 马上来啦...</div>';const t=e.target.files,n=new FileReader;n.onload=function(o){var a=o.target.result;$.context.decodeAudioData(a,function(E){R.setBuffer(E),R.play(),M=new THREE.AudioAnalyser(R,k),V()})},n.readAsArrayBuffer(t[0])}function q(e,t,n,o){const a=`
  attribute float mIndex;
  varying vec3 vColor;
  varying float opacity;
  uniform sampler2D tAudioData;
  float norm(float value, float min, float max ){
   return (value - min) / (max - min);
  }
  float lerp(float norm, float min, float max){
   return (max - min) * norm + min;
  }
  float map(float value, float sourceMin, float sourceMax, float destMin, float destMax){
   return lerp(norm(value, sourceMin, sourceMax), destMin, destMax);
  }
  void main() {
   vColor = color;
   vec3 p = position;
   vec4 mvPosition = modelViewMatrix * vec4( p, 1.0 );
   float amplitude = texture2D( tAudioData, vec2( mIndex, 0.1 ) ).r;
   float amplitudeClamped = clamp(amplitude-0.4,0.0, 0.6 );
   float sizeMapped = map(amplitudeClamped, 0.0, 0.6, 1.0, 20.0);
   opacity = map(mvPosition.z , -200.0, 15.0, 0.0, 1.0);
   gl_PointSize = sizeMapped * ( 100.0 / -mvPosition.z );
   gl_Position = projectionMatrix * mvPosition;
  }
  `,E=`
  varying vec3 vColor;
  varying float opacity;
  uniform sampler2D pointTexture;
  void main() {
   gl_FragColor = vec4( vColor, opacity );
   gl_FragColor = gl_FragColor * texture2D( pointTexture, gl_PointCoord ); 
  }
  `,d=new THREE.ShaderMaterial({uniforms:z(B({},t),{pointTexture:{value:new THREE.TextureLoader().load("https://assets.codepen.io/3685267/spark1.png")}}),vertexShader:a,fragmentShader:E,blending:THREE.AdditiveBlending,depthTest:!1,transparent:!0,vertexColors:!0}),s=new THREE.BufferGeometry,p=[],r=[],c=[],g=[],_=[],f=new THREE.Color;for(let y=0;y<n;y++){const H=Math.random(),I=T(H,0,1,-8,10),ne=T(H,0,1,0,6*G)+G/2*(y%2),[ae,ie]=Q(ne,T(H,0,1,5,0)),A=T(H,0,1,1,0);p.push(ie+u(-.3*A,.3*A)),p.push(I+u(-.3*A,.3*A)),p.push(ae+u(-.3*A,.3*A)),f.setHSL(T(y,0,n,1,0),1,.5),r.push(f.r,f.g,f.b),g.push(u(1e3)),c.push(1);const se=T(y,0,n,1,0);_.push(se)}s.setAttribute("position",new THREE.Float32BufferAttribute(p,3).setUsage(THREE.DynamicDrawUsage)),s.setAttribute("color",new THREE.Float32BufferAttribute(r,3)),s.setAttribute("size",new THREE.Float32BufferAttribute(c,1)),s.setAttribute("phase",new THREE.Float32BufferAttribute(g,1)),s.setAttribute("mIndex",new THREE.Float32BufferAttribute(_,1));const v=new THREE.Points(s,d),[b,L,P]=o;v.position.x=b,v.position.y=L,v.position.z=P,e.add(v)}function ee(e,t){const n=`
  attribute float size;
  attribute float phase;
  attribute float phaseSecondary;
  varying vec3 vColor;
  varying float opacity;
  uniform float time;
  uniform float step;
  float norm(float value, float min, float max ){
   return (value - min) / (max - min);
  }
  float lerp(float norm, float min, float max){
   return (max - min) * norm + min;
  }
  float map(float value, float sourceMin, float sourceMax, float destMin, float destMax){
   return lerp(norm(value, sourceMin, sourceMax), destMin, destMax);
  }
  void main() {
   float t = time* 0.0006;
   vColor = color;
   vec3 p = position;
   p.y = map(mod(phase+step, 1000.0), 0.0, 1000.0, 25.0, -8.0);
   p.x += sin(t+phase);
   p.z += sin(t+phaseSecondary);
   opacity = map(p.z, -150.0, 15.0, 0.0, 1.0);
   vec4 mvPosition = modelViewMatrix * vec4( p, 1.0 );
   gl_PointSize = size * ( 100.0 / -mvPosition.z );
   gl_Position = projectionMatrix * mvPosition;
  }
  `,o=`
  uniform sampler2D pointTexture;
  varying vec3 vColor;
  varying float opacity;
  void main() {
   gl_FragColor = vec4( vColor, opacity );
   gl_FragColor = gl_FragColor * texture2D( pointTexture, gl_PointCoord ); 
  }
  `;function a(d){const p=new THREE.ShaderMaterial({uniforms:z(B({},t),{pointTexture:{value:new THREE.TextureLoader().load(d)}}),vertexShader:n,fragmentShader:o,blending:THREE.AdditiveBlending,depthTest:!1,transparent:!0,vertexColors:!0}),r=new THREE.BufferGeometry,c=[],g=[],_=[],f=[],v=[],b=new THREE.Color;for(let P=0;P<300;P++){const[y,H,I]=[u(25,-25),0,u(15,-150)];c.push(y),c.push(H),c.push(I),b.set(U(["#f1d4d4","#f1f6f9","#eeeeee","#f1f1e8"])),g.push(b.r,b.g,b.b),f.push(u(1e3)),v.push(u(1e3)),_.push(u(4,2))}r.setAttribute("position",new THREE.Float32BufferAttribute(c,3)),r.setAttribute("color",new THREE.Float32BufferAttribute(g,3)),r.setAttribute("size",new THREE.Float32BufferAttribute(_,1)),r.setAttribute("phase",new THREE.Float32BufferAttribute(f,1)),r.setAttribute("phaseSecondary",new THREE.Float32BufferAttribute(v,1));const L=new THREE.Points(r,p);e.add(L)}["https://assets.codepen.io/3685267/snowflake1.png","https://assets.codepen.io/3685267/snowflake2.png","https://assets.codepen.io/3685267/snowflake3.png","https://assets.codepen.io/3685267/snowflake4.png","https://assets.codepen.io/3685267/snowflake5.png"].forEach(d=>{a(d)})}function te(e,t,n){const o=`
  attribute float size;
  attribute vec3 customColor;
  varying vec3 vColor;
  void main() {
   vColor = customColor;
   vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
   gl_PointSize = size * ( 300.0 / -mvPosition.z );
   gl_Position = projectionMatrix * mvPosition;
  }
  `,a=`
  uniform vec3 color;
  uniform sampler2D pointTexture;
  varying vec3 vColor;
  void main() {
   gl_FragColor = vec4( vColor, 1.0 );
   gl_FragColor = gl_FragColor * texture2D( pointTexture, gl_PointCoord );
  }
  `,E=new THREE.ShaderMaterial({uniforms:z(B({},t),{pointTexture:{value:new THREE.TextureLoader().load("https://assets.codepen.io/3685267/spark1.png")}}),vertexShader:o,fragmentShader:a,blending:THREE.AdditiveBlending,depthTest:!1,transparent:!0,vertexColors:!0}),d=new THREE.BufferGeometry,s=[],p=[],r=[],c=new THREE.Color;for(let _=0;_<n;_++){const[f,v,b]=[u(-25,25),0,u(-150,15)];s.push(f),s.push(v),s.push(b),c.set(U(["#93abd3","#f2f4c0","#9ddfd3"])),p.push(c.r,c.g,c.b),r.push(1)}d.setAttribute("position",new THREE.Float32BufferAttribute(s,3).setUsage(THREE.DynamicDrawUsage)),d.setAttribute("customColor",new THREE.Float32BufferAttribute(p,3)),d.setAttribute("size",new THREE.Float32BufferAttribute(r,1));const g=new THREE.Points(d,E);g.position.y=-8,e.add(g)}function oe(e,t,n){document.addEventListener("keydown",o=>{const{x:a,y:E,z:d}=e.position;console.log(`camera.position.set(${a},${E},${d})`);const{x:s,y:p,z:r}=e.rotation;console.log(`camera.rotation.set(${s},${p},${r})`)}),window.addEventListener("resize",()=>{const o=window.innerWidth,a=window.innerHeight;e.aspect=o/a,e.updateProjectionMatrix(),t.setSize(o,a),n.setSize(o,a)},!1)}}),(i,l)=>(fe(),ve("div",Ee,_e))}},xe=pe(be,[["__scopeId","data-v-ee67d3e5"]]);export{xe as default};
