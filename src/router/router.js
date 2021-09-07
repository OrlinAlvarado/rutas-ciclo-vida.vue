import { createRouter, createWebHashHistory } from 'vue-router'

// import ListPage from '../modules/pokemon/pages/ListPage'
// import AboutPage from '../modules/pokemon/pages/AboutPage'
// import PokemonPage from '../modules/pokemon/pages/PokemonPage'
import NoPageFound from '../modules/shared/pages/NoPageFound'

const routes = [
    {
        path: '/',
        redirect: '/pokemon'
    },
    {
        path: '/pokemon',
        name: 'pokemon',
        component: () => import(/*webpackChunkName: "PokemonLayout" */ '../modules/pokemon/layouts/PokemonLayout'),
        children: [
            { 
                path: 'home', 
                name: 'pokemon-home',
                component: () => import(/*webpackChunkName: "CListPage" */ '../modules/pokemon/pages/ListPage') 
            },
            { 
                path: 'about', 
                name: 'pokemon-about',
                component: () => import(/*webpackChunkName: "AboutPage" */ '../modules/pokemon/pages/AboutPage') 
            },
            { 
                path: 'pokemonid/:id', 
                name: 'pokemon-id',
                component: () => import(/*webpackChunkName: "PokemonPage" */ '../modules/pokemon/pages/PokemonPage'),
                props: ( route ) => {
                    const id = Number( route.params.id );
                
                    return isNaN( id ) ? { id: 1 } : { id }
                },
            },
            {
                path: '',
                redirect: { name: 'pokemon-about' }
            }
        ]
    },
    {
        path: '/dbz',
        name: 'dbz',
        component: () => import(/*webpackChunkName: "DragonBallLayout" */ '../modules/dbz/layouts/DragonBallLayout'),
        children: [
            { 
                path: 'characters', 
                name: 'dbz-characters',
                component: () => import(/*webpackChunkName: "Characters" */ '../modules/dbz/pages/Characters') 
            },
            { 
                path: 'about', 
                name: 'dbz-about',
                component: () => import(/*webpackChunkName: "AboutPage" */ '../modules/dbz/pages/About') 
            },
            {
                path: '',
                redirect: { name: 'dbz-characters' }
            }
        ]
    },
 
    { 
        path: '/:pathMatch(.*)*', 
        component: () => import(/*webpackChunkName: "NotFounPage"*/ '../modules/shared/pages/NoPageFound'), 
        // redirect: '/home'
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router