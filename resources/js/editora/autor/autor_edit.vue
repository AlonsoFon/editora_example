<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Atualizar dados do Autor</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="update">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Nome</label>
                                    <input type="text" required class="form-control" v-model="autor.nome">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Idade</label>
                                    <input type="number" required class="form-control" v-model="autor.idade">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Sexo</label>
                                    <select required class="form-control" v-model="autor.sexo">
                                        <option value="Oculto" selected> Não informado </option>
                                        <option value="Masculino"> Masculino </option>
                                        <option value="Feminino"> Feminino </option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Brasileiro?</label>
                                    <select required class="form-control" v-model="autor.brasileiro">
                                        <option value="Oculto" selected> Não informado </option>
                                        <option value="Sim"> Sim </option>
                                        <option value="Não"> Não </option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Atualizar</button>
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
    name:"update-autor",
    data(){
        return {
            autor:{
                nome:"",
                idade:"",
                sexo:"Oculto",
                brasileiro:"Oculto",
                _method:"patch"
            }
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
                this.showAutor();
            }
        },
        async showAutor(){
            await this.axios.get(`/api/autor/${this.$route.params.id}`,{
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('access_token')
                }
            }).then(response=>{
                const { nome, idade, sexo, brasileiro } = response.data
                this.autor.nome = nome
                this.autor.idade = idade
                this.autor.sexo = sexo
                this.autor.brasileiro = brasileiro
            }).catch(error=>{
                console.log(error)
            })
        },
        async update(){
            await this.axios.post(`/api/autor/${this.$route.params.id}`,this.autor,{
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('access_token')
                }
            }).then(response=>{
                this.$router.push({name:"autorList"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>