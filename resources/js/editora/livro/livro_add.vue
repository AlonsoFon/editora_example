<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Adicionar Livro</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="create">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Nome</label>
                                    <input type="text" required class="form-control" v-model="livro.nome">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Numero de paginas</label>
                                    <input type="number" required class="form-control" v-model="livro.numero_paginas">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Autor</label>
                                    <select required class="form-control" v-model="livro.autor_id">
                                        <option v-for="(autor,key) in Autors" :key="key" v-bind:value="autor.id"> {{ autor.nome }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Salvar</button>
                            </div>
                        </div>                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"add-livro",
    data(){
        return {
            livro:{
                nome:"",
                numero_paginas:"",
                autor_id: "",
            },
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
        async create(){
            await this.axios.post('/api/livro',this.livro,{
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('access_token')
                }
            }).then(response=>{
                this.$router.push({name:"livroList"})
            }).catch(error=>{
                console.log(error)
            })
        },
        async getAutors(){
            await this.axios.get('/api/autor',{
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('access_token')
                }
            }).then(response=>{
                this.Autors = response.data;
            }).catch(error=>{
                console.log(error)
                this.Autors = []
            })
        },
    }
}
</script>