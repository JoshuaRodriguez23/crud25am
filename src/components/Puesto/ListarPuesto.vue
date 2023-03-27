<template>
    <div>
      <div class="card">
        <div class="row">
            <div class="col">
                 <h5 class="my-2 mr-md-auto font-weight-normal"></h5>
            </div>
            <div class="col-md-8">
               <h5 class="my-2 mr-md-auto font-weight-normal" style="align-items: center;">Puesto</h5>
            </div>
            <div class="col col-lg-2">
               <h5 class="my-2 mr-md-auto font-weight-normal">
                <router-link to="/dashboard/agregarpuesto" class="btn btn-warning">
			          	<span class="material-icons">web</span>
			          	<span class="text">Agregar</span>
			          </router-link>
              </h5>
            </div>
         </div>       
        
        <div class="card_body">
          <table class="table table-striped table-bordered">
            <thead>
              <tr>
                <th>PkPuesto</th>
                <th>Nombre</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="puesto in Puestos" :key="puesto.pkpuesto">
                <td>{{ puesto.pkpuesto }}</td>
                <td>{{ puesto.nombre }}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                  <button type="button" v-on:click="editarArticulo(puesto.pkpuesto)" class="btn btn-warning">Editar</button>
                </div>
                </td>           
                <td>
                <div class="btn-group" role="label" aria-label="">
                  <button type="button" v-on:click="borrarArticulo(puesto.pkpuesto)" class="btn btn-danger">Eliminar</button>
                </div>
                </td>           
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      Puestos: [],
    };
  },
  created: function () {
    this.consultarPuestos();    
  },
  methods: {
    consultarPuestos() {
      axios.get("https://localhost:7241/Puesto").then((result) => {
        console.log(result.data.result);
        this.Puestos = result.data.result;
      });
    },
    borrarArticulo(pkpuesto) {
      console.log(pkpuesto);

      axios.delete("https://localhost:7241/Puesto/" + pkpuesto);

      window.location.href = "listarpuesto";
    },
    editarArticulo(pkpuesto){
      console.log(pkpuesto);
      this.$router.push("/editarpuesto/" + pkpuesto)
    },
  },
};
</script>
<style>
span{
  color: black;
}
</style>