<template>
	<div class="cont">
	<div class="head">
		<div class="head_p">
			<div class="head_c">
				<div class="count count_one">
					116个
				</div>
				<span>绿色能量</span>
			</div>
			<div class="head_c">
				<div class="count">
					116个
				</div>
				<span>可出售能量</span>
			</div>
		</div>	
	</div>
	<div class="currency_detail">
		<img src="../../static/能量详情@2x.png" alt="" />
		<span>能量详细</span>
	</div>
	<div class="currency_detail_content">
		<img src="../../static/头像.png" alt="" />
		<div class="currency_detail_content_c">
			<span>Dero Hu</span>
			<span class="time">2018-11-5 通过充值获得20个</span>
		</div>
	</div>
	<div class="currency_detail_content">
		<img src="../../static/头像.png" alt="" />
		<div class="currency_detail_content_c">
			<span>Dero Hu</span>
			<span class="time">2018-11-5 通过充值获得20个</span>
		</div>
	</div>
	<div class="currency_detail_content">
		<img src="../../static/头像.png" alt="" />
		<div class="currency_detail_content_c">
			<span>Dero Hu</span>
			<span class="time">2018-11-5 通过充值获得20个</span>
		</div>
	</div>
	<button class="button" @tap="jump_pay">我要出售</button>
	</div>
</template>

<script>
	export default {
		
		data() {
			return {
				
			}
		},
		methods:{
			jump_pay(){
				uni.navigateTo({
					url:'../personal-center/pay_energy'
				})
			}
		},
		onLoad() {
			
		}
	}
</script>

<style>
	page{
	background: rgb(234,233,238);
}
.box{
	width: 100%;
	height: 4.13rem;
	background:#eae9ee;
	margin-bottom: 0.75rem;
}
.head{
	width: 100%;
	height: 135upx;
	background:rgb(233,66,108) ;
	margin-bottom: 180upx;
	display: flex;
	justify-content: center;
}
.head_p{
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 700upx;
	height: 253upx;
	background: #FFFFFF;
	margin-bottom:-103upx;
	background:#fff;
	border-radius: 10upx;
}
.head_c{
	width: 350upx;
	height: 227upx;
	background:#fff ;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 29upx;
}
.count{
	width: 121upx;
	height: 121upx;
	border-radius: 50% 50%;
	background: rgb(254,205,84);
	color: #fff;
	font-size:36upx;
	font-weight: bold;
	text-align: center;
	line-height: 121upx;
	margin-bottom: 17upx;
}
.head_c span{
	font-size: 36upx;
	font-weight: bold;
	color: #333;
}
.ipt{
	width: 100%;
	height: 95upx;
	display: flex;
	justify-content: center;
	margin-bottom:45upx;
}
.ipt input{
	width: 690upx;
	height: 100%;
	border: 1px solid;
	border-color: #ddd;
	padding-left: 22upx;
	border-radius: 10upx;
}
.button{
	width: 100%;
	height: 103upx;
	text-align: center;
}
.button button{
	width: 610upx;
	height: 100%;
	background: rgb(249,78,120);
	color: #fff;
	font-size: 30upx;
	border-radius: 200upx;
	line-height: 103upx;
	margin-top: 186upx;
}
.currency_detail{
	display: flex;
	align-items: center;
	padding-left:30upx ;
	margin-bottom: 29upx;
}
.currency_detail img{
	width: 39upx;
	height: 36upx;
	margin-right:24upx;
}
.currency_detail span{
	font-size: 30upx;
	font-weight: bold;
	color: #333;
}
.currency_detail_content{
	display: flex;
	margin: auto;
	width: 700upx;
	height: 151upx;
	background: #fff;
	border-radius: 10upx;
	padding-top: 34upx;
	padding-left: 10upx;
	margin-bottom: 20upx;
}
.currency_detail_content img{
	width: 90upx;
	height: 90upx;
	margin-right: 42upx;
}
.currency_detail_content_c{
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	font-size: 30upx;
}
.time{
	font-size: 24upx;
}
.button{
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 93upx;
	background:rgb(216,53,96) ;
	color: #fff;
	border: 0;
	text-align: center;
	line-height: 93upx;
	font-size: 30upx;
	border-radius: 0;
}
.count_one{
	background: rgb(216,53,96)!important;
}
</style>
