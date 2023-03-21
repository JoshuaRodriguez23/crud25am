<template>
    <div>
      <div class="card">
        <div class="card-header">Usuarios</div>
        
        <div class="card_body">
          <table class="table table-striped table-bordered">
            <thead>
              <tr>
                <th>PkUsuario</th>
                <th>User</th>
                <th>Password</th>
                <th>FechaRegistro</th>
                <th>FkEmapleado</th>
                <th>FkRol</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="usuario in Usuarios" :key="usuario.PkUsuario">
                <td>{{ usuario.pkUsuario }}</td>
                <td>{{ usuario.user }}</td>
                <td>{{ usuario.password }}</td>
                <td>{{ usuario.fechaRegistro }}</td>
                <td>{{ usuario.fkEmpleado }}</td>
                <td>{{ usuario.fkRol }}</td>               
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

    borrarArticulo(id) {
      console.log(id);

      axios.delete("https://localhost:7053/articulos/borrar/" + id);

      window.location.href = "Listar";
    },
  },
};
</script>