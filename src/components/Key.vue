<template>
    <button @click="printLetter" type="text">{{ new_name }}</button>
</template>

<script>
    export default {
        name: "key",

        data: function() {
            return {
                new_name: "Hello World!"
            }
        },

        methods: {
            printLetter: function(){
                bus.$emit('event_print_letter', this.new_name);
            }
        }
    }
</script>

<style scoped>

</style>