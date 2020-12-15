<template>
	<section id="contact" class="padd-section text-center wow fadeInUp">
        <div class="container mt-5">
            <div class="section-title text-center">
                <h2>Login</h2>
            </div>
        </div>
        <div class="container">
            <!--==========================
    Contact Section
  ============================-->
            <div class="row justify-content-center">
                <div class="col-md-6 col-md-offset-3">
                    <div class="form">
                        <form @submit.prevent="login" role="form" class="contactForm">
                            <div class="form-group">
                                <input type="email" v-model="user.email" class="form-control" name="email" id="email" placeholder="Your Email" />
                            </div>
                            <div class="form-group">
                                <input type="password" v-model="user.password" class="form-control" name="password" id="password" placeholder="Your password" />
                            </div>
                            <div class="text-center"><button class="btn-about" type="submit">login</button></div>

                            <div class="text-center">
                            	<p>New to this site? <router-link to="/register">Register</router-link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
// import { ValidationProvider, ValidationObserver } from "vee-validate";
// import Preloader from "@/components/Preloader.vue";
export default {
    components: {
        // VueInjectJs,
        // ValidationProvider,
        // ValidationObserver,
        // Preloader
    },

    data() {
        return {
            user: {
                email: null,
                password: null
            }
            // isLoggingIn: false
        }
    },

    methods: {
        login() {
            // this.isLoggingIn = true;
            this.$store.dispatch("user/login", {
                    email: this.user.email,
                    password: this.user.password
                })
                .then((data) => {
                    this.$swal({
                        position: "center",
                        icon: "success",
                        title: "Login Successful",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    console.log("login data says: ", data.data.message);
                    this.$store.commit("user/SET_PROFILE", data.data.message);
                    localStorage.setItem("token", data.data.message.token);
                    localStorage.setItem("user", JSON.stringify(data.data.message));
                    this.isLoggingIn = false;
                    if (data.data.message.role === 0) {
                        this.$router.push({ path: "/user-wallet" });
                    } else {
                        this.$router.push({ path: "/dashboard/users" });
                    }
                })
                .catch(err => {
                    this.isLoggingIn = false;
                    console.log(err);
                    this.$swal({
                        icon: "error",
                        title: "Login Unsuccessful",
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener("mouseenter", this.$swal.stopTimer);
                            toast.addEventListener("mouseleave", this.$swal.resumeTimer);
                        }
                    });
                });
        }
    }
};
</script>

<style scoped>
	a {
		color: #118ab2;
		text-decoration: none; 
	}

	a:hover {
		color: #023047;
	}
    .section-title {
    margin-bottom: 0 !important;
}
</style>