import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Team from '../views/Team.vue';
import Agenda from '../views/Agenda.vue';
import Sponsers from '../views/Sponsers.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/team',
        name: 'Team',
        component: Team
    },
    {
        path: '/agenda',
        name: 'Agenda',
        component: Agenda
    },
    {
        path: '/sponsors',
        name: 'Sponsors',
        component: Sponsers
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router