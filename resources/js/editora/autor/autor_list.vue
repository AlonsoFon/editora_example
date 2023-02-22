<template>
    <div class="row">
        <div class="col-12 mb-2 text-end">
            <router-link :to='{name:"autorAdd"}' class="btn btn-primary">Adicionar Novo Autor</router-link>
        </div>
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Autor</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Idade</th>
                                    <th>Sexo</th>
                                    <th>Brasileiro</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody v-if="Autors.length > 0">
                                <tr v-for="(autor,key) in Autors" :key="key">
                                    <td>{{ autor.id }}</td>
                                    <td>{{ autor.nome }}</td>
                                    <td>{{ autor.idade }}</td>
                                    <td>{{ autor.sexo }}</td>
                                    <td>{{ autor.brasileiro }}</td>
                                    <td>
                                        <router-link :to='{name:"autorEdit",params:{id:autor.id}}' class="btn btn-success">Editar</router-link>
                                        <button type="button" @click="deleteAutor(autor.id)" class="btn btn-danger">Remover</button>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                    <td colspan="4" align="center">Nenhum Autor Encontrado.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Autors",
    data(){
        return {
            Autors:[]
        }
    },
    mounted(){
        this.verifyUser()
    },
    methods:{
        verifyUser(){
            var access_token = localStorage.getItem('access_token');
            if(!access_token || access_token == "" || access_token == null){
                this.$router.push({name:"login"});
            }else{
                this.getAutors();
            }
        },
        async getAutors(){
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
        },
        deleteAutor(id){
            if(confirm("Are you sure to delete this autor ?")){
                this.axios.delete(`/api/autor/${id}`,{
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('access_token')
                    }
                }).then(response=>{
                    this.getAutors()
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>