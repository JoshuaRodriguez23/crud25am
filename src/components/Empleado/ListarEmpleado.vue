<template>
    <div>
      <div class="card">
        <div class="row">
            <div class="col">
                 <h5 class="my-2 mr-md-auto font-weight-normal"></h5>
            </div>
            <div class="col-md-8">
               <h5 class="my-2 mr-md-auto font-weight-normal" style="align-items: center;">Empleados</h5>
            </div>
            <div class="col col-lg-2">
               <h5 class="my-2 mr-md-auto font-weight-normal">
                <router-link to="/dashboard/agregarempleado" class="btn btn-warning">
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
                <th>PkEmpleado</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Direccion</th>
                <th>Ciudad</th>
                <th>Puesto</th>                
                <th>Departamento</th>                
                <th>Editar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="empleado in Empleados" :key="empleado.pkEmpleado">
                <td>{{ empleado.pkEmpleado }}</td>
                <td>{{ empleado.nombre }}</td>
                <td>{{ empleado.apellidos }}</td>
                <td>{{ empleado.direccion }}</td>
                <td>{{ empleado.ciudad }}</td>
                <td>{{ empleado.puesto.nombre }}</td>  
                <td>{{ empleado.departamento.nombre }}</td>  
                <td>
                  <div class="btn-group" role="label" aria-label="">
                  <button type="button" v-on:click="editarEmpleado(empleado.pkEmpleado)" class="btn btn-warning">Editar</button>
                </div>
                </td>           
                <td>
                <div class="btn-group" role="label" aria-label="">
                  <button type="button" v-on:click="borrarEmpleado(empleado.pkEmpleado)" class="btn btn-danger">Eliminar</button>
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
      Empleados: [],
    };
  },
  created: function () {
    this.consultarEmpleados();    
  },
  methods: {
    consultarEmpleados() {
      axios.get("https://localhost:7241/Empleado").then((result) => {
        console.log(result.data.result);
        this.Empleados = result.data.result;
      });
    },
    borrarEmpleado(pkEmpleado) {
      console.log(pkEmpleado);

      axios.delete("https://localhost:7241/Empleado/" + pkEmpleado);

      window.location.href = "listarempleado";
    },
    editarEmpleado(pkEmpleado){
      console.log(pkEmpleado);
      this.$router.push("/EditarEmpleado/" + pkEmpleado)
    },
  },
};
</script>
<style>
span{
  color: black;
}
</style>