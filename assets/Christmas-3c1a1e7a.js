var st=Object.defineProperty,lt=Object.defineProperties;var dt=Object.getOwnPropertyDescriptors;var J=Object.getOwnPropertySymbols;var ut=Object.prototype.hasOwnProperty,ct=Object.prototype.propertyIsEnumerable;var Y=(c,i,r)=>i in c?st(c,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):c[i]=r,B=(c,i)=>{for(var r in i||(i={}))ut.call(i,r)&&Y(c,r,i[r]);if(J)for(var r of J(i))ct.call(i,r)&&Y(c,r,i[r]);return c},z=(c,i)=>lt(c,dt(i));import{_ as pt,o as ft,b as mt,c as vt,f as ht}from"./index-fbb70907.js";const Et={id:"overlay"},gt=ht('<ul data-v-82ea42fd><li data-v-82ea42fd><button class="btn" id="btnA" type="button" data-v-82ea42fd> Snowflakes Falling Down by Simon Panrucker </button></li><li data-v-82ea42fd><button class="btn" id="btnB" type="button" data-v-82ea42fd>This Christmas by Dott</button></li><li data-v-82ea42fd><button class="btn" id="btnC" type="button" data-v-82ea42fd>No room at the inn by TRG Banks</button></li><li data-v-82ea42fd><button class="btn" id="btnD" type="button" data-v-82ea42fd>Jingle Bell Swing by Mark Smeby</button></li><li class="separator" data-v-82ea42fd>或者</li><li data-v-82ea42fd><input type="file" id="upload" hidden data-v-82ea42fd><label for="upload" data-v-82ea42fd>上传音乐</label></li></ul>',1),_t=[gt],bt={__name:"Christmas",setup(c){return ft(()=>{const{PI:i,sin:r,cos:K}=Math,G=2*i,y=(t,e,n,o,a)=>o+(t-e)/(n-e)*(a-o),O=(t,e=0)=>Array(t).fill(e).map((n,o)=>n+o),u=(t,e=0)=>e+Math.random()*(t-e),Q=(t,e=0)=>Math.floor(e+Math.random()*(t-e)),U=t=>t[Q(t.length)],X=(t,e=1)=>[e*K(t),e*r(t)];let T,C,b,M,F=0;const h={time:{type:"f",value:0},step:{type:"f",value:0}},D={exposure:1,bloomStrength:.9,bloomThreshold:0,bloomRadius:.5};let S;const k=2048,W=4e3,V=new THREE.AudioListener,x=new THREE.Audio(V);document.querySelector("input").addEventListener("change",$,!1),document.querySelectorAll(".btn").forEach((t,e)=>t.addEventListener("click",()=>Z(e)));function j(){document.getElementById("overlay").remove(),T=new THREE.Scene,b=new THREE.WebGLRenderer({antialias:!0}),b.setPixelRatio(window.devicePixelRatio),b.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(b.domElement),C=new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,1,1e3),C.position.set(-.09397456774197047,-2.5597086635726947,24.420789670889008),C.rotation.set(.10443543723052419,-.003827152981119352,.0004011488708739715);const e=b.capabilities.isWebGL2?THREE.RedFormat:THREE.LuminanceFormat;h.tAudioData={value:new THREE.DataTexture(M.data,k/2,1,e)},et(T,h,3e3),tt(T,h),O(10).map(a=>{N(T,h,W,[20,0,-20*a]),N(T,h,W,[-20,0,-20*a])});const n=new THREE.RenderPass(T,C),o=new THREE.UnrealBloomPass(new THREE.Vector2(window.innerWidth,window.innerHeight),1.5,.4,.85);o.threshold=D.bloomThreshold,o.strength=D.bloomStrength,o.radius=D.bloomRadius,S=new THREE.EffectComposer(b),S.addPass(n),S.addPass(o),ot(C,b,S),q()}function q(t){M.getFrequencyData(),h.tAudioData.value.needsUpdate=!0,F=(F+1)%1e3,h.time.value=t,h.step.value=F,S.render(),requestAnimationFrame(q)}function Z(t){document.getElementById("overlay").innerHTML='<div class="text-loading">等一下哈 马上来啦...</div>';const n=["https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Simon_Panrucker/Happy_Christmas_You_Guys/Simon_Panrucker_-_01_-_Snowflakes_Falling_Down.mp3","https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Dott/This_Christmas/Dott_-_01_-_This_Christmas.mp3","https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/TRG_Banks/TRG_Banks_Christmas_Album/TRG_Banks_-_12_-_No_room_at_the_inn.mp3","https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Mark_Smeby/En_attendant_Nol/Mark_Smeby_-_07_-_Jingle_Bell_Swing.mp3"][t];new THREE.AudioLoader().load(n,function(a){x.setBuffer(a),x.play(),M=new THREE.AudioAnalyser(x,k),j()})}function $(t){document.getElementById("overlay").innerHTML='<div class="text-loading">等一下哈 马上来啦...</div>';const e=t.target.files,n=new FileReader;n.onload=function(o){var a=o.target.result;V.context.decodeAudioData(a,function(R){x.setBuffer(R),x.play(),M=new THREE.AudioAnalyser(x,k),j()})},n.readAsArrayBuffer(e[0])}function N(t,e,n,o){const a=`
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
  		`,R=`
  		varying vec3 vColor;
  		varying float opacity;
  		uniform sampler2D pointTexture;
  		void main() {
  		 gl_FragColor = vec4( vColor, opacity );
  		 gl_FragColor = gl_FragColor * texture2D( pointTexture, gl_PointCoord ); 
  		}
  		`,p=new THREE.ShaderMaterial({uniforms:z(B({},e),{pointTexture:{value:new THREE.TextureLoader().load("https://assets.codepen.io/3685267/spark1.png")}}),vertexShader:a,fragmentShader:R,blending:THREE.AdditiveBlending,depthTest:!1,transparent:!0,vertexColors:!0}),s=new THREE.BufferGeometry,f=[],l=[],d=[],E=[],g=[],m=new THREE.Color;for(let w=0;w<n;w++){const H=Math.random(),I=y(H,0,1,-8,10),nt=y(H,0,1,0,6*G)+G/2*(w%2),[at,it]=X(nt,y(H,0,1,5,0)),A=y(H,0,1,1,0);f.push(it+u(-.3*A,.3*A)),f.push(I+u(-.3*A,.3*A)),f.push(at+u(-.3*A,.3*A)),m.setHSL(y(w,0,n,1,0),1,.5),l.push(m.r,m.g,m.b),E.push(u(1e3)),d.push(1);const rt=y(w,0,n,1,0);g.push(rt)}s.setAttribute("position",new THREE.Float32BufferAttribute(f,3).setUsage(THREE.DynamicDrawUsage)),s.setAttribute("color",new THREE.Float32BufferAttribute(l,3)),s.setAttribute("size",new THREE.Float32BufferAttribute(d,1)),s.setAttribute("phase",new THREE.Float32BufferAttribute(E,1)),s.setAttribute("mIndex",new THREE.Float32BufferAttribute(g,1));const v=new THREE.Points(s,p),[_,L,P]=o;v.position.x=_,v.position.y=L,v.position.z=P,t.add(v)}function tt(t,e){const n=`
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
  		`;function a(p){const f=new THREE.ShaderMaterial({uniforms:z(B({},e),{pointTexture:{value:new THREE.TextureLoader().load(p)}}),vertexShader:n,fragmentShader:o,blending:THREE.AdditiveBlending,depthTest:!1,transparent:!0,vertexColors:!0}),l=new THREE.BufferGeometry,d=[],E=[],g=[],m=[],v=[],_=new THREE.Color;for(let P=0;P<300;P++){const[w,H,I]=[u(25,-25),0,u(15,-150)];d.push(w),d.push(H),d.push(I),_.set(U(["#f1d4d4","#f1f6f9","#eeeeee","#f1f1e8"])),E.push(_.r,_.g,_.b),m.push(u(1e3)),v.push(u(1e3)),g.push(u(4,2))}l.setAttribute("position",new THREE.Float32BufferAttribute(d,3)),l.setAttribute("color",new THREE.Float32BufferAttribute(E,3)),l.setAttribute("size",new THREE.Float32BufferAttribute(g,1)),l.setAttribute("phase",new THREE.Float32BufferAttribute(m,1)),l.setAttribute("phaseSecondary",new THREE.Float32BufferAttribute(v,1));const L=new THREE.Points(l,f);t.add(L)}["https://assets.codepen.io/3685267/snowflake1.png","https://assets.codepen.io/3685267/snowflake2.png","https://assets.codepen.io/3685267/snowflake3.png","https://assets.codepen.io/3685267/snowflake4.png","https://assets.codepen.io/3685267/snowflake5.png"].forEach(p=>{a(p)})}function et(t,e,n){const o=`
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
  		`,R=new THREE.ShaderMaterial({uniforms:z(B({},e),{pointTexture:{value:new THREE.TextureLoader().load("https://assets.codepen.io/3685267/spark1.png")}}),vertexShader:o,fragmentShader:a,blending:THREE.AdditiveBlending,depthTest:!1,transparent:!0,vertexColors:!0}),p=new THREE.BufferGeometry,s=[],f=[],l=[],d=new THREE.Color;for(let g=0;g<n;g++){const[m,v,_]=[u(-25,25),0,u(-150,15)];s.push(m),s.push(v),s.push(_),d.set(U(["#93abd3","#f2f4c0","#9ddfd3"])),f.push(d.r,d.g,d.b),l.push(1)}p.setAttribute("position",new THREE.Float32BufferAttribute(s,3).setUsage(THREE.DynamicDrawUsage)),p.setAttribute("customColor",new THREE.Float32BufferAttribute(f,3)),p.setAttribute("size",new THREE.Float32BufferAttribute(l,1));const E=new THREE.Points(p,R);E.position.y=-8,t.add(E)}function ot(t,e,n){document.addEventListener("keydown",o=>{t.position,t.rotation}),window.addEventListener("resize",()=>{const o=window.innerWidth,a=window.innerHeight;t.aspect=o/a,t.updateProjectionMatrix(),e.setSize(o,a),n.setSize(o,a)},!1)}}),(i,r)=>(mt(),vt("div",Et,_t))}},xt=pt(bt,[["__scopeId","data-v-82ea42fd"]]);export{xt as default};
