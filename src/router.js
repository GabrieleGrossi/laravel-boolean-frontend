import { createRouter, createWebHistory } from "vue-router";

const router= createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage,
        },

        {
            path: '/chi-siamo',
            name: 'aboutUs',
            component: AboutUs,
        },
        {
            path: '/contatti',
            name: 'contact',
            component: Contacts,
        },
    ]

})

export{router};