<template>
    <div id="register">
        <section v-if="!showKyc" id="contact" class="padd-section text-center wow fadeInUp">
            <div class="container mt-5">
                <div class="section-title text-center">
                    <h2>Register</h2>
                </div>
            </div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-6 col-md-offset-3">
                        <div class="form">
                            <form @submit.prevent="storeSignUpDetails" role="form" class="contactForm">
                                <div class="form-group">
                                    <input type="text" v-model="user.name" class="form-control" name="name" id="name" placeholder="Your Name" />
                                </div>
                                <div class="form-group">
                                    <input type="email" v-model="user.email" class="form-control" name="email" id="email" placeholder="Your Email" />
                                </div>
                                <div class="form-group">
                                    <input type="password" v-model="user.password" class="form-control" name="password" id="password" placeholder="Your Password" />
                                </div>
                                <div class="form-group">
                                    <input type="password" v-model="user.repeat_password" class="form-control" name="repeat-password" id="repeat-password" placeholder="Repeat Your Password" />
                                </div>
                                <div class="text-center"><button class="btn-about" type="submit">Register</button></div>
                                <div class="text-center">
                                    <p>Already a member? <router-link to="/login">Login</router-link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <KnowYourCustomer v-else/>
    </div>
</template>
<script>
import KnowYourCustomer from "@/components/KnowYourCustomer.vue";
export default {
    data () {
        return {
            user: {
                name: null,
                email: null,
                password: null,
                repeat_password: null
            },
            showKyc: false
        }
    },
    components: {
        KnowYourCustomer
    },

    methods: {
        storeSignUpDetails() {
            this.$store.commit("user/SET_INITIAL_SIGNUP_DETAILS", {
                name: this.user.name,
                email: this.user.email,
                password: this.user.password,
                repeat_password: this.user.repeat_password
            });
            this.showKyc = true;
            console.log("shit, it worked");
        }
    }
}
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