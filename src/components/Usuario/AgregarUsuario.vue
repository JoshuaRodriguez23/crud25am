<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Agregar Factura</div>
      <div class="card-body">
        <form v-on:submit.prevent="agregarFactura">
          <div class="form-group">
            <label for="">Razón Social:</label>
            <input
              type="text"
              class="form-control"
              name="razonSocial"
              v-model="form.razonSocial"
              aria-describedby="helpId"
              id="razonSocial"
              placeholder="Razón Social"
            />
            <small id="helpId" class="form-text" text-muted>Ingresa la razón social:</small>
          </div><br>

          <div class="form-group">
            <label for="">Fecha:</label>
            <input
              type="date"
              class="form-control"
              name="fecha"
              id="fecha"
              v-model="form.fecha"
              aria-describedby="helpId"
              placeholder="Fecha"
            />
            <small id="helpId" class="form-text" text-muted>Introduce la fecha</small>
          </div><br>

          <div class="form-group">
            <label for="">RFC:</label>
            <input
              type="text"
              class="form-control"
              name="rfc"
              id="rfc"
              v-model="form.rfc"
              aria-describedby="helpId"
              placeholder="RFC"
            />
            <small id="helpId" class="form-text" text-muted>Ingresa tu RFC</small>
          </div><br/>
            <!-- ------------------------------------------------------ -->
          <div class="form-group">
            <label for="cliente">Cliente</label>
            <select class="form-control" name="cliente" id="cliente" v-model="form.fkCliente">
              <option v-for="cliente in Clientes" :value="cliente.pkCliente" :key="cliente.pkCliente">{{cliente.nombre}}</option>
            </select>
          </div><br/>
          <!-- ------------------------------------------------------ -->
          <div class="btn-group" role="group">
            |<button type="submit" class="btn btn-success">Agregar</button>|
            |<router-link :to="{ path: '/dashboard/listarfactura' }" class="btn btn-danger">Cancelar</router-link>|
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
                "pkFactura":"",
                "razonSocial":"",
                "fecha":"",
                "rfc":"",
                "fkCliente":"",
            },
            Clientes:[],

      };
    },
    created: function () {
      this.consultarCliente();
    },
    methods: {
      agregarFactura() {
        console.log(this.articulo);
  
        var datosEnviar = {
          pkFactura: this.form.pkFactura,
          razonSocial: this.form.razonSocial,
          fecha: this.form.fecha,
          rfc: this.form.rfc,
          fkCliente:this.form.fkCliente,
        };
        axios
          .post("https://localhost:7241/Factura", datosEnviar)
          .then((result) => {
            console.log(result);
          });
          this.$router.push("/dashboard/listarfactura")
        },
          consultarCliente() {
          axios.get("https://localhost:7241/Cliente").then((result) => {
          console.log(result.data.result);
          this.Clientes = result.data.result;});
        },
    },
  };
  </script>