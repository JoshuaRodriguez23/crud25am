<template>
    <div class="container">
      <div class="card">
        <div class="card-header">Agregar Rol</div>
        <div class="card-body">
          <form v-on:submit.prevent="agregarRol">
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
              |<button type="submit" class="btn btn-success">Agregar</button>|
              |<router-link :to="{ path: '/dashboard/listarrol' }" class="btn btn-danger">Cancelar</router-link>|
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
                  "pkRol":"",
                  "nombre":"",                  
              },
        };
      },
    
      methods: {
        agregarRol() {
          console.log(this.form);
    
          var datosEnviar = {
            pkRol: this.form.pkRol,
            nombre: this.form.nombre,            
          };
    
          axios
            .post("https://localhost:7241/Rol", datosEnviar)
            .then((result) => {
              console.log(result);
            });
            this.$router.push("/dashboard/listarrol")
          },
      },
    };
    </script>