(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"0dc4":function(t,e,s){},"4a93":function(t,e,s){"use strict";s("0dc4")},a55b:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"padd-section text-center wow fadeInUp",attrs:{id:"contact"}},[t._m(0),s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-md-6 col-md-offset-3"},[s("div",{staticClass:"form"},[s("form",{staticClass:"contactForm",attrs:{role:"form"},on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"email",name:"email",id:"email",placeholder:"Your Email"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",name:"password",id:"password",placeholder:"Your password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),t._m(1),s("div",{staticClass:"text-center"},[s("p",[t._v("New to this site? "),s("router-link",{attrs:{to:"/register"}},[t._v("Register")])],1)])])])])])])])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container mt-5"},[s("div",{staticClass:"section-title text-center"},[s("h2",[t._v("Login")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center"},[s("button",{staticClass:"btn-about",attrs:{type:"submit"}},[t._v("login")])])}],r={components:{},data:function(){return{user:{email:null,password:null}}},methods:{login:function(){var t=this;this.$store.dispatch("user/login",{email:this.user.email,password:this.user.password}).then((function(e){t.$swal({position:"center",icon:"success",title:"Login Successful",showConfirmButton:!1,timer:1500}),console.log("login data says: ",e.data.message),t.$store.commit("user/SET_PROFILE",e.data.message),localStorage.setItem("token",e.data.message.token),localStorage.setItem("user",JSON.stringify(e.data.message)),t.isLoggingIn=!1,0===e.data.message.role?t.$router.push({path:"/user-wallet"}):t.$router.push({path:"/dashboard/users"})})).catch((function(e){t.isLoggingIn=!1,console.log(e),t.$swal({icon:"error",title:"Login Unsuccessful",toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,onOpen:function(e){e.addEventListener("mouseenter",t.$swal.stopTimer),e.addEventListener("mouseleave",t.$swal.resumeTimer)}})}))}}},i=r,n=(s("4a93"),s("2877")),l=Object(n["a"])(i,a,o,!1,null,"339ee21c",null);e["default"]=l.exports}}]);
//# sourceMappingURL=login.8de04203.js.map