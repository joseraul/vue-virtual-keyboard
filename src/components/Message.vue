<template>
    <textarea class="message" v-model="message"></textarea>
</template>

<script>
    export default {
        name: "message",

        data: function() {
            return {
                message: "",
                locale: ""
            }
        },

        methods: {
            printSymbol(symbol) {
                this.message += symbol;
                console.log()
            },

            deleteLastElement() {
                this.message = this.message.slice(0, -1);
            }
        },

        created: function() {
            this.$eventHub.$on('key_pressed', (key) => {
                switch(key.action) {
                    case 'delete':
                        this.deleteLastElement();
                        break;
                    default:
                        this.printSymbol(key.symbol);
                }
            })
        }
    }
</script>

<style scoped>

</style>