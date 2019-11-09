<template>
    <div>
        <van-nav-bar
                title="个人信息"
                left-text="返回"
                left-arrow
        />
        <van-grid :border="false" :column-num="3">
            <van-grid-item>
            </van-grid-item>
            <van-grid-item>
                <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
                <p>1111</p>
                <van-tag plain>标签</van-tag>
            </van-grid-item>
            <van-grid-item>
            </van-grid-item>
        </van-grid>
        <div class="information">
        <p>职  业 ：学生</p>
        <p>所在城市 ：太原</p>
        <p>毕业学校 ：山西大学</p>
            <van-divider />
            <h3>个人介绍</h3>
            <p>你好我叫XXXX</p>
            <van-divider />
            <h3>个人介绍</h3>
            <p>你好我叫XXXX</p>
            <van-divider />
            <h3>个人介绍</h3>
            <p>你好我叫XXXX</p>
            <van-divider />
            <h3>身份认证</h3>
            <div>
            <div class="Authentication">
                <span>手机号码</span>
            </div>
            <div class="Authentication-r">
                <span >已认证  </span>
                <van-icon name="passed" />
            </div>
        </div>
            <div>
                <div class="Authentication">
                    <span>身份证/人脸识别</span>
                </div>
                <div class="Authentication-r">
                    <span >已认证  </span>
                    <van-icon name="passed" />
                </div>
            </div>
            <div>
                <div class="Authentication">
                    <span>护照</span>
                </div>
                <div class="Authentication-r">
                    <span >已认证  </span>
                    <van-icon name="passed" />
                </div>
            </div>



        </div>
    </div>
</template>

<script>
    export default {
        name: "information",
    };
</script>

<style>
    .information{
        width: 100%;
        height: 100%;
        margin: 0 40px;
        background: #9BCBB5;
        box-sizing: border-box;
    }
    .Authentication{
        width: 50%;
        height: 50%;
        float: left;
    }
    .Authentication-r{
        width: 50%;
        height: 50%;
        float: right;
        text-align: right;
    }
    .kong{
        width: 10px;
        height: 10px;
    }
</style>