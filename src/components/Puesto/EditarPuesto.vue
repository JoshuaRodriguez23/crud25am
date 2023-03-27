<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Editar Puesto</div>
      <div class="card-body">
        <form v-on:submit.prevent="editarPuesto">
          <div class="form-group">
            <label for="">Nombre del puesto:</label>
            <input
              type="text"
              class="form-control"
              name="nombre"
              v-model="form.nombre"
              aria-describedby="helpId"
              id="nombre"
              placeholder="Nombre"
            />
            <small id="helpId" class="form-text" text-muted>Ingresa el nombre del puesto</small>
          </div><br>           

          <div class="btn-group" role="group">
            |<button type="submit" class="btn btn-success">Agregar</button>|
            |<router-link :to="{ path: '/dashboard/listarpuesto' }" class="btn btn-danger">Cancelar</router-link>|
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
                "pkpuesto":"",
                "nombre":"",
            },
        }
    },
    
    methods: {
      editarPuesto() {
        axios.put("https://localhost:7241/Puesto/" + this.pkpuesto, this.form).then
        (data=>{
            console.log(data);
        });
        this.$router.push("/dashboard/listarpuesto")
      }
    },
    mounted:function(pkpuesto){
        this.pkpuesto = this.$route.params.pkpuesto;
        console.log(this.pkpuesto);
        axios.get("https://localhost:7241/Cliente/" + this.pkpuesto)
        .then(datos=>{          
            this.form.pkpuesto = datos.data.value.result.pkpuesto;
            this.form.nombre = datos.data.value.result.nombre;
            console.log(this.form);
        });

    },
}
</script>