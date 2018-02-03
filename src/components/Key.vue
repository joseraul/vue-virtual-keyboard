<template>
    <button class="key"
            :class="css_class"
            @click="keyPressed"
            type="text">{{ symbol }}</button>
</template>

<script>

    export default {
        name: "key",

        props: [
            'css_class',
            'symbol',
            'action'
        ],

        methods: {
            keyPressed: function(){
                this.$eventHub.$emit('key_pressed', {
                    symbol:this.symbol,
                    action:this.action
                });
            }
        }
    }
</script>

<style scoped>
    .key {
        display: inline-block;
        color: #616161;
        font-size: 1rem;
        text-decoration: none;
        text-align: center;
        width: 44px;
        height: 41px;
        margin: 5px;
        border-radius: 4px;
        background-color: #fafafa;
        border: 1px solid #E0E0E0;

        -webkit-box-shadow: 0px 2px 3px -1px rgba(201,201,201,1);
        -moz-box-shadow: 0px 2px 3px -1px rgba(201,201,201,1);
        box-shadow: 0px 2px 3px -1px rgba(201,201,201,1);
    }
    .spacer {
        width: 200px;
    }
</style>