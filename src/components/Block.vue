<template>
    <div class="mainBox" @mouseover="stopInterVal()" @mouseout="interVal()">
        <div class="tabs" v-if="tabs.length > 0">
            <div class="tabItem" @click="handleClick(item)" v-for="(item,index) in tabs" :key="index"
                 :class="{active: activeName ==item}">{{item}}
            </div>
            <div class="line" v-if="showLine"><span style="visibility: hidden;">1</span></div>
        </div>
        <div class="box" :style="{height: height}">
            <div class="top"></div>
            <div class="left">
                <span class="img"></span>
                <span class="corner"></span>
            </div>
            <div class="bottom"></div>
            <slot name="content"></slot>
            <div class="right">
                <span class="img"></span>
                <span class="corner"></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Block",
        props: {
            //是否自动滚动
            marquee: {
                type: Boolean,
                default() {
                    return true;
                }
            },
            //滚动间隔时长 默认 3s
            sleep: {
                type: Number,
                default() {
                    return 3000;
                }
            },
            tabs: {
                type: Array,
                default() {
                    return [];
                }
            },
            //是否显示tab后面的斜线
            showLine: {
                type: Boolean,
                default() {
                    return true;
                }
            }
        },
        computed: {
            height() {
                if (this.tabs.length > 0) {
                    return 'calc(100% - 88px)'
                } else {
                    return 'calc(100% - 41px)'
                }
            }
        },
        data() {
            return {
                activeName: this.tabs[0],
                timer: null,
                num: 0,
            }
        },
        mounted() {
            this.interVal();
        },
        watch: {
            activeName(val) {
                this.$emit('changefun', val)
            }
        },
        methods: {
            //开始间歇滚动
            interVal() {
                if (this.marquee && this.tabs.length > 1) {
                    this.timer = setInterval(() => {
                        this.activeName = this.tabs[this.num];
                        this.num++;
                        if (this.num > this.tabs.length - 1) {
                            this.num = 0;
                        }
                    }, this.sleep)

                }
            },
            //点击tab
            handleClick(item) {
                this.activeName = item;
                var num = this.tabs.indexOf(item);
                this.num = num;
            },
            //停止间歇滚动
            stopInterVal() {
                window.clearInterval(this.timer);
            },
            //页面销毁
            destroyed() {
                this.stopInterVal();
            }
        }

    }
</script>

<style scoped lang="less">
    .mainBox {
        position: relative;
        height: 100%;
        .box {
            position: relative;
            min-height: 300px;
            min-width: 200px;
            padding: 20px 30px;
            background: rgba(20, 34, 87, 0.4);
            border-bottom-right-radius: 30px;
            .top {
                position: absolute;
                top: 0;
                left: 13px;
                width: calc(100% - 26px);
                height: 6px;
                background: url("../assets/img/block/blockBgTopLine.png");
                background-repeat: repeat-x;
                &:before {
                    content: '';
                    display: block;
                    position: absolute;
                    left: -9px;
                    top: -4px;
                    background: url("../assets/img/block/blockBgTopleft.png");
                    width: 15px;
                    height: 15px;
                }
                &:after {
                    content: '';
                    display: block;
                    position: absolute;
                    right: -13px;
                    top: 0;
                    width: 13px;
                    height: 6px;
                    background: url("../assets/img/block/blockBgTopRight.png");
                }
            }
            .left {
                position: absolute;
                top: 10px;
                left: 6px;
                width: 6px;
                height: calc(100% - 16px);
                &:before {
                    content: '';
                    display: inline-block;
                    position: absolute;
                    left: 0;
                    top: 0;
                    height: 20%;
                    width: 100%;
                    background: url("../assets/img/block/blockBgLeftLine.png");
                    background-repeat: repeat-y;
                }
                &:after {
                    content: '';
                    display: inline-block;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    height: calc(80% - 130px);
                    width: 100%;
                    background: url("../assets/img/block/blockBgLeftLine.png");
                    background-repeat: repeat-y;
                }
                .img{
                    position: absolute;
                    top: 20%;
                    left: 0;
                    width: 22px;
                    height: 130px;
                    display: inline-block;
                    background: url("../assets/img/block/blockBgLeftBlock.png");
                }
                .corner{
                    position: absolute;
                    bottom: -6px;
                    left: 0;
                    width: 7px;
                    height: 6px;
                    display: inline-block;
                    background: url("../assets/img/block/blockBgBottomLeft.png");
                }
            }
            .bottom {
                position: absolute;
                bottom: 0;
                left: 13px;
                width: calc(100% - 34px);
                height: 6px;
                background: url("../assets/img/block/blockBgTopLine.png");
                background-repeat: repeat-x;
            }
            .right {
                position: absolute;
                top: 6px;
                right: 0;
                width: 6px;
                height: calc(100% - 16px);
                &:before {
                    content: '';
                    display: inline-block;
                    position: absolute;
                    left: 0;
                    top: 0;
                    height: 60%;
                    width: 100%;
                    background: url("../assets/img/block/blockBgLeftLine.png");
                    background-repeat: repeat-y;
                }
                &:after {
                    content: '';
                    display: inline-block;
                    position: absolute;
                    left: 0;
                    bottom: 7px;
                    height: calc(40% - 96px);
                    width: 100%;
                    background: url("../assets/img/block/blockBgLeftLine.png");
                    background-repeat: repeat-y;
                }
                .img{
                    position: absolute;
                    top: 60%;
                    right: 0;
                    width: 22px;
                    height: 96px;
                    display: inline-block;
                    background: url("../assets/img/block/blockBgRightBlock.png");
                }
                .corner{
                    position: absolute;
                    bottom: -10px;
                    left: -15px;
                    width: 21px;
                    height: 17px;
                    display: inline-block;
                    background: url("../assets/img/block/blockBgBottomRight.png");
                }
            }
        }
        .tabs {
            position: relative;
            left: 12px;
            bottom: 0;
            z-index: 1;
            .tabItem {
                margin-left: 18px;
                font-weight: 800;
                font-size: 21px;
                display: inline-block;
                padding: 5px;
                background: url("../assets/img/block/tabItem.png") no-repeat center center;
                background-size: 100% 100%;
                z-index: 1;
                position: relative;
                cursor: pointer;
                &:before {
                    content: '';
                    display: block;
                    width: 16px;
                    height: 100%;
                    background: url("../assets/img/block/tabItemLeft.png") no-repeat;
                    position: absolute;
                    left: -16px;
                    top: 0;
                }
                &:after {
                    content: '';
                    display: block;
                    width: 16px;
                    height: 100%;
                    background: url("../assets/img/block/tabItemRight.png") no-repeat;
                    position: absolute;
                    right: -16px;
                    top: 0;
                }
                &:hover {
                    background: url("../assets/img/block/tabItemHover.png") no-repeat center center;
                    background-size: 100% 100%;
                    &:after {
                        background: url("../assets/img/block/tabItemRightHover.png") no-repeat;
                    }
                    &:before {
                        background: url("../assets/img/block/tabItemLeftHover.png") no-repeat;
                    }
                }
                &.active {
                    z-index: 2;
                    background: url("../assets/img/block/tabItemActive.png") no-repeat center center;
                    background-size: 100% 100%;
                    &:after {
                        background: url("../assets/img/block/tabItemRightActive.png") no-repeat;
                    }
                    &:before {
                        background: url("../assets/img/block/tabItemLeftActive.png") no-repeat;
                    }
                }
            }
            .line {
                margin-left: 20px;
                display: inline-block;
                padding: 5px;
                color: transparent;
                width: 120px;
                background: url("../assets/img/block/blockLine.png") no-repeat left center;
                background-size: 100% 50%;
            }
        }
    }

</style>