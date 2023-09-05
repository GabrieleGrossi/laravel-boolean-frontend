<template>
    <nav>
        <ul>
            <li v-for="link in links">
                <router-link :to="link.route">
                    {{ link.name }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    name: 'AppHeader',

    data() {
        return {
            links : [
                {
                    route: './',
                    name: 'HomePage'
                },
                {
                    route: './chi-siamo',
                    name: 'AboutUs'
                },
                {
                    route: './contatti',
                    name: 'Contacts'
                },
            ]
           
        }
    },


}
</script>
<style lang="scss">
        
    ul{
        list-style-type: none;
        display: flex;
        justify-content: space-around;
        margin-bottom: 100px;
        
        a{

            font-size: 2rem;
        }
    }

</style>