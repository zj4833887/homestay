<template>
    <div>
        <van-nav-bar
            title="我的订单"
            left-text="返回"
            right-text="编辑"
            left-arrow
    />
        <van-cell  value="代付款，剩余29" title="单元格"   icon="wap-home-o"  />
        <div class="left">
        </div>
        <div class="right">
          <p class="written">第一横文字</p>
            <p class="written">第一横文字</p>
            <p class="written">第一横文字</p>
        </div>
        <van-button round type="default" style="float: right">取消订单</van-button>
        <van-cell  value="已消费" title="单元格"   icon="wap-home-o"  />
        <div class="left">
        </div>
        <div class="right">
            <p class="written">第一横文字</p>
            <p class="written">第一横文字</p>
            <p class="written">第一横文字</p>
        </div>
        <van-button round type="default" style="float: right">取消订单</van-button>
        <van-button round type="default" style="float: right;margin-right: 1rem">评价</van-button>
    </div>
</template>

<script>
    export default {
        name: "Myorder"
        ,

    }
</script>

<style>
.van-cell{
    margin-top: 2rem;
}
    .left{
        width: 100px;
        height: 100px;
        float: left;
        background: #a8a3a7;
    }
    .right{
        width: 300px;
        height: 100px;
        float: right;
        background: #9BCBB5;
    }
.written{
    -webkit-margin-before: 0.5rem;
    -webkit-margin-after: 0;
}
</style>