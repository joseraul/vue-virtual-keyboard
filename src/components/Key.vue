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
                this.$root.$emit('key_pressed', {
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
    }
    .spacer {
        width: 220px;
    }
    .delete {
        width: 88px;
    }
</style>