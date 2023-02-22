<template>
    <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-10">
                <div class="card rounded-3 text-black">
                    <div class="row g-0">
                        <div class="col-lg-12">
                            <div class="card-body p-md-5 mx-md-4">

                                <div class="text-center">
                                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                    style="width: 185px;" alt="logo">
                                  <h4 class="mt-1 mb-5 pb-1">Sua editora especial</h4>
                                </div>

                                <form v-on:submit="register">
                                    <div class="form-outline mb-4">
                                        <input type="text" id="nome" required v-model="user.name" class="form-control"
                                        placeholder="Seu Nome" />
                                    </div>
                                  <div class="form-outline mb-4">
                                    <input type="email" id="email" required v-model="user.email" class="form-control"
                                      placeholder="Seu Email" />
                                  </div>

                                  <div class="form-outline mb-4">
                                    <input type="password" 
                                    placeholder="Sua senha" id="password" required v-model="user.password" class="form-control" />
                                  </div>

                                  <div class="text-center pt-1 mb-5 pb-1">
                                    <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Criar Conta</button>
                                  </div>
                                  
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"register",
    data(){
        return {
            user:{
                email:"",
                name:"",
                password:"",
            }
        }
    },
    mounted(){
        this.verifyUser()
    },
    methods:{
    	verifyUser(){
    		var access_token = localStorage.getItem('access_token');
            if(access_token && access_token != ""){
            	this.$router.push({name:"autorList"})
            }
    	},
        register(e){
        	e.preventDefault();
            this.axios.post('/api/register',this.user).then(response=>{
            	localStorage.setItem('access_token', response.data.access_token)
                this.$router.push({name:"autorList"})
            }).catch(error=>{
                alert("Um usuario com esse email já foi cadastrado!");
            })
        }
    }
}
</script>