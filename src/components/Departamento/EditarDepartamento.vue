<template>
    <div class="container">
      <div class="card">
        <div class="card-header">Editar Departamento</div>
        <div class="card-body">
          <form v-on:submit.prevent="editarDepartamento">
            <div class="form-group">
              <label for="">Nombre del departamento:</label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                v-model="form.nombre"
                aria-describedby="helpId"
                id="nombre"
                placeholder="Nombre"
              />
              <small id="helpId" class="form-text" text-muted>Ingresa el nombre del departamento</small>
            </div><br>
            <div class="btn-group" role="group">
              |<button type="submit" class="btn btn-success">Editar</button>|
              |<router-link :to="{ path: '/dashboard/listardepartamento' }" class="btn btn-danger">Cancelar</router-link>|
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
 
<script>
import axios from 'axios';
export default{
    name: "Editar",
    components:{

    },
    data:function(){
        return{
            pkCliente: null,
            form:{
                "pkDepartamento":"",
                "nombre":"",
            },
        }
    },
    
    methods: {
      editarDepartamento() {
        axios.put("https://localhost:7241/Departamento/" + this.pkDepartamento, this.form).then
        (data=>{
            console.log(data);
        });
        this.$router.push("/dashboard/listardepartamento")
      }
    },
    mounted:function(pkDepartamento){
        this.pkDepartamento = this.$route.params.pkDepartamento;
        console.log(this.pkDepartamento);
        axios.get("https://localhost:7241/Departamento/" + this.pkDepartamento)
        .then(datos=>{          
            this.form.pkDepartamento = datos.data.value.result.pkDepartamento;
            this.form.nombre = datos.data.value.result.nombre;
            console.log(this.form);
        });

    },
}
</script>