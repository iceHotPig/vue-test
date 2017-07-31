<template>
	<div class="header">
		<div class="header_wrapper">
			<div class="header_avatar">
				<img :src="seller.avatar" alt="">
			</div>
			<div class="header_title">
				<h2><span></span>{{seller.name}}</h2>
				<p>{{seller.description}}/{{seller.deliveryTime}}分钟送达</p>
				<div class="header_support">
					<supports v-bind:supports="seller.supports"></supports>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import supports from '../supports/supports.vue'
	export default{
	 props: {
		seller: {
				return:Object
			}
		},
		components:{
			supports
		}
	}
</script>

<style lang="scss" scoped>
@import '../common/common.scss';
@import '../common/mixin.scss';
	.header{
		background:rgba(7,17,27,.5);
		overflow: hidden;
		.header_wrapper{
			margin: 24px 12px 18px 24px;
			.header_avatar{
				display: inline-block;
				height: 64px;
				width: 64px;
				img{
					height: 100%;
					width: 100%;
				}
			}
			.header_title{
				display: inline-block;
				vertical-align: top;
				margin-left: 16px;
				margin-top: 2px;
			  color: #fff;
				h2{
					font-size: 16px;
					line-height: 18px;
					font-weight: bold;
					margin-bottom: 8px;
					text-align: center;
					span{
						display: inline-block;
						height: 18px;
						width: 30px;
						background-size: cover;
						margin-right: 6px; 
						vertical-align: middle;
						@include bgImage("brand");
					}
				}
				p{
					font-size: 10px;
					font-weight: 200;
					line-height: 12px;
					margin-bottom: 10px;
				}
				.header_support{
					height: 14px;	
					overflow: hidden;
					&:hover{
						height: auto;
					}
				}
			}
		}
	}
</style>