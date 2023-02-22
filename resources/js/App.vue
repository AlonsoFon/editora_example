<template>
    <main>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" v-if="userLogged">
            <div class="container-fluid">
                <router-link to="/" class="navbar-brand" href="#">Editora CRUD</router-link>
                <div class="collapse navbar-collapse">
                    <div class="navbar-nav">
                        <router-link exact-active-class="active" to="/autor" class="nav-item nav-link">Autores</router-link>
                        <router-link v-if="Autors.length > 0" exact-active-class="active" to="/livro" class="nav-item nav-link">Livros</router-link>
                    </div>
                    <button style="margin-left: 85%;" type="button" class="btn btn-outline-danger" v-on:click="logout">Logout</button>
                </div>
            </div>
        </nav>
        <div class="container mt-5">
            <router-view></router-view>
        </div>
    </main>
</template>
 
<script>
    export default {
        data(){
            return {
                Autors:[],
                userLogged: false,
        }
        },
        mounted(){
            this.verifyUser(),
            this.getAutors()
        },
        methods:{
            async logout(){
                await this.axios.post('/api/logout',{},{
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('access_token')
                }
                }).then(response=>{
                    localStorage.removeItem('access_token');
                    this.userLogged = false;
                    this.$router.push({name:"login"});
                }).catch(error=>{
                    console.log(error)
                    this.Autors = []
                })

            },
            async verifyUser(){
                var access_token = localStorage.getItem('access_token');
                if(access_token && access_token != ""){
                    this.userLogged = true;
                }
            },
            async getAutors(){
                if(this.userLogged){
                    await this.axios.get('/api/autor',{
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('access_token')
                    }
                    }).then(response=>{
                        this.Autors = response.data
                    }).catch(error=>{
                        console.log(error)
                        this.Autors = []
                    })
                }
            }
        }
    }
</script>