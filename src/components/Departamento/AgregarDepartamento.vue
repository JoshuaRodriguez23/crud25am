<template>
    <div class="container">
      <div class="card">
        <div class="card-header">Agregar Departamento</div>
        <div class="card-body">
          <form v-on:submit.prevent="agregarDepartamento">
            <div class="form-group">
              <label for="">Nombre:</label>
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
              |<button type="submit" class="btn btn-success">Agregar</button>|
              |<router-link :to="{ path: '/dashboard/listardepartamento' }" class="btn btn-danger">Cancelar</router-link>|
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
    
    <script>
    import axios from "axios";
    export default {
      data() {
        return {
          form:{
                  "pkDepartamento":"",
                  "nombre":"",
              },
        };
      },
    
      methods: {
        agregarDepartamento() {
          console.log(this.articulo);
    
          var datosEnviar = {
            pkCliente: this.form.pkDepartamento,
            nombre: this.form.nombre,
          };
    
          axios
            .post("https://localhost:7241/Departamento", datosEnviar)
            .then((result) => {
              console.log(result);
            });
            this.$router.push("/dashboard/listardepartamento")
          },
      },
    };
    </script>