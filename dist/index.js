"use strict";var o=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var y=o(function(vr,P){
var T=require('@stdlib/math-base-special-gamma-lanczos-sum-expg-scaled/dist'),j=require('@stdlib/math-base-special-gammaln/dist'),k=require('@stdlib/math-base-special-gamma/dist'),B=require('@stdlib/math-base-special-log1p/dist'),C=require('@stdlib/math-base-special-sqrt/dist'),H=require('@stdlib/math-base-special-abs/dist'),t=require('@stdlib/math-base-special-exp/dist'),s=require('@stdlib/math-base-special-pow/dist'),c=require('@stdlib/math-base-special-max/dist'),l=require('@stdlib/math-base-special-min/dist'),I=require('@stdlib/math-base-special-ln/dist'),N=require('@stdlib/constants-float64-max-ln/dist'),m=require('@stdlib/constants-float64-min-ln/dist'),g=require('@stdlib/constants-float64-gamma-lanczos-g/dist'),J=require('@stdlib/constants-float64-e/dist');function K(r,e){var i,n,v,a,u,q,f;return v=r+g-.5,f=(e-r-g+.5)/v,r<1?e<=m?t(r*I(e)-e-j(r)):s(e,r)*t(-e)/k(r):(H(f*f*r)<=100&&r>150?(i=r*(B(f)-f)+e*(.5-g)/v,i=t(i)):(a=r*I(e/v),u=r-e,l(a,u)<=m||c(a,u)>=N?(n=u/r,l(a,u)/2>m&&c(a,u)/2<N?(q=s(e/v,r/2)*t(u/2),i=q*q):l(a,u)/4>m&&c(a,u)/4<N&&e>r?(q=s(e/v,r/4)*t(u/4),i=q*q,i*=i):n>m&&n<N?i=s(e*t(n)/v,r):i=t(a+u)):i=s(e/v,r)*t(u)),i*=C(v/J)/T(r),i)}P.exports=K
});var d=o(function(ar,D){
var Q=require('@stdlib/math-base-special-gammaln/dist'),U=require('@stdlib/math-base-special-exp/dist'),G=require('@stdlib/math-base-special-ln/dist'),A=require('@stdlib/constants-float64-pinf/dist'),V=require('@stdlib/constants-float64-max/dist'),W=y();function Y(r,e){var i;return r<=0?NaN:e<0?NaN:e===0?r>1?0:r===1?1:A:(i=W(r,e),e<1&&V*e<i?A:(i===0?(i=r*G(e)-e-Q(r)-G(e),i=U(i)):i/=e,i))}D.exports=Y
});var O=o(function(tr,E){
var p=require('@stdlib/math-base-assert-is-nan/dist'),L=require('@stdlib/math-base-special-ln/dist'),M=require('@stdlib/constants-float64-pinf/dist'),_=require('@stdlib/constants-float64-ninf/dist'),Z=d();function $(r,e,i){return p(r)||p(e)||p(i)||e<0||i<=0?NaN:r<0||r===M?_:e===0?r===0?M:_:L(Z(e,r*i))+L(i)}E.exports=$
});var w=o(function(qr,X){
var x=require('@stdlib/utils-constant-function/dist'),b=require('@stdlib/stats-base-dists-degenerate-logpdf/dist').factory,F=require('@stdlib/math-base-assert-is-nan/dist'),S=require('@stdlib/math-base-special-ln/dist'),h=require('@stdlib/constants-float64-ninf/dist'),z=require('@stdlib/constants-float64-pinf/dist'),rr=d();function er(r,e){if(F(r)||F(e)||r<0||e<=0)return x(NaN);if(r===0)return b(0);return i;function i(n){return F(n)?NaN:n<0||n===z?h:S(rr(r,n*e))+S(e)}}X.exports=er
});var ir=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=O(),ur=w();ir(R,"factory",ur);module.exports=R;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
