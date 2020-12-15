<template>
    <!-- MENU -->
     <section class="navbar custom-navbar navbar-fixed-top" role="navigation">
          <div class="container-fluid">

               <div class="navbar-header">
                    <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                         <span class="icon icon-bar"></span>
                         <span class="icon icon-bar"></span>
                         <span class="icon icon-bar"></span>
                    </button>

                    <!-- lOGO TEXT HERE -->
                    <a href="#" class="navbar-brand">CryptanCI</a>
               </div>

               <!-- MENU LINKS -->
               <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav navbar-nav-right">
                         <li><router-link to="/" class="smoothScroll">Home</router-link></li>
                         <li><router-link to="/about" class="smoothScroll">About</router-link></li>
                         <li><router-link to="/investment-packages" class="smoothScroll">Investment Packages</router-link></li>
                         <li><router-link to="/cryptocurrency-list" class="smoothScroll">Cryptocurrency List</router-link></li>
                         <li><router-link to="/faqs" class="smoothScroll">FAQs</router-link></li>
                         <li><router-link to="/testimonies" class="smoothScroll">Testimony</router-link></li>
                         <li><router-link to="/support" class="smoothScroll">Support</router-link></li>
                    </ul>

                    <ul class="nav navbar-nav navbar-right">
                         <li><router-link to="/login"><i class="fa fa-user"></i> Log in/Register</router-link></li>
                    </ul>
               </div>

          </div>
          <VueInjectJs src="/header/jquery.js" />
          <VueInjectJs src="/header/bootstrap.min.js" />
          <VueInjectJs src="/header/smoothscroll.js" />
          <VueInjectJs src="/header/custom.js" />
     </section>
    <!-- <header id="header" class="header header-hide">
        <div class="container">
            <div id="logo" class="pull-left">
                <h1><a href="#body" class="scrollto"><span>Cryptan</span>CI</a></h1>
                
            </div>
            <nav id="nav-menu-container">
                <ul class="nav-menu">
                    <li>
                        
                        <router-link to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'About' }">About</router-link>
                    </li>
                    <li>
                        <router-link to="/investment-packages">Investment Packages</router-link>
                    </li>
                    <li>
                        <router-link to="/cryptocurrency-list">Cryptocurrency List</router-link>
                    </li>
                    <li>
                        <router-link to="/faqs">FAQs</router-link>
                    </li>
                    <li>
                        <router-link to="/testimonies">Testimony</router-link>
                    </li>
                    <li>
                        <router-link to="/support">Support</router-link>
                    </li>
                    <li v-if="!user">
                        <router-link to="/login"><i class="fa fa-user"></i> Log In/Register</router-link>
                    </li>
                    <li v-if="user && routeName!=='UserWallet'">
                        <router-link to="/user-wallet">User Wallet</router-link>
                    </li>
                    <li v-if="user && routeName !== 'UserWallet'">
                        <a href="#" @click.prevent="logout"><i class="fa fa-user"></i> Log Out</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header> -->
</template>
<script>
import VueInjectJs from "vue-inject-js";
export default {
    components: {
        VueInjectJs
    }
//     data() {
//         return {
//             routeName: this.$route.name,
//             user: localStorage.getItem("user")
//         }
//     },

//     computed: {
//         profile() {
//             return this.$store.getters["user/getProfile"];
//         }
//     },

//     mounted() {
//         console.log("routenamme: ", this.routeName);
//         const user = localStorage.getItem("user");
//         if (user) {
//         console.log("route name: ", user);
//         }
//         if (!user) {
//             this.$store.commit("user/SET_PROFILE", null);
//         }
//         this.$store.commit("user/SET_PROFILE", JSON.parse(user));
//     },

//     methods: {
//         logout() {
//             this.$store.commit("user/CLEAR_TOKEN");
//             this.$router.push("/");
//             this.$swal({
//                 icon: "success",
//                 title: "You've been logged out",
//                 toast: true,
//                 position: "top-end",
//                 showConfirmButton: false,
//                 timer: 3000,
//                 timerProgressBar: true,
//                 onOpen: (toast) => {
//                     toast.addEventListener("mouseenter", this.$swal.stopTimer);
//                     toast.addEventListener("mouseleave", this.$swal.resumeTimer);
//                 }
//             });
//         }
//     }
}
</script>

<style scoped>
@import "../assets/header/bootstrap.min.css";
@import "../assets/header/templatemo-style.css";
</style>