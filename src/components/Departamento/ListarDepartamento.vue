<template>
  <div>
    <div class="card">
      <div class="row">
          <div class="col">
               <h5 class="my-2 mr-md-auto font-weight-normal"></h5>
          </div>
          <div class="col-md-8">
             <h5 class="my-2 mr-md-auto font-weight-normal" style="align-items: center;">Departamentos</h5>
          </div>
          <div class="col col-lg-2">
             <h5 class="my-2 mr-md-auto font-weight-normal">
              <router-link to="/dashboard/agregardepartamento" class="btn btn-warning">
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
              <th>pkDepartamento</th>
              <th>Nombre</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="Departamento in Departamentos" :key="Departamento.pkDepartamento">
              <td>{{ Departamento.pkDepartamento }}</td>
              <td>{{ Departamento.nombre }}</td> 
              <td>
                <div class="btn-group" role="label" aria-label="">
                <button type="button" v-on:click="editarArticulo(Departamento.pkDepartamento)" class="btn btn-warning">Editar</button>
              </div>
              </td>           
              <td>
              <div class="btn-group" role="label" aria-label="">
                <button type="button" v-on:click="borrarArticulo(Departamento.pkDepartamento)" class="btn btn-danger">Eliminar</button>
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
    Departamentos: [],
  };
},
created: function () {
  this.consultarDepartamentos();    
},
methods: {
  consultarDepartamentos() {
    axios.get("https://localhost:7241/Departamento").then((result) => {
      console.log(result.data.result);
      this.Departamentos = result.data.result;
    });
  },
  borrarArticulo(pkDepartamento) {
    console.log(pkCliente);

    axios.delete("https://localhost:7241/Departamento/" + pkDepartamento);

    window.location.href = "listardepartamento";
  },
  editarArticulo(pkDepartamento){
    console.log(pkDepartamento);
    this.$router.push("/editardepartamento/" + pkDepartamento)
  },
 },
};
</script>
<style>
span{
color: black;
}
</style>