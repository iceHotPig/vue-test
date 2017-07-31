<template>
	<div class="supports">
		<!-- {{supports}} -->
		<ul>
			<li v-for="(item,index) in supports" class="listSon">
			   <span v-bind:class="classMap[supports[index].type]"></span>
				 <p>{{item.description}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
  export default{
    props:{
    	supports:{
    		return: Array
    	}
    },
    created(){
			this.classMap=['decrease','discount','guarantee','invoice','special']
		}
  }
</script>

<style lang="scss" scoped>
	@import '../common/common.scss';
	@import '../common/mixin.scss';
	.listSon{
		span{
			display: inline-block;
	    height: 12px;
	    width: 12px;
	    background-size: cover;
	    &.decrease{
	    	@include bgImage('decrease_1');
	    }
	    &.discount{
	    	@include bgImage('discount_1');
	    }
	    &.guarantee{
	    	@include bgImage('guarantee_1');
	    }
	     &.invoice{
	    	@include bgImage('invoice_1');
	    }
	     &.special{
	    	@include bgImage('special_1');
	    }
		}
		p{
			display: inline-block;
			font-size: 10px;
			font-weight: 200;
			line-height: 12px;
			vertical-align: top;
		}
	}
</style>