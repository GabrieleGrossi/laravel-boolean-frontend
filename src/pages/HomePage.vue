<template>

    <section class="my_container">

            <div class="cocktail-card " v-for="cocktail in cocktails">
                
            <div class="cocktail-header">

                <h2>
                    Cocktail name:
                    {{ cocktail.name }}
                    
                </h2>

                <h4>alcoholic:
                    {{ cocktail.alcoholic }}

                </h4>

            </div>

            <div class="cocktail-body">

                <div class="image-container">
                    <img :src="cocktail.image" alt="">
                    

                </div>
                
                    <h2>
                        Instruction:
                        {{ cocktail.instructions}}
                    </h2>

                    <h3>
                        Ingredients:
                        {{ cocktail.ingredients }}
                    </h3>
            </div>

            </div>
    </section>

    
  
</template>

<script>
import axios from 'axios';
export default {
    name: 'HomePage',



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
<style lang="scss" scoped>

    .my_container{
        width: 1200px;
        margin: 0 auto;
        display: flex;

    }
    .cocktail-card{
        width: calc((100% / 3) - 1rem);
        border-radius: 1rem;
        padding: 1rem;
        margin-right: 1rem;
        border-radius: 20px;
        box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

    }
    .cocktail-card:hover{
        background-color: gray;
        cursor: pointer;
    }

    .cocktail-header{
        width: 100%;
        height: 60px;
        padding: 0.7rem;
        text-align: center;
    }

    .cocktail-body{
        width: 100%;
        padding: 0.5rem;
        height: 100%;
        text-align: center;
           .image-container{
            width: 100%;


            img{
                width: 100%;
                border-radius: 20px;
                display: block;
                margin-bottom: 1rem;
            }
         }
         
        
    }
   
    
</style>

