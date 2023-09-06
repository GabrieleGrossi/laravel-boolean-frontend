<template>

    
    <div class="container">

        <div class="card" v-for="cocktail in cocktails">
            <div class="card-image">
                <img :src="cocktail.image" alt="">
            </div>

            <div class="card-text">

                <p class="card-meal-type">{{ cocktail.ingredients }}</p>

                <h2 class="card-title">{{ cocktail.name }}</h2>

                <p class="card-body"> {{ cocktail.instructions}}</p>

            </div>

            <div class="card-alcoholic">{{ cocktail.alcoholic }}</div>
        </div>

    </div>
    
  
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
   
#header{
  margin:20px;
}
#header>h1{
  text-align:center;
  font-size:3rem;
}
#header>p{
  text-align:center;
  font-size:1.5rem;
  font-style:italic;
}
.container{
  width:100%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  height: 100vh;
  display:flex;
  justify-content:space-around;
  flex-wrap:wrap;
  padding:40px 20px;
  background-image: url(https://images.unsplash.com/photo-1495195129352-aeb325a55b65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1776&q=80);
  background-size:cover;
}
.card{
  display:flex;
  flex-direction:column;
  width:400px;
  margin-bottom:60px;
}
.card>div{
  box-shadow:0 15px 20px 0 rgba(0,0,0,0.5);
}
.card-image{
  width:400px;
  height:250px;
}
.card-image>img{
  width:100%;
  height:100%;
  object-fit:cover;
  object-position:center;
}
.card-text{
  margin:-30px auto;
  margin-bottom:-50px;
  height:300px;
  width:300px;
  background-color:#1D1C20;
  color:#fff;
  padding:20px;
}
.card-meal-type{
  font-style:italic;
}
.card-title{
  font-size:2.2rem;
  margin-bottom:20px;
  margin-top:5px;
}
.card-body{
  font-size:1.25rem;
}
.card-alcoholic{
  width:100px;
  height:100px;
  background-color:salmon;
  color:#fff;
  margin-left:auto;
  font-size:1rem;
  display:flex;
  justify-content:center;
  align-items:center;
}

</style>

