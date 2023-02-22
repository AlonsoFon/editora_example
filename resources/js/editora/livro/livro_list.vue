<template>
    <div class="row">
        <div class="col-12 mb-2 text-end">
            <router-link :to='{name:"livroAdd"}' class="btn btn-primary">Adicionar Novo Livro</router-link>
        </div>
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Livro</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Numero de paginas</th>
                                    <th>Autor</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody v-if="Livros.length > 0">
                                <tr v-for="(livro,key) in Livros" :key="key">
                                    <td>{{ livro.id }}</td>
                                    <td>{{ livro.nome }}</td>
                                    <td>{{ livro.numero_paginas }}</td>
                                    <td>{{ livro.autor.nome }}</td>
                                    <td>
                                        <router-link :to='{name:"livroEdit",params:{id:livro.id}}' class="btn btn-success">Editar</router-link>
                                        <button type="button" @click="deleteLivro(livro.id)" class="btn btn-danger">Remover</button>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                    <td colspan="4" align="center">Nenhum Livro Encontrado.</td>
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
    name:"Livros",
    data(){
        return {
            Livros:[]
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
                this.getLivros()
            }
        },
        async getLivros(){
            await this.axios.get('/api/livro',{
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('access_token')
                }
            }).then(response=>{
                this.Livros = response.data
            }).catch(error=>{
                console.log(error)
                this.Livros = []
            })
        },
        deleteLivro(id){
            if(confirm("Are you sure to delete this livro ?")){
                this.axios.delete(`/api/livro/${id}`,{
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('access_token')
                }
            }).then(response=>{
                    this.getLivros()
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>