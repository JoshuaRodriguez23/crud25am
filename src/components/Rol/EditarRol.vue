<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Editar Rol</div>
      <div class="card-body">
        <form v-on:submit.prevent="editarRol">
          <div class="form-group">
            <label for="">Nombre del rol:</label>
            <input
              type="text"
              class="form-control"
              name="nombre"
              v-model="form.nombre"
              aria-describedby="helpId"
              id="nombre"
              placeholder="Nombre"
            />
            <small id="helpId" class="form-text" text-muted>Ingresa el nombre del rol</small>
          </div><br>           

          <div class="btn-group" role="group">
            |<button type="submit" class="btn btn-success">Editar</button>|
            |<router-link :to="{ path: '/dashboard/listarrol' }" class="btn btn-danger">Cancelar</router-link>|
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
          pkpuesto: null,
            form:{
                "pkRol":"",
                "nombre":"",
            },
        }
    },
    
    methods: {
      editarPuesto() {
        axios.put("https://localhost:7241/Rol/" + this.pkRol, this.form).then
        (data=>{
            console.log(data);
        });
        this.$router.push("/dashboard/listarrol")
      }
    },
    mounted:function(pkRol){
        this.pkRol = this.$route.params.pkRol;
        console.log(this.pkRol);
        axios.get("https://localhost:7241/Rol/" + this.pkRol)
        .then(datos=>{          
            this.form.pkRol = datos.data.value.result.pkRol;
            this.form.nombre = datos.data.value.result.nombre;
            console.log(this.form);
        });

    },
}
</script>