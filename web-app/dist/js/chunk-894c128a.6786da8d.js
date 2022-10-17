(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-894c128a"],{"0d4f":function(t,a,i){"use strict";i("2bc0")},"2bc0":function(t,a,i){},"4bd4":function(t,a,i){"use strict";var e=i("5530"),r=(i("caad"),i("2532"),i("07ac"),i("4de4"),i("d3b7"),i("159b"),i("7db0"),i("58df")),s=i("7e2b"),n=i("3206");a["a"]=Object(r["a"])(s["a"],Object(n["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var a=Object.values(t).includes(!0);this.$emit("input",!a)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var a=this,i=function(t){return t.$watch("hasError",(function(i){a.$set(a.errorBag,t._uid,i)}),{immediate:!0})},e={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?e.shouldValidate=t.$watch("shouldValidate",(function(r){r&&(a.errorBag.hasOwnProperty(t._uid)||(e.valid=i(t)))})):e.valid=i(t),e},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var a=this.inputs.find((function(a){return a._uid===t._uid}));if(a){var i=this.watchers.find((function(t){return t._uid===a._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==a._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==a._uid})),this.$delete(this.errorBag,a._uid)}}},render:function(t){var a=this;return t("form",{staticClass:"v-form",attrs:Object(e["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return a.$emit("submit",t)}}},this.$slots.default)}})},5326:function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{staticClass:"blue-grey lighten-5",attrs:{fluid:"","fill-height":""}},[e("v-row",{attrs:{align:"center"}},[e("v-col",{},[e("router-link",{attrs:{to:"/"}},[e("v-img",{staticClass:"mx-auto mb-6",attrs:{src:i("97b6"),"max-width":"65px"}})],1),e("v-card",{staticClass:"mx-auto",attrs:{"max-width":"600px","min-width":"250px",flat:""}},[e("v-card-text",{staticClass:"py-10"},[e("h3",{staticClass:"display-1 text-center"},[t._v("Prijava")]),e("p",{staticClass:"caption text-center py-2 secondary--text"},[t._v("Unesite podatke kako bi pristupili vašem računu.")]),e("v-form",{ref:"loginForm",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(a){t.valid=a},expression:"valid"}},[e("v-row",[e("v-col",{staticClass:"mx-auto",attrs:{cols:"10"}},[e("v-text-field",{attrs:{rules:t.emailRules,label:"E-mail",required:""},model:{value:t.email,callback:function(a){t.email=a},expression:"email"}})],1),e("v-col",{staticClass:"mb-2 mx-auto",attrs:{cols:"10"}},[e("v-text-field",{attrs:{"append-icon":t.showPassword?"mdi-eye":"mdi-eye-off",rules:[t.rules.required],type:t.showPassword?"text":"password",name:"input-10-1",label:"Lozinka",counter:""},on:{"click:append":function(a){t.showPassword=!t.showPassword}},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}})],1),e("v-col",{staticClass:"mx-auto",attrs:{cols:"10"}},[e("v-btn",{staticClass:"primary",attrs:{block:"",disabled:!t.valid}},[t._v("Prijava")])],1)],1)],1)],1)],1),e("p",{staticClass:"text-center body-2 mt-7"},[t._v("Nemam račun. "),e("router-link",{staticClass:"rm-underline",attrs:{to:"/registracija"}},[t._v("Napravi račun")])],1),e("p",{staticClass:"text-center body-2"},[t._v("Zaboravili ste lozinku? "),e("router-link",{staticClass:"rm-underline",attrs:{to:"/resetiranje-lozinke"}},[t._v("Resetiranje lozinke")])],1)],1)],1)],1)},r=[],s=(i("ac1f"),i("00b4"),{name:"Login",data:function(){return{valid:!1,password:"",email:"",emailRules:[function(t){return!!t||"Obavezno polje."},function(t){return/.+@.+\..+/.test(t)||"Unesite ispravnu e-mail adresu."}],rules:{required:function(t){return!!t||"Obavezno polje."}},showPassword:!1}}}),n=s,o=(i("0d4f"),i("2877")),u=i("6544"),l=i.n(u),c=i("8336"),d=i("b0af"),f=i("99d9"),h=i("62ad"),v=i("a523"),p=i("4bd4"),m=i("adda"),b=i("0fd9"),w=i("8654"),x=Object(o["a"])(n,e,r,!1,null,null,null);a["default"]=x.exports;l()(x,{VBtn:c["a"],VCard:d["a"],VCardText:f["c"],VCol:h["a"],VContainer:v["a"],VForm:p["a"],VImg:m["a"],VRow:b["a"],VTextField:w["a"]})}}]);
//# sourceMappingURL=chunk-894c128a.6786da8d.js.map