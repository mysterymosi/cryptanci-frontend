<template>
    <!--==========================
    Features Section
  ============================-->
    <section id="features" class="padd-section text-center wow fadeInUp">
        <div class="container mt-5">
            <div class="section-title text-center">
                <h2>Welcome, Mosi Odey</h2>
                <hr>
                <h3>We're glad you took the bold step to invest with us.</h3>
                <p class="separator mt-3">Keep up with the progress of your investments - view your Deposits & Earnings on your fully secure personal investments page.</p>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-lg-6">
                    <h4>You're no on any package</h4>
                    <router-link to="/investment-packages" class="btn-about">Select a package</router-link>
                    <div class="card white-card" style="margin-top: 10px;">
                        <div class="card-body">
                            <h5 style="color: black;" class="text-left">Referral link</h5>
                            <input id="referral_value" v-model="referral_code" type="text" class="form-control" disabled>
                            <button style="margin-top: 15px;" class="btn-about">Copy Link</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6">
                    <div class="feature-block">
                        <div class="row">
                            <div class="col-md-12">
                                <h5 style="color: #000000;">Overall portfolio</h5>
                            </div>
                            <div class="col-md-12" style="max-width: 70%; margin: 0 auto;">
                                <pie-chart :chart-data="chartData" :options="chartOptions"></pie-chart>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h5 class="text-left deposit-title mb-4">Deposits</h5>
                    <div class="row">
                        <div class="col-md-9">
                            <div class="card text-white bg-primary mb-3 text-left">
                                <div class="card-body uw-body">
                                    <i class="fa fa-money uw-icon item1 text-center"></i>
                                    <span class="item2">
                                        <!-- <h5 class="card-title">{{ profile.email === "perkinsproperties2015@gmail.com" || profile.email === "isairobles5@gmail.com"?"USD 30,000.00":"USD 0.00" }}</h5> -->
                                        <h5 class="card-title">USD 0.00</h5>
                                        <p class="card-text">Total Deposits</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row item-row">
                        <div class="col-md-9">
                            <div class="card text-white bg-primary mb-3 text-left">
                                <div class="card-body uw-body">
                                    <i class="fa fa-money uw-icon item1 text-center"></i>
                                    <span class="item2">
                                        <!-- <h5 class="card-title">{{ profile.email === "perkinsproperties2015@gmail.com" || profile.email === "isairobles5@gmail.com"?"USD 30,000.00":"USD 0.00" }}</h5> -->
                                        <h5 class="card-title">USD 0.00</h5>
                                        <p class="card-text">Initial Deposits</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row item-row">
                        <div class="col-md-9">
                            <div class="card text-white bg-primary mb-3 text-left">
                                <div class="card-body uw-body">
                                    <i class="fa fa-lock uw-icon item1 text-center"></i>
                                    <span class="item2">
                                        <!-- <h5 class="card-title">{{ profile.email === "perkinsproperties2015@gmail.com" || profile.email==="isairobles5@gmail.com"?"USD 30,000.00":"USD 0.00" }}</h5> -->
                                        <h5 class="card-title">USD 0.00</h5>
                                        <p class="card-text">Locked Deposits</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row item-row">
                        <div class="col-md-9">
                            <div class="card text-white bg-primary mb-3 text-left">
                                <div class="card-body uw-body">
                                    <i class="fa fa-lock uw-icon item1 text-center"></i>
                                    <span class="item2">
                                        <!-- <h5 class="card-title">{{ profile.email === "perkinsproperties2015@gmail.com"?"USD 30,000.00":"USD 0.00" }}</h5> -->
                                        <h5 class="card-title">USD 0.00</h5>
                                        <p class="card-text">Compounded Deposits</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h5 class="text-left earning-title mb-4">Earnings</h5>
                    <div class="row">
                        <div class="col-md-9">
                            <div class="card text-white bg-danger mb-3 text-left">
                                <div class="card-body uw-body">
                                    <i class="fa fa-money uw-icon item1 text-center"></i>
                                    <span class="item2">
                                        <!-- <h5 class="card-title">{{ profile.email === "perkinsproperties2015@gmail.com"?"USD 15,000.00":"USD 0.00" }}</h5> -->
                                        <h5 class="card-title">USD 0.00</h5>
                                        <p class="card-text">Total Earnings</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row item-row">
                        <div class="col-md-9">
                            <div class="card text-white bg-danger mb-3 text-left">
                                <div class="card-body uw-body">
                                    <i class="fa fa-credit-card uw-icon item1 text-center"></i>
                                    <span class="item2">
                                        <!-- <h5 class="card-title">{{ profile.email === "perkinsproperties2015@gmail.com"?"USD 15,000.00":"USD 0.00" }}</h5> -->
                                        <h5 class="card-title">USD 0.00</h5>
                                        <p class="card-text">Paid Earnings</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row item-row">
                        <div class="col-md-9">
                            <div class="card text-white bg-danger mb-3 text-left">
                                <div class="card-body uw-body">
                                    <i class="fa fa-lock uw-icon item1 text-center"></i>
                                    <span class="item2">
                                        <h5 class="card-title">USD 0.00</h5>
                                        <p class="card-text">Compounded Earnings</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row item-row">
                        <div class="col-md-9">
                            <div class="card text-white bg-danger mb-3 text-left">
                                <div class="card-body uw-body">
                                    <i class="fa fa-retweet uw-icon item1 text-center"></i>
                                    <span class="item2">
                                        <h5 class="card-title">USD 0.00</h5>
                                        <p class="card-text">Referral Earnings</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <h5 class="text-left col-invert">Get More Bitcoin!</h5>
                    <p class="text-left col-invert">Boost your investment. Sign up & buy bitcoins. <a class="invert-col" href="">Help?</a></p>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card text-white get-bitcoin mb-3 text-left">
                                <div class="card-body uw-body">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <h5><a target="_blank" href="https://www.coinbase.com/">Coinbase</a></h5>
                                            <h5><a target="_blank" href="https://cex.io/">Cex.io</a></h5>
                                            <h5><a target="_blank" href="https://coinmama.com/">CoinMama</a></h5>
                                            <h5><a target="_blank" href="https://www.bitstamp.net/">Bitstamp</a></h5>
                                            <h5><a target="_blank" href="https://localbitcoins.com/">LocalBitCoins</a></h5>
                                        </div>
                                        <div class="col-md-6">
                                            <h5><a target="_blank" href="https://www.kraken.com/">Kraken</a></h5>
                                            <h5><a target="_blank" href="https://www.binance.com/">Binance</a></h5>
                                            <h5><a target="_blank" href="https://gemini.com/">Gemini Exchange</a></h5>
                                            <h5><a target="_blank" href="https://paxful.com/">Paxful</a></h5>
                                            <h5><a target="_blank" href="https://xcoins.io/">XCoins</a></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h5 class="text-left withdrawal-title mb-4">Withdrawals</h5>
                    <div class="row">
                        <div class="col-md-9">
                            <div class="card text-white bg-warning mb-3 text-left">
                                <div class="card-body uw-body">
                                    <i class="fa fa-bank uw-icon item1 text-center"></i>
                                    <span class="item2">
                                        <h5 class="card-title">USD 0.00</h5>
                                        <p class="card-text">Total Withdrawals</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row item-row">
                        <div class="col-md-9">
                            <div class="card text-white bg-warning mb-3 text-left">
                                <div class="card-body uw-body">
                                    <i class="fa fa-pause uw-icon item1 text-center"></i>
                                    <span class="item2">
                                        <h5 class="card-title">USD 0.00</h5>
                                        <p class="card-text">Pending Withdrawals</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row item-row">
                        <div class="col-md-9">
                            <div class="card text-white bg-warning mb-3 text-left">
                                <div class="card-body uw-body">
                                    <i class="fa fa-retweet uw-icon item1 text-center"></i>
                                    <span class="item2">
                                        <h5 class="card-title">USD 0.00</h5>
                                        <p class="card-text">Referral Withdrawals</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div v-if="referrals.length > 0" class="row item-row">
                        <div class="col-md-12">
                            <div class="card text-white bg-warning mb-3">
                                <div class="card-body">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">Name</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Date Joined</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(referral, index) in referrals" :key="index">
                                                <td>{{ referral.name }}</td>
                                                <td>{{ referral.email }}</td>
                                                <td>{{ referral.dateJoined }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div> -->
                    <div class="row item-row">
                        <div class="col-md-12">
                            <div class="card text-white bg-warning mb-3">
                                <div class="card-body">
                                    <h5 class="card-title referral-msg">No Referrals</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import PieChart from "../utils/pie-chart.js";
export default {
    components: {
        PieChart
    },

    data() {
        return {
            chartOptions: {
                hoverBorderWidth: 20
            },
            chartData: null
        };
    },

    methods: {
        fillData() {
            this.chartData = {
                hoverBackgroundColor: "red",
                hoverBorderWidth: 10,
                labels: ["Deposits", "Earnings", "Withdrawals"],
                datasets: [{
                    label: "Data One",
                    backgroundColor: ["#337ab7", "#dc3545", "#ffc107"],
                    data: [3, 5, 2]
                }]
            }
        },
    },

    mounted() {
      this.fillData();
    }
}
</script>
<style scoped>
.referral-msg {
  color: #ffffff;
  font-size: 30px;
  font-weight: bolder;
}
.feature-block {
  box-shadow: 0 0 35px rgba(0, 0, 0, 0.1);
}
img {
    width: 100px;
}

hr {
    width: 200px;
    border-top: 5px solid #118ab2;
}

.deposit-title {
    color: #337ab7;
    font-size: 46px;
}

.earning-title {
    color: #dc3545;
    font-size: 46px;
}

.withdrawal-title {
    color: #ffc107;
    font-size: 46px;
}

.invert-col {
    color: #ffffff;
}

th {
    text-align: center;
}

.btn:focus {
    border: none !important;
    outline: none !important;
}

.btn:active {
    outline: none !important;
    border: none !important;
}

.btn-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.get-bitcoin {
    border: 1px solid #e3e17b;
    background-color: #e3e17b;
}

.get-bitcoin a {
    color: #000000;
}

.get-bitcoin a:hover {
    color: #ffffff;
}

a {
    color: #ffffff;
    text-decoration: underline !important;
}

.text-left {
    text-align: left !important;
}

.bg-danger {
    background-color: #dc3545;
}

.bg-warning {
    background-color: #ffc107;
}

.item-row {
    margin-top: 30px;
}

.white-card {
    background-color: #ffffff;
}

.card {
    padding: 15px;
}

.uw-body {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.uw-icon {
    font-size: 4em;
    margin: 5px;
    color: #ffffff;
}

.item2 {
    flex-grow: 8;
    display: flex;
    flex-direction: column;
    align-items: left;
    padding-left: 20px;
}

.item2 p {
    text-align: left;
    font-weight: bolder;
    color: white;
}

.item2 h5 {
    font-size: 40px;
    font-weight: bolder;
    color: white;
}

.package {
    background-color: gold;
    width: 200px;
    margin: 0 auto;
    padding: 10px;
    color: #000000;
    border-radius: 10px;
    font-weight: bold;
    text-transform: uppercase;
    /*letter-spacing: 1px;*/
}

.msg {
    background-color: red;
    /*width: 200px;*/
    margin-top: 20px;
    padding: 10px;
    color: #ffffff;
    border-radius: 10px;
    font-weight: bold;
    text-transform: uppercase;
    /*letter-spacing: 1px;*/
}

@media (min-width: 960px) {
    .col-md-4 {
        max-width: 100% !important;
    }
}

@media (min-width: 600px) {
    .col-sm-4 {
        max-width: 100% !important;
    }
}
/*.feature-block {
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.1);
  }*/
</style>