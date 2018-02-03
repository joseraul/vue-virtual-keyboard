<template>
    <div class="keyboard">
        <div v-for="(row, row_position) in symbols" v-bind:key="row_position">

            <key    v-for="(keyboard_key, keyboard_key_pos) in row"
                    v-bind:key="keyboard_key_pos"
                    :css_class="keyboard_key.css_class"
                    :symbol="keyboard_key.symbol"
                    :action="keyboard_key.action"></key>
        </div>
    </div>
</template>

<script>
    import json_keyboard from '../data/es_es.json';
    import Key from './Key.vue';

    export default {
        name: "keyboard",

        components: {
          Key,
        },

        data: function() {
            return {
                symbols: json_keyboard
            }
        },

        methods: {
            printLetter: function(event){
                console.log(event.currentTarget.innerHTML);
                this.$eventHub.$emit('event_print_letter', event.currentTarget.innerHTML);
            }
        }
    }
</script>

<style scoped>
    .keyboard {
    }
</style>