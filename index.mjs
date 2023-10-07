// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.1.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gammaln@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.1.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma-lanczos-sum-expg-scaled@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log1p@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.1.0-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-max@v0.1.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-min@v0.1.1-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-ln@v0.1.1-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-min-ln@v0.1.1-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-gamma-lanczos-g@v0.1.1-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-e@v0.1.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.1-esm/index.mjs";import{factory as N}from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-logpdf@v0.1.0-esm/index.mjs";function y(s,t){var i;return s<=0||t<0?NaN:0===t?s>1?0:1===s?1:n:(i=function(s,t){var n,i,r,u,N,y,z;return z=(t-s-g+.5)/(r=s+g-.5),s<1?t<=b?d(s*e(t)-t-m(s)):h(t,s)*d(-t)/l(s):(p(z*z*s)<=100&&s>150?(n=s*(o(z)-z)+t*(.5-g)/r,n=d(n)):(u=s*e(t/r),f(u,N=s-t)<=b||c(u,N)>=v?(i=N/s,f(u,N)/2>b&&c(u,N)/2<v?n=(y=h(t/r,s/2)*d(N/2))*y:f(u,N)/4>b&&c(u,N)/4<v&&t>s?(n=(y=h(t/r,s/4)*d(N/4))*y,n*=n):n=i>b&&i<v?h(t*d(i)/r,s):d(u+N)):n=h(t/r,s)*d(N)),n*=j(r/x)/a(s))}(s,t),t<1&&r*t<i?n:(0===i?(i=s*e(t)-t-m(s)-e(t),i=d(i)):i/=t,i))}function z(s,m,d){return t(s)||t(m)||t(d)||m<0||d<=0?NaN:s<0||s===n?i:0===m?0===s?n:i:e(y(m,s*d))+e(d)}function q(s,m){return t(s)||t(m)||s<0||m<=0?u(NaN):0===s?N(0):function(d){if(t(d))return NaN;if(d<0||d===n)return i;return e(y(s,d*m))+e(m)}}s(z,"factory",q);export{z as default,q as factory};
//# sourceMappingURL=index.mjs.map
