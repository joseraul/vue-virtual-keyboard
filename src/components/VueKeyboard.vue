<template>
    <div>
        <slot :content="message"></slot>
        <keyboard
                keyboard="es_es"
        />
    </div>
</template>

<script>

    import Keyboard from './Keyboard.vue';

    export default {
        name: 'vue-keyboard',
        components: {
            Keyboard
        },
        data: function(){
            return {
                message: ''
            }
        },
        methods: {
            updateMessage(message) {
                this.message = message;
            }
        },
        created: function() {
            this.$root.$on('update_message', (message) => {
                this.updateMessage(message);
            })
        }
    }
</script>

<style scoped>
    .keyboard {
    }
</style>