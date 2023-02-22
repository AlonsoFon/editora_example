const login = () => import('./login.vue')
const register = () => import('./register.vue')
const AutorList = () => import('./editora/autor/autor_list.vue')
const AutorCreate = () => import('./editora/autor/autor_add.vue')
const AutorEdit = () => import('./editora/autor/autor_edit.vue')
const LivroList = () => import('./editora/livro/livro_list.vue')
const LivroCreate = () => import('./editora/livro/livro_add.vue')
const LivroEdit = () => import('./editora/livro/livro_edit.vue')

export const routes = [
    {
        name: 'home',
        path: '/',
        component: login
    },
    {
        name: 'login',
        path: '/login',
        component: login
    },
    {
        name: 'register',
        path: '/register',
        component: register
    },
    
    {
        name: 'autorList',
        path: '/autor',
        component: AutorList
    },
    {
        name: 'autorEdit',
        path: '/autor/:id/edit',
        component: AutorEdit
    },
    {
        name: 'autorAdd',
        path: '/autor/add',
        component: AutorCreate
    },
    {
        name: 'livroList',
        path: '/livro',
        component: LivroList
    },
    {
        name: 'livroEdit',
        path: '/livro/:id/edit',
        component: LivroEdit
    },
    {
        name: 'livroAdd',
        path: '/livro/add',
        component: LivroCreate
    }
]