// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,u=t.__defineGetter__,f=t.__defineSetter__,i=t.__lookupGetter__,o=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(i.call(r,n)||o.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,v="set"in a,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,a.get),v&&f&&f.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r){return r!=r}var y,v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),p=Object.prototype.toString,s=Object.prototype.hasOwnProperty,b="function"==typeof Symbol?Symbol.toStringTag:"",N=v&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,f;if(null==r)return p.call(r);t=r[b],f=b,n=null!=(u=r)&&s.call(u,f);try{r[b]=void 0}catch(n){return p.call(r)}return e=p.call(r),n?r[b]=t:delete r[b],e}:function(r){return p.call(r)},w="function"==typeof Uint32Array,d="function"==typeof Uint32Array?Uint32Array:null,h="function"==typeof Uint32Array?Uint32Array:void 0;y=function(){var r,n,t;if("function"!=typeof d)return!1;try{n=new d(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(w&&t instanceof Uint32Array||"[object Uint32Array]"===N(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?h:function(){throw new Error("not implemented")};var A,_=y,m="function"==typeof Float64Array,U="function"==typeof Float64Array?Float64Array:null,g="function"==typeof Float64Array?Float64Array:void 0;A=function(){var r,n,t;if("function"!=typeof U)return!1;try{n=new U([1,3.14,-3.14,NaN]),t=n,r=(m&&t instanceof Float64Array||"[object Float64Array]"===N(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?g:function(){throw new Error("not implemented")};var j,I=A,O="function"==typeof Uint8Array,S="function"==typeof Uint8Array?Uint8Array:null,E="function"==typeof Uint8Array?Uint8Array:void 0;j=function(){var r,n,t;if("function"!=typeof S)return!1;try{n=new S(n=[1,3.14,-3.14,256,257]),t=n,r=(O&&t instanceof Uint8Array||"[object Uint8Array]"===N(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?E:function(){throw new Error("not implemented")};var F,T=j,H="function"==typeof Uint16Array,G="function"==typeof Uint16Array?Uint16Array:null,P="function"==typeof Uint16Array?Uint16Array:void 0;F=function(){var r,n,t;if("function"!=typeof G)return!1;try{n=new G(n=[1,3.14,-3.14,65536,65537]),t=n,r=(H&&t instanceof Uint16Array||"[object Uint16Array]"===N(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?P:function(){throw new Error("not implemented")};var k,x={uint16:F,uint8:T};(k=new x.uint16(1))[0]=4660;var M=52===new x.uint8(k.buffer)[0],L=!0===M?1:0,V=new I(1),W=new _(V.buffer);function Y(r){return V[0]=r,W[L]}var q=!0===M?1:0,C=new I(1),z=new _(C.buffer);function B(r,n){return C[0]=r,z[q]=n>>>0,C[0]}var D=1023,J=Number.NEGATIVE_INFINITY,K=.6931471803691238,Q=1.9082149292705877e-10,R=1048575;function X(r){var n,t,e,u,f,i,o,a,c,y,v,p;return 0===r?J:l(r)||r<0?NaN:(f=0,(t=Y(r))<1048576&&(f-=54,t=Y(r*=0x40000000000000)),t>=2146435072?r+r:(f+=(t>>20)-D|0,f+=(a=614244+(t&=R)&1048576|0)>>20|0,o=(r=B(r,t|1072693248^a))-1,(R&2+t)<3?0===o?0===f?0:f*K+f*Q:(i=o*o*(.5-.3333333333333333*o),0===f?o-i:f*K-(i-f*Q-o)):(a=t-398458|0,c=440401-t|0,u=(v=(p=(y=o/(2+o))*y)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(v),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(v),i=e+u,(a|=c)>0?(n=.5*o*o,0===f?o-(n-y*(n+i)):f*K-(n-(y*(n+i)+f*Q)-o)):0===f?o-y*(o-i):f*K-(y*(o-i)-f*Q-o))))}var Z=Number.POSITIVE_INFINITY;function $(r){return r===Z||r===J}function rr(r){return Math.abs(r)}var nr=Math.floor,tr=Math.ceil;function er(r){return r<0?tr(r):nr(r)}function ur(r,n){var t,e,u,f;return u=(f=r*r)*f,e=f*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(f),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(f),(u=1-(t=.5*f))+(1-u-t+(f*e-r*n))}var fr=-.16666666666666632;function ir(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(fr+u*t):r-(u*(.5*n-e*t)-n-e*fr)}var or,ar,cr=!0===M?0:1,lr=new I(1),yr=new _(lr.buffer);!0===M?(or=1,ar=0):(or=0,ar=1);var vr,pr,sr={HIGH:or,LOW:ar},br=new I(1),Nr=new _(br.buffer),wr=sr.HIGH,dr=sr.LOW;function hr(r,n){return Nr[wr]=r,Nr[dr]=n,br[0]}!0===M?(vr=1,pr=0):(vr=0,pr=1);var Ar={HIGH:vr,LOW:pr},_r=new I(1),mr=new _(_r.buffer),Ur=Ar.HIGH,gr=Ar.LOW;function jr(r,n){return _r[0]=n,r[0]=mr[Ur],r[1]=mr[gr],r}function Ir(r,n){return 1===arguments.length?jr([0,0],r):jr(r,n)}var Or=[0,0];function Sr(r,n){var t,e;return Ir(Or,r),t=Or[0],t&=2147483647,e=Y(n),hr(t|=e&=2147483648,Or[1])}function Er(r,n,t,e){return l(r)||$(r)?(n[e]=r,n[e+t]=0,n):0!==r&&rr(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return Er(r,[0,0],1,0)}),"assign",Er);var Fr=[0,0],Tr=[0,0];function Hr(r,n){var t,e;return 0===n||0===r||l(r)||$(r)?r:(Er(r,Fr,1,0),n+=Fr[1],n+=function(r){var n=Y(r);return(n=(2146435072&n)>>>20)-D|0}(r=Fr[0]),n<-1074?Sr(0,r):n>1023?r<0?J:Z:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Ir(Tr,r),t=Tr[0],t&=2148532223,e*hr(t|=n+D<<20,Tr[1])))}function Gr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Pr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],kr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],xr=16777216,Mr=5.960464477539063e-8,Lr=Gr(20),Vr=Gr(20),Wr=Gr(20),Yr=Gr(20);function qr(r,n,t,e,u,f,i,o,a){var c,l,y,v,p,s,b,N,w;for(v=f,w=e[t],N=t,p=0;N>0;p++)l=Mr*w|0,Yr[p]=w-xr*l|0,w=e[N-1]+l,N-=1;if(w=Hr(w,u),w-=8*nr(.125*w),w-=b=0|w,y=0,u>0?(b+=p=Yr[t-1]>>24-u,Yr[t-1]-=p<<24-u,y=Yr[t-1]>>23-u):0===u?y=Yr[t-1]>>23:w>=.5&&(y=2),y>0){for(b+=1,c=0,p=0;p<t;p++)N=Yr[p],0===c?0!==N&&(c=1,Yr[p]=16777216-N):Yr[p]=16777215-N;if(u>0)switch(u){case 1:Yr[t-1]&=8388607;break;case 2:Yr[t-1]&=4194303}2===y&&(w=1-w,0!==c&&(w-=Hr(1,u)))}if(0===w){for(N=0,p=t-1;p>=f;p--)N|=Yr[p];if(0===N){for(s=1;0===Yr[f-s];s++);for(p=t+1;p<=t+s;p++){for(a[o+p]=Pr[i+p],l=0,N=0;N<=o;N++)l+=r[N]*a[o+(p-N)];e[p]=l}return qr(r,n,t+=s,e,u,f,i,o,a)}}if(0===w)for(t-=1,u-=24;0===Yr[t];)t-=1,u-=24;else(w=Hr(w,-u))>=xr?(l=Mr*w|0,Yr[t]=w-xr*l|0,u+=24,Yr[t+=1]=l):Yr[t]=0|w;for(l=Hr(1,u),p=t;p>=0;p--)e[p]=l*Yr[p],l*=Mr;for(p=t;p>=0;p--){for(l=0,s=0;s<=v&&s<=t-p;s++)l+=kr[s]*e[p+s];Wr[t-p]=l}for(l=0,p=t;p>=0;p--)l+=Wr[p];for(n[0]=0===y?l:-l,l=Wr[0]-l,p=1;p<=t;p++)l+=Wr[p];return n[1]=0===y?l:-l,7&b}function Cr(r,n,t,e){var u,f,i,o,a,c,l;for((f=(t-3)/24|0)<0&&(f=0),o=t-24*(f+1),c=f-(i=e-1),l=i+4,a=0;a<=l;a++)Lr[a]=c<0?0:Pr[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=i;c++)u+=r[c]*Lr[i+(a-c)];Vr[a]=u}return qr(r,n,4,Vr,o,4,f,i,Lr)}var zr=Math.round;function Br(r,n,t){var e,u,f,i,o;return f=r-1.5707963267341256*(e=zr(.6366197723675814*r)),i=6077100506506192e-26*e,o=n>>20|0,t[0]=f-i,o-(Y(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((u=f)-(f=u-(i=6077100506303966e-26*e))-i),t[0]=f-i,o-(Y(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((u=f)-(f=u-(i=20222662487111665e-37*e))-i),t[0]=f-i)),t[1]=f-t[0]-i,e}var Dr=1.5707963267341256,Jr=6077100506506192e-26,Kr=2*Jr,Qr=3*Jr,Rr=4*Jr,Xr=[0,0,0],Zr=[0,0];function $r(r,n){var t,e,u,f,i,o,a;if((u=2147483647&Y(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Br(r,u,n):u<=1073928572?r>0?(a=r-Dr,n[0]=a-Jr,n[1]=a-n[0]-Jr,1):(a=r+Dr,n[0]=a+Jr,n[1]=a-n[0]+Jr,-1):r>0?(a=r-2*Dr,n[0]=a-Kr,n[1]=a-n[0]-Kr,2):(a=r+2*Dr,n[0]=a+Kr,n[1]=a-n[0]+Kr,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Br(r,u,n):r>0?(a=r-3*Dr,n[0]=a-Qr,n[1]=a-n[0]-Qr,3):(a=r+3*Dr,n[0]=a+Qr,n[1]=a-n[0]+Qr,-3):1075388923===u?Br(r,u,n):r>0?(a=r-4*Dr,n[0]=a-Rr,n[1]=a-n[0]-Rr,4):(a=r+4*Dr,n[0]=a+Rr,n[1]=a-n[0]+Rr,-4);if(u<1094263291)return Br(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return lr[0]=r,yr[cr]}(r),a=hr(u-((e=(u>>20)-1046)<<20|0),t),i=0;i<2;i++)Xr[i]=0|a,a=16777216*(a-Xr[i]);for(Xr[2]=a,f=3;0===Xr[f-1];)f-=1;return o=Cr(Xr,Zr,e,f),r<0?(n[0]=-Zr[0],n[1]=-Zr[1],-o):(n[0]=Zr[0],n[1]=Zr[1],o)}var rn=[0,0];function nn(r){var n;if(n=Y(r),(n&=2147483647)<=1072243195)return n<1044381696?1:ur(r,0);if(n>=2146435072)return NaN;switch(3&$r(r,rn)){case 0:return ur(rn[0],rn[1]);case 1:return-ir(rn[0],rn[1]);case 2:return-ur(rn[0],rn[1]);default:return ir(rn[0],rn[1])}}var tn=[0,0];function en(r){var n;if(n=Y(r),(n&=2147483647)<=1072243195)return n<1045430272?r:ir(r,0);if(n>=2146435072)return NaN;switch(3&$r(r,tn)){case 0:return ir(tn[0],tn[1]);case 1:return ur(tn[0],tn[1]);case 2:return-ir(tn[0],tn[1]);default:return-ur(tn[0],tn[1])}}var un=3.141592653589793,fn=1.4616321449683622,on=1.4616321449683622;function an(r){var n,t,e,u,f,i,o,a,c,y,v,p,s;if(l(r)||$(r))return r;if(0===r)return Z;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-X(r);if(n){if(r>=4503599627370496)return Z;if(c=function(r){var n,t;return l(r)||$(r)?NaN:0===(n=rr(t=r%2))||1===n?Sr(0,t):n<.25?en(un*t):n<.75?Sr(nn(un*(n=.5-n)),t):n<1.25?(t=Sr(1,t)-t,en(un*t)):n<1.75?-Sr(nn(un*(n-=1.5)),t):(t-=Sr(2,t),en(un*t))}(r),0===c)return Z;t=X(un/rr(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(s=-X(r),r>=fn-1+.27?(v=1-r,e=0):r>=fn-1-.27?(v=r-(on-1),e=1):(v=r,e=2)):(s=0,r>=fn+.27?(v=2-r,e=0):r>=fn-.27?(v=r-on,e=1):(v=r-1,e=2)),e){case 0:i=.07721566490153287+(p=v*v)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(p),f=p*(.3224670334241136+p*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(p)),s+=(o=v*i+f)-.5*v;break;case 1:i=.48383612272381005+(y=(p=v*v)*v)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(y),f=y*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(y)-.1475877229945939,u=.06462494023913339+y*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(y),s+=(o=p*i-(-3638676997039505e-33-y*(f+v*u)))-.12148629053584961;break;case 2:i=v*(v*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(v)-.07721566490153287),f=1+v*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(v),s+=-.5*v+i/f}else if(r<8)switch(o=(v=r-(e=er(r)))*(v*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(v)-.07721566490153287),a=1+v*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(v),s=.5*v+o/a,p=1,e){case 7:p*=v+6;case 6:p*=v+5;case 5:p*=v+4;case 4:p*=v+3;case 3:s+=X(p*=v+2)}else r<0x400000000000000?(c=X(r),y=.4189385332046727+(p=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(v=p*p),s=(r-.5)*(c-1)+y):s=r*(X(r)-1);return n&&(s=t-s),s}var cn=1.4426950408889634,ln=1/(1<<28);function yn(r){var n;return l(r)||r===Z?r:r===J?0:r>709.782712893384?Z:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<ln?1+r:function(r,n,t){var e,u,f,i;return Hr(1-(n-(e=r-n)*(f=e-(u=e*e)*(0===(i=u)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-f)-r),t)}(r-.6931471803691238*(n=er(r<0?cn*r-.5:cn*r+.5)),1.9082149292705877e-10*n,n)}function vn(r){return nr(r)===r}function pn(r){return 0===r&&1/r===J}function sn(r){return vn(r/2)}function bn(r){return sn(r>0?r-1:r+1)}var Nn=Math.sqrt,wn=!0===M?0:1,dn=new I(1),hn=new _(dn.buffer);function An(r,n){return dn[0]=r,hn[wn]=n>>>0,dn[0]}function _n(r){return 0|r}var mn=1048576,Un=[1,1.5],gn=[0,.5849624872207642],jn=[0,1.350039202129749e-8],In=2147483647,On=1048575,Sn=1048576,En=2147483647,Fn=1083179008,Tn=1e300,Hn=1e-300,Gn=[0,0],Pn=[0,0];function kn(r,n){var t,e,u,f,i,o,a,c,y,v,p,s,b,N;if(l(r)||l(n))return NaN;if(Ir(Gn,n),i=Gn[0],0===Gn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Nn(r);if(-.5===n)return 1/Nn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if($(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:rr(r)<1==(n===Z)?0:Z}(r,n)}if(Ir(Gn,r),f=Gn[0],0===Gn[1]){if(0===f)return function(r,n){return n===J?Z:n===Z?0:n>0?bn(n)?r:0:bn(n)?Sr(Z,r):Z}(r,n);if(1===r)return 1;if(-1===r&&bn(n))return-1;if($(r))return r===J?kn(-0,-n):n<0?0:Z}if(r<0&&!1===vn(n))return(r-r)/(r-r);if(u=rr(r),t=f&En|0,e=i&En|0,a=i>>>31|0,o=(o=f>>>31|0)&&bn(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&Y(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?o*Tn*Tn:o*Hn*Hn;if(t>1072693248)return 0===a?o*Tn*Tn:o*Hn*Hn;p=function(r,n){var t,e,u,f,i,o;return t=(i=1.9259629911266175e-8*(u=n-1)-u*u*(0===(o=u)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((e=An(e=(f=1.4426950216293335*u)+i,0))-f),r[0]=e,r[1]=t,r}(Pn,u)}else p=function(r,n,t){var e,u,f,i,o,a,c,l,y,v,p,s,b,N,w,d,h,A,_,m,U;return A=0,t<mn&&(A-=53,t=Y(n*=9007199254740992)),A+=(t>>20)-D|0,t=1072693248|(_=1048575&t|0),_<=235662?m=0:_<767610?m=1:(m=0,A+=1,t-=mn),i=An(u=(d=(n=B(n,t))-(c=Un[m]))*(h=1/(n+c)),0),e=524288+(t>>1|536870912),a=B(0,e+=m<<18),w=(f=u*u)*f*(0===(U=f)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=An(a=3+(f=i*i)+(w+=(o=h*(d-i*a-i*(n-(a-c))))*(i+u)),0),b=(p=-7.028461650952758e-9*(y=An(y=(d=i*a)+(h=o*a+(w-(a-3-f))*u),0))+.9617966939259756*(h-(y-d))+jn[m])-((s=An(s=(v=.9617967009544373*y)+p+(l=gn[m])+(N=A),0))-N-l-v),r[0]=s,r[1]=b,r}(Pn,u,t);if(v=(n-(c=An(n,0)))*p[0]+n*p[1],y=c*p[0],Ir(Gn,s=v+y),b=_n(Gn[0]),N=_n(Gn[1]),b>=Fn){if(0!=(b-Fn|N))return o*Tn*Tn;if(v+8008566259537294e-32>s-y)return o*Tn*Tn}else if((b&En)>=1083231232){if(0!=(b-3230714880|N))return o*Hn*Hn;if(v<=s-y)return o*Hn*Hn}return s=function(r,n,t){var e,u,f,i,o,a,c,l,y,v;return y=((l=r&In|0)>>20)-D|0,c=0,l>1071644672&&(u=B(0,((c=r+(Sn>>y+1)>>>0)&~(On>>(y=((c&In)>>20)-D|0)))>>>0),c=(c&On|Sn)>>20-y>>>0,r<0&&(c=-c),n-=u),r=_n(r=Y(a=1-((a=(f=.6931471824645996*(u=An(u=t+n,0)))+(i=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(v=u)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((o=i-(a-f))+a*o)-a))),(r+=c<<20>>>0)>>20<=0?Hr(a,c):B(a,r)}(b,y,v),o*s}function xn(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=yn(r),2.5066282746310007*(t=r>143.01608?(e=kn(r,.5*r-.25))*(e/t):kn(r,r-.5)/t)*n}function Mn(r,n){return n/((1+.5772156649015329*r)*r)}var Ln=.6931471803691238,Vn=1.9082149292705877e-10;function Wn(r){return 0===r&&1/r===Z}function Yn(r,n){var t,e,u,f;if(2===(t=arguments.length))return l(r)||l(n)?NaN:r===Z||n===Z?Z:r===n&&0===r?Wn(r)?r:n:r>n?r:n;for(e=J,f=0;f<t;f++){if(l(u=arguments[f])||u===Z)return u;(u>e||u===e&&0===u&&Wn(u))&&(e=u)}return e}function qn(r,n){var t,e,u,f;if(2===(t=arguments.length))return l(r)||l(n)?NaN:r===J||n===J?J:r===n&&0===r?pn(r)?r:n:r<n?r:n;for(e=Z,f=0;f<t;f++){if(l(u=arguments[f])||u===J)return u;(u<e||u===e&&0===u&&pn(u))&&(e=u)}return e}var Cn=709.782712893384,zn=-708.3964185322641,Bn=10.900511;function Dn(r,n){var t,e,u,f,i,o,a,c,y,v;return a=(n-r-Bn+.5)/(u=r+Bn-.5),r<1?n<=zn?yn(r*X(n)-n-an(r)):kn(n,r)*yn(-n)/function(r){var n,t,e,u;if(vn(r)&&r<0||r===J||l(r))return NaN;if(0===r)return pn(r)?J:Z;if(r>171.61447887182297)return Z;if(r<-170.5674972726612)return 0;if((t=rr(r))>33)return r>=0?xn(r):(n=0==(1&(e=nr(t)))?-1:1,(u=t-e)>.5&&(u=t-(e+=1)),u=t*en(un*u),n*un/(rr(u)*xn(t)));for(u=1;r>=3;)u*=r-=1;for(;r<0;){if(r>-1e-9)return Mn(r,u);u/=r,r+=1}for(;r<2;){if(r<1e-9)return Mn(r,u);u/=r,r+=1}return 2===r?u:u*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(r-=2)}(r):(rr(a*a*r)<=100&&r>150?(t=r*(function(r){var n,t,e,u,f,i,o,a,c,y;if(r<-1||l(r))return NaN;if(-1===r)return J;if(r===Z)return r;if(0===r)return r;if(y=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(y=0,u=r,t=1)}return 0!==y&&(e<9007199254740992?(f=(y=((t=Y(c=1+r))>>20)-D)>0?1-(c-r):r-(c-1),f/=c):(y=((t=Y(c=r))>>20)-D,f=0),(t&=1048575)<434334?c=B(c,1072693248|t):(y+=1,c=B(c,1071644672|t),t=1048576-t>>2),u=c-1),n=.5*u*u,0===t?0===u?y*Ln+(f+=y*Vn):y*Ln-((a=n*(1-.6666666666666666*u))-(y*Vn+f)-u):(a=(o=(i=u/(2+u))*i)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(o),0===y?u-(n-i*(n+a)):y*Ln-(n-(i*(n+a)+(y*Vn+f))-u))}(a)-a)+-10.400511*n/u,t=yn(t)):qn(f=r*X(n/u),i=r-n)<=zn||Yn(f,i)>=Cn?(e=i/r,qn(f,i)/2>zn&&Yn(f,i)/2<Cn?t=(o=kn(n/u,r/2)*yn(i/2))*o:qn(f,i)/4>zn&&Yn(f,i)/4<Cn&&n>r?(t=(o=kn(n/u,r/4)*yn(i/4))*o,t*=t):t=e>zn&&e<Cn?kn(n*yn(e)/u,r):yn(f+i)):t=kn(n/u,r)*yn(i),t*=Nn(u/2.718281828459045)/(0===(c=r)?1/0:((c<0?-c:c)<=1?(y=709811.662581658+c*(679979.8474157227+c*(293136.7857211597+c*(74887.54032914672+c*(12555.290582413863+c*(1443.4299244417066+c*(115.24194596137347+c*(6.309239205732627+c*(.22668404630224365+c*(.004826466289237662+4624429436045379e-20*c))))))))),v=0+c*(362880+c*(1026576+c*(1172700+c*(723680+c*(269325+c*(63273+c*(9450+c*(870+c*(45+1*c)))))))))):(y=4624429436045379e-20+(c=1/c)*(.004826466289237662+c*(.22668404630224365+c*(6.309239205732627+c*(115.24194596137347+c*(1443.4299244417066+c*(12555.290582413863+c*(74887.54032914672+c*(293136.7857211597+c*(679979.8474157227+709811.662581658*c))))))))),v=1+c*(45+c*(870+c*(9450+c*(63273+c*(269325+c*(723680+c*(1172700+c*(1026576+c*(362880+0*c)))))))))),y/v)))}function Jn(r,n){var t;return r<=0||n<0?NaN:0===n?r>1?0:1===r?1:Z:(t=Dn(r,n),n<1&&17976931348623157e292*n<t?Z:(0===t?t=yn(t=r*X(n)-n-an(r)-X(n)):t/=n,t))}function Kn(r,n,t){return l(r)||l(n)||l(t)||n<0||t<=0?NaN:r<0||r===Z?J:0===n?0===r?Z:J:X(Jn(n,r*t))+X(t)}function Qn(r){return function(){return r}}function Rn(r){return l(r)?Qn(NaN):function(n){return l(n)?NaN:n===r?Z:J}}return c((function(r,n){return l(r)||l(n)?NaN:r===n?Z:J}),"factory",Rn),c(Kn,"factory",(function(r,n){return l(r)||l(n)||r<0||n<=0?Qn(NaN):0===r?Rn(0):function(t){return l(t)?NaN:t<0||t===Z?J:X(Jn(r,t*n))+X(n)}})),Kn},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).logpdf=n();
//# sourceMappingURL=index.js.map
