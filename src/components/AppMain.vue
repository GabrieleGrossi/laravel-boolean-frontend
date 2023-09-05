<template>
    <div>
        
    </div>
</template>

<script>

import axios from 'axios';

export default {
     name:'AppMain',

    data() {
        return {
            cocktails:[],
            apiUrl:'http://127.0.0.1:8000/api/cocktail',
        }
    },

    methods: {
        getCocktails(){
            axios.get(this.apiUrl, {
                params: {}
            })
            .then((response)=>{
                console.log(response.data.results.data);
                this.cocktails= response.data.results.data
            })
            .catch(function (error) {
                console.log(error);
            })
        },
    },

    created() {
        this.getCocktails();
    },
}
</script>

<style lang="scss">
    
</style>