<template>
    <div>
      <div class="card">
        <div class="row">
            <div class="col">
                 <h5 class="my-2 mr-md-auto font-weight-normal"></h5>
            </div>
            <div class="col-md-8">
               <h5 class="my-2 mr-md-auto font-weight-normal" style="align-items: center;">Clientes</h5>
            </div>
            <div class="col col-lg-2">
               <h5 class="my-2 mr-md-auto font-weight-normal">
                <router-link to="/dashboard/agregarcliente" class="btn btn-warning">
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
                <th>PkCliente</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Direccion</th>
                <th>Telefono</th>
                <th>Email</th>                
                <th>Editar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="cliente in Clientes" :key="cliente.pkCliente">
                <td>{{ cliente.pkCliente }}</td>
                <td>{{ cliente.nombre }}</td>
                <td>{{ cliente.apellido }}</td>
                <td>{{ cliente.telefono }}</td>
                <td>{{ cliente.email }}</td>
                <td>{{ cliente.direccion }}</td>  
                <td>
                  <div class="btn-group" role="label" aria-label="">
                  <button type="button" v-on:click="editarArticulo(cliente.pkCliente)" class="btn btn-warning">Editar</button>
                </div>
                </td>           
                <td>
                <div class="btn-group" role="label" aria-label="">
                  <button type="button" v-on:click="borrarArticulo(cliente.pkCliente)" class="btn btn-danger">Eliminar</button>
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
      Clientes: [],
    };
  },
  created: function () {
    this.consultarClientes();    
  },
  methods: {
    consultarClientes() {
      axios.get("https://localhost:7241/Cliente").then((result) => {
        console.log(result.data.result);
        this.Clientes = result.data.result;
      });
    },
    borrarArticulo(pkCliente) {
      console.log(pkCliente);

      axios.delete("https://localhost:7241/Cliente/" + pkCliente);

      window.location.href = "ListarCliente";
    },
    editarArticulo(pkCliente){
      console.log(pkCliente);
      this.$router.push("/EditarCliente/" + pkCliente)
    },
  },
};
</script>
<style>
span{
  color: black;
}
</style>