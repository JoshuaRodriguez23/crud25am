<template>
    <div class="container">
      <div class="card">
        <div class="card-header">Agregar Puesto</div>
        <div class="card-body">
          <form v-on:submit.prevent="agregarPuesto">
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
    import axios from "axios";
    export default {
      data() {
        return {
          form:{
                  "pkpuesto":"",
                  "nombre":"",                  
              },
        };
      },
    
      methods: {
        agregarPuesto() {
          console.log(this.form);
    
          var datosEnviar = {
            pkpuesto: this.form.pkpuesto,
            nombre: this.form.nombre,            
          };
    
          axios
            .post("https://localhost:7241/Puesto", datosEnviar)
            .then((result) => {
              console.log(result);
            });
            this.$router.push("/dashboard/listarpuesto")
          },
      },
    };
    </script>