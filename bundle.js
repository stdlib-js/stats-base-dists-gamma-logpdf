// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).logpdf=n()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,e=Object.prototype,u=e.toString,f=e.__defineGetter__,i=e.__defineSetter__,o=e.__lookupGetter__,a=e.__lookupSetter__;var c=t,v=function(r,n,t){var c,v,l,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((v="value"in t)&&(o.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),l="get"in t,y="set"in t,v&&(l||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&f&&f.call(r,n,t.get),y&&i&&i.call(r,n,t.set),r},l=n()?c:v;var y=function(r,n,t){l(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})};var p=function(r){return r!=r};var s=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var b=function(){return s&&"symbol"==typeof Symbol.toStringTag},N=Object.prototype.toString,w=N;var d=function(r){return w.call(r)},h=Object.prototype.hasOwnProperty;var A=function(r,n){return null!=r&&h.call(r,n)},_="function"==typeof Symbol?Symbol.toStringTag:"",m=A,U=_,g=N;var j=d,I=function(r){var n,t,e;if(null==r)return g.call(r);t=r[U],n=m(r,U);try{r[U]=void 0}catch(n){return g.call(r)}return e=g.call(r),n?r[U]=t:delete r[U],e},O=b()?I:j,S=O,E="function"==typeof Uint32Array;var F="function"==typeof Uint32Array?Uint32Array:null,T=function(r){return E&&r instanceof Uint32Array||"[object Uint32Array]"===S(r)},H=F;var G=function(){var r,n;if("function"!=typeof H)return!1;try{n=new H(n=[1,3.14,-3.14,4294967296,4294967297]),r=T(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var P="function"==typeof Uint32Array?Uint32Array:void 0,k=function(){throw new Error("not implemented")},x=G()?P:k,M=O,L="function"==typeof Float64Array;var V="function"==typeof Float64Array?Float64Array:null,W=function(r){return L&&r instanceof Float64Array||"[object Float64Array]"===M(r)},Y=V;var q=function(){var r,n;if("function"!=typeof Y)return!1;try{n=new Y([1,3.14,-3.14,NaN]),r=W(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var C="function"==typeof Float64Array?Float64Array:void 0,z=function(){throw new Error("not implemented")},B=q()?C:z,D=O,J="function"==typeof Uint8Array;var K="function"==typeof Uint8Array?Uint8Array:null,Q=function(r){return J&&r instanceof Uint8Array||"[object Uint8Array]"===D(r)},R=K;var X=function(){var r,n;if("function"!=typeof R)return!1;try{n=new R(n=[1,3.14,-3.14,256,257]),r=Q(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var Z="function"==typeof Uint8Array?Uint8Array:void 0,$=function(){throw new Error("not implemented")},rr=X()?Z:$,nr=O,tr="function"==typeof Uint16Array;var er="function"==typeof Uint16Array?Uint16Array:null,ur=function(r){return tr&&r instanceof Uint16Array||"[object Uint16Array]"===nr(r)},fr=er;var ir=function(){var r,n;if("function"!=typeof fr)return!1;try{n=new fr(n=[1,3.14,-3.14,65536,65537]),r=ur(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var or,ar="function"==typeof Uint16Array?Uint16Array:void 0,cr=function(){throw new Error("not implemented")},vr={uint16:ir()?ar:cr,uint8:rr};(or=new vr.uint16(1))[0]=4660;var lr=52===new vr.uint8(or.buffer)[0],yr=x,pr=!0===lr?1:0,sr=new B(1),br=new yr(sr.buffer);var Nr=function(r){return sr[0]=r,br[pr]},wr=x,dr=!0===lr?1:0,hr=new B(1),Ar=new wr(hr.buffer);var _r=function(r,n){return hr[0]=r,Ar[dr]=n>>>0,hr[0]},mr=_r,Ur=Number.NEGATIVE_INFINITY;var gr=Nr,jr=mr,Ir=p,Or=Ur,Sr=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},Er=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},Fr=.6931471803691238,Tr=1.9082149292705877e-10,Hr=1048575;var Gr=function(r){var n,t,e,u,f,i,o,a,c,v,l;return 0===r?Or:Ir(r)||r<0?NaN:(u=0,(t=gr(r))<1048576&&(u-=54,t=gr(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-1023|0,u+=(o=(t&=Hr)+614244&1048576|0)>>20|0,i=(r=jr(r,t|1072693248^o))-1,(Hr&2+t)<3?0===i?0===u?0:u*Fr+u*Tr:(f=i*i*(.5-.3333333333333333*i),0===u?i-f:u*Fr-(f-u*Tr-i)):(o=t-398458|0,a=440401-t|0,e=(v=(l=(c=i/(2+i))*c)*l)*Sr(v),f=l*Er(v)+e,(o|=a)>0?(n=.5*i*i,0===u?i-(n-c*(n+f)):u*Fr-(n-(c*(n+f)+u*Tr)-i)):0===u?i-c*(i-f):u*Fr-(c*(i-f)-u*Tr-i))))},Pr=Number.POSITIVE_INFINITY,kr=Pr,xr=Ur;var Mr=function(r){return r===kr||r===xr};var Lr=function(r){return Math.abs(r)},Vr=Math.floor,Wr=Math.ceil,Yr=Vr,qr=Wr;var Cr=function(r){return r<0?qr(r):Yr(r)};var zr=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},Br=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7};var Dr=function(r,n){var t,e,u,f;return u=(f=r*r)*f,e=f*zr(f),e+=u*u*Br(f),(u=1-(t=.5*f))+(1-u-t+(f*e-r*n))},Jr=-.16666666666666632;var Kr=function(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(Jr+u*t):r-(u*(.5*n-e*t)-n-e*Jr)},Qr=x,Rr=!0===lr?0:1,Xr=new B(1),Zr=new Qr(Xr.buffer);var $r,rn,nn=function(r){return Xr[0]=r,Zr[Rr]};!0===lr?($r=1,rn=0):($r=0,rn=1);var tn=x,en={HIGH:$r,LOW:rn},un=new B(1),fn=new tn(un.buffer),on=en.HIGH,an=en.LOW;var cn,vn,ln=function(r,n){return fn[on]=r,fn[an]=n,un[0]},yn=ln;!0===lr?(cn=1,vn=0):(cn=0,vn=1);var pn=x,sn={HIGH:cn,LOW:vn},bn=new B(1),Nn=new pn(bn.buffer),wn=sn.HIGH,dn=sn.LOW;var hn=function(r,n){return bn[0]=n,r[0]=Nn[wn],r[1]=Nn[dn],r};var An=function(r,n){return 1===arguments.length?hn([0,0],r):hn(r,n)},_n=An,mn=_n,Un=Nr,gn=yn,jn=[0,0];var In=function(r,n){var t,e;return mn(jn,r),t=jn[0],t&=2147483647,e=Un(n),gn(t|=e&=2147483648,jn[1])},On=Mr,Sn=p,En=Lr;var Fn=function(r,n){return Sn(n)||On(n)?(r[0]=n,r[1]=0,r):0!==n&&En(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var Tn=function(r,n){return 1===arguments.length?Fn([0,0],r):Fn(r,n)},Hn=Nr;var Gn=function(r){var n=Hn(r);return(n=(2146435072&n)>>>20)-1023|0},Pn=Pr,kn=Ur,xn=p,Mn=Mr,Ln=In,Vn=Tn,Wn=Gn,Yn=_n,qn=yn,Cn=[0,0],zn=[0,0];var Bn=function(r,n){var t,e;return 0===n||0===r||xn(r)||Mn(r)?r:(Vn(Cn,r),n+=Cn[1],(n+=Wn(r=Cn[0]))<-1074?Ln(0,r):n>1023?r<0?kn:Pn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Yn(zn,r),t=zn[0],t&=2148532223,e*qn(t|=n+1023<<20,zn[1])))},Dn=Bn;var Jn=function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t};var Kn=Vr,Qn=Dn,Rn=function(r){return Jn(0,r)},Xn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Zn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],$n=16777216,rt=5.960464477539063e-8,nt=Rn(20),tt=Rn(20),et=Rn(20),ut=Rn(20);function ft(r,n,t,e,u,f,i,o,a){var c,v,l,y,p,s,b,N,w;for(y=f,w=e[t],N=t,p=0;N>0;p++)v=rt*w|0,ut[p]=w-$n*v|0,w=e[N-1]+v,N-=1;if(w=Qn(w,u),w-=8*Kn(.125*w),w-=b=0|w,l=0,u>0?(b+=p=ut[t-1]>>24-u,ut[t-1]-=p<<24-u,l=ut[t-1]>>23-u):0===u?l=ut[t-1]>>23:w>=.5&&(l=2),l>0){for(b+=1,c=0,p=0;p<t;p++)N=ut[p],0===c?0!==N&&(c=1,ut[p]=16777216-N):ut[p]=16777215-N;if(u>0)switch(u){case 1:ut[t-1]&=8388607;break;case 2:ut[t-1]&=4194303}2===l&&(w=1-w,0!==c&&(w-=Qn(1,u)))}if(0===w){for(N=0,p=t-1;p>=f;p--)N|=ut[p];if(0===N){for(s=1;0===ut[f-s];s++);for(p=t+1;p<=t+s;p++){for(a[o+p]=Xn[i+p],v=0,N=0;N<=o;N++)v+=r[N]*a[o+(p-N)];e[p]=v}return ft(r,n,t+=s,e,u,f,i,o,a)}}if(0===w)for(t-=1,u-=24;0===ut[t];)t-=1,u-=24;else(w=Qn(w,-u))>=$n?(v=rt*w|0,ut[t]=w-$n*v|0,u+=24,ut[t+=1]=v):ut[t]=0|w;for(v=Qn(1,u),p=t;p>=0;p--)e[p]=v*ut[p],v*=rt;for(p=t;p>=0;p--){for(v=0,s=0;s<=y&&s<=t-p;s++)v+=Zn[s]*e[p+s];et[t-p]=v}for(v=0,p=t;p>=0;p--)v+=et[p];for(n[0]=0===l?v:-v,v=et[0]-v,p=1;p<=t;p++)v+=et[p];return n[1]=0===l?v:-v,7&b}var it=function(r,n,t,e){var u,f,i,o,a,c,v;for(4,(f=(t-3)/24|0)<0&&(f=0),o=t-24*(f+1),c=f-(i=e-1),v=i+4,a=0;a<=v;a++)nt[a]=c<0?0:Xn[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=i;c++)u+=r[c]*nt[i+(a-c)];tt[a]=u}return 4,ft(r,n,4,tt,o,4,f,i,nt)},ot=Math.round,at=Nr;var ct=Nr,vt=nn,lt=yn,yt=it,pt=function(r,n,t){var e,u,f,i,o;return f=r-1.5707963267341256*(e=ot(.6366197723675814*r)),i=6077100506506192e-26*e,o=n>>20|0,t[0]=f-i,o-(at(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((u=f)-(f=u-(i=6077100506303966e-26*e))-i),t[0]=f-i,o-(at(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((u=f)-(f=u-(i=20222662487111665e-37*e))-i),t[0]=f-i)),t[1]=f-t[0]-i,e},st=1.5707963267341256,bt=6077100506506192e-26,Nt=2*bt,wt=3*bt,dt=4*bt,ht=[0,0,0],At=[0,0];var _t=function(r,n){var t,e,u,f,i,o,a;if((u=2147483647&ct(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?pt(r,u,n):u<=1073928572?r>0?(a=r-st,n[0]=a-bt,n[1]=a-n[0]-bt,1):(a=r+st,n[0]=a+bt,n[1]=a-n[0]+bt,-1):r>0?(a=r-2*st,n[0]=a-Nt,n[1]=a-n[0]-Nt,2):(a=r+2*st,n[0]=a+Nt,n[1]=a-n[0]+Nt,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?pt(r,u,n):r>0?(a=r-3*st,n[0]=a-wt,n[1]=a-n[0]-wt,3):(a=r+3*st,n[0]=a+wt,n[1]=a-n[0]+wt,-3):1075388923===u?pt(r,u,n):r>0?(a=r-4*st,n[0]=a-dt,n[1]=a-n[0]-dt,4):(a=r+4*st,n[0]=a+dt,n[1]=a-n[0]+dt,-4);if(u<1094263291)return pt(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=vt(r),a=lt(u-((e=(u>>20)-1046)<<20|0),t),i=0;i<2;i++)ht[i]=0|a,a=16777216*(a-ht[i]);for(ht[2]=a,f=3;0===ht[f-1];)f-=1;return o=yt(ht,At,e,f),r<0?(n[0]=-At[0],n[1]=-At[1],-o):(n[0]=At[0],n[1]=At[1],o)},mt=Nr,Ut=Dr,gt=Kr,jt=_t,It=[0,0];var Ot=Nr,St=Dr,Et=Kr,Ft=_t,Tt=[0,0];var Ht=function(r){var n;if(n=Ot(r),(n&=2147483647)<=1072243195)return n<1045430272?r:Et(r,0);if(n>=2146435072)return NaN;switch(3&Ft(r,Tt)){case 0:return Et(Tt[0],Tt[1]);case 1:return St(Tt[0],Tt[1]);case 2:return-Et(Tt[0],Tt[1]);default:return-St(Tt[0],Tt[1])}},Gt=3.141592653589793,Pt=p,kt=Mr,xt=function(r){var n;if(n=mt(r),(n&=2147483647)<=1072243195)return n<1044381696?1:Ut(r,0);if(n>=2146435072)return NaN;switch(3&jt(r,It)){case 0:return Ut(It[0],It[1]);case 1:return-gt(It[0],It[1]);case 2:return-Ut(It[0],It[1]);default:return gt(It[0],It[1])}},Mt=Ht,Lt=Lr,Vt=In,Wt=Gt;var Yt=p,qt=Mr,Ct=Lr,zt=Gr,Bt=Cr,Dt=function(r){var n,t;return Pt(r)||kt(r)?NaN:0===(n=Lt(t=r%2))||1===n?Vt(0,t):n<.25?Mt(Wt*t):n<.75?Vt(xt(Wt*(n=.5-n)),t):n<1.25?(t=Vt(1,t)-t,Mt(Wt*t)):n<1.75?-Vt(xt(Wt*(n-=1.5)),t):(t-=Vt(2,t),Mt(Wt*t))},Jt=Pr,Kt=function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))},Qt=function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))},Rt=function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))},Xt=function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))},Zt=function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965},$t=function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)},re=function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144},ne=function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))},te=function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))},ee=function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)},ue=1.4616321449683622,fe=1.4616321449683622;var ie=function(r){var n,t,e,u,f,i,o,a;if(Yt(r)||qt(r))return r;if(0===r)return Jt;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-zt(r);if(n){if(r>=4503599627370496)return Jt;if(0===(u=Dt(r)))return Jt;t=zt(3.141592653589793/Ct(u*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(a=-zt(r),r>=ue-1+.27?(i=1-r,e=0):r>=ue-1-.27?(i=r-(fe-1),e=1):(i=r,e=2)):(a=0,r>=ue+.27?(i=2-r,e=0):r>=ue-.27?(i=r-fe,e=1):(i=r-1,e=2)),e){case 0:a+=i*(.07721566490153287+(o=i*i)*Kt(o))+o*(.3224670334241136+o*Qt(o))-.5*i;break;case 1:a+=-.12148629053584961+((o=i*i)*(.48383612272381005+(f=o*i)*Zt(f))-(-3638676997039505e-33-f*(f*$t(f)-.1475877229945939+i*(.06462494023913339+f*re(f)))));break;case 2:a+=-.5*i+i*(i*ne(i)-.07721566490153287)/(1+i*te(i))}else if(r<8)switch(a=.5*(i=r-(e=Bt(r)))+i*(i*Xt(i)-.07721566490153287)/(1+i*Rt(i)),o=1,e){case 7:o*=i+6;case 6:o*=i+5;case 5:o*=i+4;case 4:o*=i+3;case 3:a+=zt(o*=i+2)}else a=r<0x400000000000000?(r-.5)*((u=zt(r))-1)+(f=.4189385332046727+(o=1/r)*ee(i=o*o)):r*(zt(r)-1);return n&&(a=t-a),a};var oe=Dn,ae=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var ce=p,ve=Cr,le=Ur,ye=Pr,pe=function(r,n,t){var e,u,f;return f=(e=r-n)-(u=e*e)*ae(u),oe(1-(n-e*f/(2-f)-r),t)},se=1.4426950408889634,be=1/(1<<28);var Ne=function(r){var n;return ce(r)||r===ye?r:r===le?0:r>709.782712893384?ye:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<be?1+r:(n=ve(r<0?se*r-.5:se*r+.5),pe(r-.6931471803691238*n,1.9082149292705877e-10*n,n))};var we=function(r){var n,t;return 0===r?1/0:((r<0?-r:r)<=1?(n=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+4624429436045379e-20*r))))))))),t=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+1*r)))))))))):(n=4624429436045379e-20+(r=1/r)*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+709811.662581658*r))))))))),t=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+0*r)))))))))),n/t)},de=Vr;var he=function(r){return de(r)===r},Ae=Ur;var _e=function(r){return 0===r&&1/r===Ae},me=he;var Ue=function(r){return me(r/2)};var ge=function(r){return Ue(r>0?r-1:r+1)},je=Math.sqrt,Ie=x,Oe=!0===lr?0:1,Se=new B(1),Ee=new Ie(Se.buffer);var Fe=function(r,n){return Se[0]=r,Ee[Oe]=n>>>0,Se[0]};var Te=function(r){return 0|r},He=ge,Ge=In,Pe=Ur,ke=Pr;var xe=Nr;var Me=Lr,Le=Pr;var Ve=Nr,We=Fe,Ye=mr,qe=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},Ce=1048576,ze=[1,1.5],Be=[0,.5849624872207642],De=[0,1.350039202129749e-8];var Je=Fe,Ke=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var Qe=Nr,Re=mr,Xe=Fe,Ze=Te,$e=Dn,ru=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)},nu=2147483647,tu=1048575,eu=1048576;var uu=p,fu=ge,iu=Mr,ou=he,au=je,cu=Lr,vu=_n,lu=Fe,yu=Te,pu=Ur,su=Pr,bu=function(r,n){return n===Pe?ke:n===ke?0:n>0?He(n)?r:0:He(n)?Ge(ke,r):ke},Nu=function(r,n){return(2147483647&xe(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},wu=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Me(r)<1==(n===Le)?0:Le},du=function(r,n,t){var e,u,f,i,o,a,c,v,l,y,p,s,b,N,w,d,h,A,_,m;return A=0,t<Ce&&(A-=53,t=Ve(n*=9007199254740992)),A+=(t>>20)-1023|0,t=1072693248|(_=1048575&t|0),_<=235662?m=0:_<767610?m=1:(m=0,A+=1,t-=Ce),e=524288+(t>>1|536870912),o=(h=1/((n=Ye(n,t))+(c=ze[m])))*((d=n-c)-(i=We(u=d*h,0))*(a=Ye(0,e+=m<<18))-i*(n-(a-c))),w=(f=u*u)*f*qe(f),a=We(a=3+(f=i*i)+(w+=o*(i+u)),0),b=(p=-7.028461650952758e-9*(l=We(l=(d=i*a)+(h=o*a+(w-(a-3-f))*u),0))+.9617966939259756*(h-(l-d))+De[m])-((s=We(s=(y=.9617967009544373*l)+p+(v=Be[m])+(N=A),0))-N-v-y),r[0]=s,r[1]=b,r},hu=function(r,n){var t,e,u,f,i;return t=(i=1.9259629911266175e-8*(u=n-1)-1.4426950408889634*(u*u*Ke(u)))-((e=Je(e=(f=1.4426950216293335*u)+i,0))-f),r[0]=e,r[1]=t,r},Au=function(r,n,t){var e,u,f,i,o,a,c,v,l;return l=((v=r&nu|0)>>20)-1023|0,c=0,v>1071644672&&(u=Re(0,((c=r+(eu>>l+1)>>>0)&~(tu>>(l=((c&nu)>>20)-1023|0)))>>>0),c=(c&tu|eu)>>20-l>>>0,r<0&&(c=-c),n-=u),o=(i=.6931471805599453*(t-((u=Xe(u=t+n,0))-n))+-1.904654299957768e-9*u)-((a=(f=.6931471824645996*u)+i)-f),e=a-(u=a*a)*ru(u),r=Qe(a=1-(a*e/(e-2)-(o+a*o)-a)),r=Ze(r),a=(r+=c<<20>>>0)>>20<=0?$e(a,c):Re(a,r)},_u=2147483647,mu=1083179008,Uu=1e300,gu=1e-300,ju=[0,0],Iu=[0,0];var Ou=function r(n,t){var e,u,f,i,o,a,c,v,l,y,p,s,b,N;if(uu(n)||uu(t))return NaN;if(vu(ju,t),o=ju[0],0===ju[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return au(n);if(-.5===t)return 1/au(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(iu(t))return wu(n,t)}if(vu(ju,n),i=ju[0],0===ju[1]){if(0===i)return bu(n,t);if(1===n)return 1;if(-1===n&&fu(t))return-1;if(iu(n))return n===pu?r(-0,-t):t<0?0:su}if(n<0&&!1===ou(t))return(n-n)/(n-n);if(f=cu(n),e=i&_u|0,u=o&_u|0,c=o>>>31|0,a=(a=i>>>31|0)&&fu(t)?-1:1,u>1105199104){if(u>1139802112)return Nu(n,t);if(e<1072693247)return 1===c?a*Uu*Uu:a*gu*gu;if(e>1072693248)return 0===c?a*Uu*Uu:a*gu*gu;p=hu(Iu,f)}else p=du(Iu,f,e);if(y=(t-(v=lu(t,0)))*p[0]+t*p[1],l=v*p[0],vu(ju,s=y+l),b=yu(ju[0]),N=yu(ju[1]),b>=mu){if(0!=(b-mu|N))return a*Uu*Uu;if(y+8008566259537294e-32>s-l)return a*Uu*Uu}else if((b&_u)>=1083231232){if(0!=(b-3230714880|N))return a*gu*gu;if(y<=s-l)return a*gu*gu}return a*(s=Au(b,l,y))};var Su=Ou,Eu=Ne,Fu=function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))};var Tu=p,Hu=he,Gu=_e,Pu=Lr,ku=Vr,xu=Ht,Mu=Pr,Lu=Ur,Vu=Gt,Wu=function(r){var n,t,e;return n=1+(n=1/r)*Fu(n),t=Eu(r),2.5066282746310007*(t=r>143.01608?(e=Su(r,.5*r-.25))*(e/t):Su(r,r-.5)/t)*n},Yu=function(r,n){return n/((1+.5772156649015329*r)*r)},qu=function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)};var Cu=p,zu=Nr,Bu=mr,Du=Pr,Ju=Ur,Ku=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))},Qu=.6931471803691238,Ru=1.9082149292705877e-10;var Xu=Pr;var Zu=function(r){return 0===r&&1/r===Xu},$u=p,rf=Ur,nf=Pr;var tf=function(r,n){var t,e,u,f;if(2===(t=arguments.length))return $u(r)||$u(n)?NaN:r===nf||n===nf?nf:r===n&&0===r?Zu(r)?r:n:r>n?r:n;for(e=rf,f=0;f<t;f++){if($u(u=arguments[f])||u===nf)return u;(u>e||u===e&&0===u&&Zu(u))&&(e=u)}return e},ef=_e,uf=p,ff=Ur,of=Pr;var af=function(r,n){var t,e,u,f;if(2===(t=arguments.length))return uf(r)||uf(n)?NaN:r===ff||n===ff?ff:r===n&&0===r?ef(r)?r:n:r<n?r:n;for(e=of,f=0;f<t;f++){if(uf(u=arguments[f])||u===ff)return u;(u<e||u===e&&0===u&&ef(u))&&(e=u)}return e},cf=we,vf=ie,lf=function(r){var n,t,e,u;if(Hu(r)&&r<0||r===Lu||Tu(r))return NaN;if(0===r)return Gu(r)?Lu:Mu;if(r>171.61447887182297)return Mu;if(r<-170.5674972726612)return 0;if((t=Pu(r))>33)return r>=0?Wu(r):(n=0==(1&(e=ku(t)))?-1:1,(u=t-e)>.5&&(u=t-(e+=1)),u=t*xu(Vu*u),n*Vu/(Pu(u)*Wu(t)));for(u=1;r>=3;)u*=r-=1;for(;r<0;){if(r>-1e-9)return Yu(r,u);u/=r,r+=1}for(;r<2;){if(r<1e-9)return Yu(r,u);u/=r,r+=1}return 2===r?u:u*qu(r-=2)},yf=function(r){var n,t,e,u,f,i,o,a,c,v;if(r<-1||Cu(r))return NaN;if(-1===r)return Ju;if(r===Du)return r;if(0===r)return r;if(v=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(v=0,u=r,t=1)}return 0!==v&&(e<9007199254740992?(f=(v=((t=zu(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),f/=c):(v=((t=zu(c=r))>>20)-1023,f=0),(t&=1048575)<434334?c=Bu(c,1072693248|t):(v+=1,c=Bu(c,1071644672|t),t=1048576-t>>2),u=c-1),n=.5*u*u,0===t?0===u?v*Qu+(f+=v*Ru):v*Qu-((a=n*(1-.6666666666666666*u))-(v*Ru+f)-u):(a=(o=(i=u/(2+u))*i)*Ku(o),0===v?u-(n-i*(n+a)):v*Qu-(n-(i*(n+a)+(v*Ru+f))-u))},pf=je,sf=Lr,bf=Ne,Nf=Ou,wf=tf,df=af,hf=Gr,Af=709.782712893384,_f=-708.3964185322641,mf=10.900511;var Uf=ie,gf=Ne,jf=Gr,If=Pr,Of=function(r,n){var t,e,u,f,i,o,a;return a=(n-r-mf+.5)/(u=r+mf-.5),r<1?n<=_f?bf(r*hf(n)-n-vf(r)):Nf(n,r)*bf(-n)/lf(r):(sf(a*a*r)<=100&&r>150?(t=r*(yf(a)-a)+n*(.5-mf)/u,t=bf(t)):(f=r*hf(n/u),df(f,i=r-n)<=_f||wf(f,i)>=Af?(e=i/r,df(f,i)/2>_f&&wf(f,i)/2<Af?t=(o=Nf(n/u,r/2)*bf(i/2))*o:df(f,i)/4>_f&&wf(f,i)/4<Af&&n>r?(t=(o=Nf(n/u,r/4)*bf(i/4))*o,t*=t):t=e>_f&&e<Af?Nf(n*bf(e)/u,r):bf(f+i)):t=Nf(n/u,r)*bf(i)),t*=pf(u/2.718281828459045)/cf(r))};var Sf=function(r,n){var t;return r<=0||n<0?NaN:0===n?r>1?0:1===r?1:If:(t=Of(r,n),n<1&&17976931348623157e292*n<t?If:(0===t?(t=r*jf(n)-n-Uf(r)-jf(n),t=gf(t)):t/=n,t))},Ef=p,Ff=Gr,Tf=Pr,Hf=Ur,Gf=Sf;var Pf=function(r,n,t){return Ef(r)||Ef(n)||Ef(t)||n<0||t<=0?NaN:r<0||r===Tf?Hf:0===n?0===r?Tf:Hf:Ff(Gf(n,r*t))+Ff(t)};var kf=function(r){return function(){return r}},xf=Pr,Mf=Ur,Lf=p;var Vf=kf,Wf=Pr,Yf=Ur,qf=p;var Cf=function(r,n){return Lf(r)||Lf(n)?NaN:r===n?xf:Mf};y(Cf,"factory",(function(r){return qf(r)?Vf(NaN):function(n){if(qf(n))return NaN;return n===r?Wf:Yf}}));var zf=kf,Bf=Cf.factory,Df=p,Jf=Gr,Kf=Ur,Qf=Pr,Rf=Sf;var Xf=Pf;return y(Xf,"factory",(function(r,n){return Df(r)||Df(n)||r<0||n<=0?zf(NaN):0===r?Bf(0):function(t){if(Df(t))return NaN;if(t<0||t===Qf)return Kf;return Jf(Rf(r,t*n))+Jf(n)}})),Xf}));
//# sourceMappingURL=bundle.js.map
