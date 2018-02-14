<template>
    <div class="keyboard">
        <div v-for="(row, row_position) in symbols" v-bind:key="row_position">
            <key
                    v-for="(keyboard_key, keyboard_key_pos) in row"
                    v-bind:key="keyboard_key_pos"
                    :css_class="keyboard_key.css_class"
                    :symbol="keyboard_key.symbol"
                    :action="keyboard_key.action" />
        </div>
    </div>
</template>

<script>
    import Key from './Key.vue';
    import json_keyboard from '../data/es_es.json';

    export default {
        name: "keyboard",

        components: {
          Key
        },

        props: {
            keyboard: {required: true, default: 'es_es'},
            is_dynamic: {type: Boolean, required: false, default: false}
        },

        data: function() {
            return {
                symbols: this.getKeyboard(),
                message: ''
            }
        },

        methods: {
            getKeyboard() {
                if (this.is_dynamic) {
                    return this.keyboard;
                }

                return json_keyboard;
            },

            printSymbol(symbol) {
                this.message += symbol;
                this.$parent.$refs.message.value = this.message;
            },

            deleteLastElement() {
                this.message = this.message.slice(0, -1);
                this.$parent.$refs.message.value = this.message;
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
    .keyboard {
    }
</style>