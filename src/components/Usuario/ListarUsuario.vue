<template>
    <div>
      <div class="card">
        <div class="row">
            <div class="col">
                 <h5 class="my-2 mr-md-auto font-weight-normal"></h5>
            </div>
            <div class="col-md-8">
               <h5 class="my-2 mr-md-auto font-weight-normal" style="align-items: center;">Usuarios</h5>
            </div>
            <div class="col col-lg-2">
               <h5 class="my-2 mr-md-auto font-weight-normal">
                <router-link to="/dashboard/agregarusuario" class="btn btn-warning">
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
                <th>PkUsuario</th>
                <th>User</th>
                <th>Password</th>
                <th>FechaaRegistro</th>
                <th>Empleado</th>
                <th>Rol</th>
                <th>Editar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="usuario in Usuarios" :key="usuario.PkUsuario">
                <td>{{ usuario.pkUsuario }}</td>
                <td>{{ usuario.user }}</td>
                <td>{{ usuario.password }}</td>
                <td>{{ usuario.fechaRegistro }}</td>
                <td>{{ usuario.empleado.nombre }}</td>
                <td>{{ usuario.rol.nombre }}</td>  
                <td>
                  <div class="btn-group" role="label" aria-label="">
                  <button type="button" v-on:click="editarUsuario(usuario.pkUsuario)" class="btn btn-warning">Editar</button>
                </div>
                </td>           
                <td>
                <div class="btn-group" role="label" aria-label="">
                  <button type="button" v-on:click="borrarUsuario(usuario.pkUsuario)" class="btn btn-danger">Eliminar</button>
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
      Usuarios: [],
      // timenow: new Date(this.Usuarios.fechaRegistro).getTime()
    };
  },
  created: function () {
    this.consultarUsuarios();
  },
  methods: {
    consultarUsuarios() {
      axios.get("https://localhost:7241/Usuarios").then((result) => {
        console.log(result.data.result);
        this.Usuarios = result.data.result;
      });
    },
    editarUsuario(pkUsuario){
      console.log(pkUsuario);
      this.$router.push("/editarusuario/" + pkUsuario)
    },
    borrarUsuario(pkUsuario) {
      console.log(pkUsuario);
      axios.delete("https://localhost:7053/Usuarios/borrar/" + pkUsuario);

      window.location.href = "listarusuario";
    },
  },
};
</script>