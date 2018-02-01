<template>
    <textarea>{{ content }}</textarea>
</template>

<script>
    export default {
        name: "content",

        data: function() {
            return {
                content: ""
            }
        },

        methods: {
            updateContent: function(letter) {
                this.content += letter;
            }
        },

        mounted: function() {
            bus.$on('event_print_letter', (letter) => {
                this.updateContent(letter);
            })
        }
    }
</script>

<style scoped>

</style>