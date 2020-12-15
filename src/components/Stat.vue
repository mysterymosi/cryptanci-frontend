<template>
    <section id="newsletter" class="newsletter text-center wow fadeInUp">
    <div class="overlay padd-section">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-stat">
                            <h1>
                                <span class="counter">586</span>
                            </h1>
                            <h4>Total Investors</h4>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-stat">
                            <h1>
                                $<span class="counter">4213591800</span>
                            </h1>
                            <h4>Total Deposited</h4>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-stat">
                            <h1>
                                $<span class="counter">6593642930</span>
                            </h1>
                            <h4>Total Withdraw</h4>
                        </div>
                    </div>
                    <!-- <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-stat">
                        <h1>
                            <span class="counter">40</span>
                        </h1>
                        <h4>Countries Accepted</h4>
                    </div>
                </div> -->
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-stat">
                            <h1>
                                <span class="counter">100</span>%
                            </h1>
                            <h4>Satisfied Customers</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <VueInjectJs src="/js/jquery.js" />
        <VueInjectJs src="/js/waypoints.min.js" />
        <VueInjectJs src="/js/jquery.counterup.min.js" />
        <VueInjectJs src="/js/main.js" />
    </section>
</template>

<script>
import VueInjectJs from "vue-inject-js";
export default {
    components: {
        VueInjectJs
    }
}
</script>

<style scoped>
@import "../assets/css/style.css";
.stat-section {
    background: gold;
    /*opacity: .2;*/
}

.stat-section h1,
.stat-section h4 {
    color: black;
}

.stat-section .single-stat {
    color: black;
}

.stat-section .single-stat i {
    font-size: 35px;
}

.stat-section .single-stat h1 {
    margin: 20px 0px;
    font-size: 25px;
}

.col-md-6.col-sm-6 {
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>