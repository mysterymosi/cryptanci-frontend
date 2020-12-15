<template>
    <!--==========================
    Pricing Table Section
  ============================-->
    <section id="pricing" class="padd-section text-center wow fadeInUp">
        <div class="container mt-5">
            <div class="section-title text-center">
                <h2>Investment Packages</h2>
                <p class="separator">We take great pride in working with honesty and building trust with clients. As professionals in the field, we aim to use our trading knowledge and experience in order to help create a positive investment outcome. Take a look below to see all that we offer, and get in touch.</p>
            </div>
        </div>
        <div class="container">
            <div v-for="(p, index) in packages" :key="index" class="row mb-4">
                <div class="col-md-6 col-lg-12">
                    <div class="block-pricing">
                        <div class="table">
                            <h4>{{ Object.keys(p)[0] }}</h4>
                            <div v-for="(subPackage, j) in p" :key="j" class="sub-packages">
                                <div v-for="(value, k) in subPackage" :key="k">
                                    <h2>{{ value.PackageName }}</h2>
                                    <ul class="list-unstyled">
                                        <li>Minimum investment of <b>${{ value.minprice }}</b></li>
                                        <li>Maximum investment of <b>${{ value.maxprice }}</b></li>
                                        <li><b>Returns {{ value.percentageReturns }}%</b></li>
                                        <li>Referral Bonus {{ value.referral_bonus }}%</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="table_btn">
                                <a href="#" class="btn"><i class="fa fa-shopping-cart"></i> Select package</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-lg-12 mt">
                    <div class="block-pricing">
                        <div class="table">
                            <h4>Investment Plan For NFP Trade</h4>
                            <!-- <h2>INVESTMENT PLAN FOR NFP TRADE</h2> -->
                            <ul class="list-unstyled">
                                <li>Minimum investment of <b>$3000</b></li>
                                <li>Maximum investment of <b>$1,000,000</b></li>
                                <li><b>MONTHLY RETURNS 50% PROFIT</b></li>
                                <li>Every first Saturday of the month is the payday for NFP.</li>
                            </ul>
                            <h4>WHAT IS NFP ( NON-FARM PAYROLL)?</h4>
                            <p>The non-farm payroll ( NFP) report is a key economic indicator for the United States. It is intended to represent the total number of paid workers in the U.S. minus farm employees, government employees, private household employees and employees of nonprofit organisations. Non-farm Payroll is among the biggest market movers in the foreign exchange market. On the first Friday of every month, the U.S bureau of labour releases numbers of new jobs in U.S - along with other labour market.</p>
                            <div class="table_btn">
                                <a href="#" class="btn"><i class="fa fa-shopping-cart"></i> Select package</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    beforeMount() {
        this.$store.dispatch("subscription/getInvestmentPackages");
    },

    computed: {
        packages() {
            return this.$store.getters["subscription/getPackages"];
        },

        btcAddress() {
            return this.$store.getters["subscription/getBtcAddress"];
        }
    },
}
</script>
<style scoped>
@media (min-width: 990px) {
    .mt {
        margin-top: 40px;
    }
}
</style>