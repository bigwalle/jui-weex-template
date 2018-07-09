<template>
    <div class="center">
        <bui-image src="/image/logo.png" width="244px" height="172px"></bui-image>
        <text class="h2">JUI-Weex</text>
        <text class="h4">专注为Weex前端开发者提供高质量UI组件</text>
    </div>
</template>

<!--引入jui-weex样式文件-->
<style lang="sass" src="jui-weex/src/css/juiweex.scss"></style>

<script>
    var globalEvent = weex.requireModule('globalEvent');
    module.exports = {
        data () {
            return {}
        },
        mounted()
        {
            globalEvent.addEventListener("androidback", e => {
                this.$pop();
            });
        }
    }
</script>