(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{336:function(t,i,r){"use strict";r.r(i);r(70),r(168),r(10),r(69);var e=r(22),n=r.n(e),o={name:"Box",props:{boxType:{type:Number,default:1},primary:{type:String,required:!0}},computed:{height:function(){return 1==this.boxType?"1.5em":2==this.boxType?"1.3em":"1.1em"},width:function(){return 1==this.boxType?"90%":2==this.boxType?"70%":3==this.boxType?(50+Math.floor(40*Math.random())).toString()+"%":"100%"},background:function(){return 1==this.boxType?n()(this.primary).isDark()?n()(this.primary).darken(10).toString():n()(this.primary).darken(20).toString():2==this.boxType?n()(this.primary).isDark()?n()(this.primary).darken(3).toString():n()(this.primary).darken(10).toString():n()(this.primary).isDark()?n()(this.primary).lighten().toString():n()(this.primary).darken().toString()}}},a=r(27),s=Object(a.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"skeleton-box-normal",style:{background:this.background,width:this.width,height:this.height,marginBottom:"0.5em"}})}),[],!1,null,null,null);i.default=s.exports}}]);