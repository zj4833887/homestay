<template>
    <div>
        <van-tree-select
                height="55vw"
                :items="items"
                :main-active-index.sync="activeIndex"
        >
            <template slot="content">
                <van-cell-group v-if="activeIndex === 0">
                    <van-cell title="青城山" value="4%用户选择" label="价格范围470-1200" />
                </van-cell-group>
            </template>
        </van-tree-select>
    </div>
</template>

<script>
    export default {
        name: "Recommend",
        data() {
            return {
                activeIndex: 0,
                items: [{ text: '分组 1' }, { text: '分组 2' },{ text: '分组 1' }, { text: '分组 2' }]
                ,list: [{text:'青城山'},{text:'青城山'},{text:'青城山'},{text:'青城山'},{text:'青城山'},],
                loading: false,
                finished: false
            };
        },
        methods: {
            onLoad() {
                // 异步更新数据
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        this.list.push(this.list.length + 1);
                    }
                    // 加载状态结束
                    this.loading = false;

                    // 数据全部加载完成
                    if (this.list.length >= 40) {
                        this.finished = true;
                    }
                }, 500);
            }
        }
    }
</script>

<style >
.van-cell__label{
    float: right;
}
</style>