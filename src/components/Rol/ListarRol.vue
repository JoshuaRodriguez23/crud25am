<template>
    <div>
      <div class="card">
        <div class="row">
            <div class="col">
                 <h5 class="my-2 mr-md-auto font-weight-normal"></h5>
            </div>
            <div class="col-md-8">
               <h5 class="my-2 mr-md-auto font-weight-normal" style="align-items: center;">Rol</h5>
            </div>
            <div class="col col-lg-2">
               <h5 class="my-2 mr-md-auto font-weight-normal">
                <router-link to="/dashboard/agregarrol" class="btn btn-warning">
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
                <th>PkRol</th>
                <th>Nombre</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="rol in Roles" :key="rol.pkRol">
                <td>{{ rol.pkRol }}</td>
                <td>{{ rol.nombre }}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                  <button type="button" v-on:click="editarArticulo(rol.pkRol)" class="btn btn-warning">Editar</button>
                </div>
                </td>           
                <td>
                <div class="btn-group" role="label" aria-label="">
                  <button type="button" v-on:click="borrarArticulo(rol.pkRol)" class="btn btn-danger">Eliminar</button>
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
import { restProperty } from "@babel/types";
import axios from "axios";
export default {
  data() {
    return {
      Roles: [],
    };
  },
  created: function () {
    this.consultarRoles();    
  },
  methods: {
    consultarRoles() {
      axios.get("https://localhost:7241/Rol").then((result) => {
        console.log(result.data.result);
        this.Roles = result.data.result;
      });
    },
    borrarArticulo(pkRol) {
      console.log(pkRol);

      axios.delete("https://localhost:7241/Rol/" + pkRol);

      window.location.href = "listarrol";
    },
    editarArticulo(pkRol){
      console.log(pkRol);
      this.$router.push("/editarrol/" + pkRol)
    },
  },
};
</script>
<style>
span{
  color: black;
}
</style>