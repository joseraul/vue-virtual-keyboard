<template>
    <textarea class="message" v-model="message"></textarea>
</template>

<script>
    export default {
        name: "message",

        data: function() {
            return {
                message: ""
            }
        },

        methods: {
            printSymbol(letter) {
                this.message += letter;
            },

            deleteLastElement() {
                this.message = this.message.slice(0, -1);
            }
        },

        created: function() {
            this.$eventHub.$on('event_print_letter', (letter) => {
                this.updateContent(letter);
            });
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
    .message {
        padding: .375rem .75rem;
        font-size: 1rem;
        line-height: 1.5;
        color: #424242;
        background-color: #fafafa;
        border: 1px solid #E0E0E0;
        border-radius: .25rem;
        display: block;
        margin: 0 auto;
        margin-bottom:1.5rem;
        width: 100%;
    }
</style>