<template>
    <div>
      <div class="card">
        <div class="row">
            <div class="col">
                 <h5 class="my-2 mr-md-auto font-weight-normal"></h5>
            </div>
            <div class="col-md-8">
               <h5 class="my-2 mr-md-auto font-weight-normal" style="align-items: center;">Factura</h5>
            </div>
            <div class="col col-lg-2">
               <h5 class="my-2 mr-md-auto font-weight-normal">
                <router-link to="/dashboard/agregarfactura" class="btn btn-warning">
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
                <th>PkFactura</th>
                <th>Razón Social</th>
                <th>Fecha</th>
                <th>RFC</th>
                <th>Cliente</th>                            
                <th>Editar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="factura in Facturas" :key="factura.PkFactura">
                <td>{{ factura.pkFactura }}</td>
                <td>{{ factura.razonSocial }}</td>
                <td>{{ factura.fecha }}</td>
                <td>{{ factura.rfc }}</td>
                <td>{{ factura.cliente.nombre }}</td>                
                <td>
                  <div class="btn-group" role="label" aria-label="">
                  <button type="button" v-on:click="editarFactura(factura.pkFactura)" class="btn btn-warning">Editar</button>
                </div>
                </td>           
                <td>
                <div class="btn-group" role="label" aria-label="">
                  <button type="button" v-on:click="borrarFactura(factura.pkFactura)" class="btn btn-danger">Eliminar</button>
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
      Facturas: [],
      Clientes:[],
    };
  },
  created: function () {
    this.consultarFacturas();       
  },
  methods: {
    consultarFacturas() {
      axios.get("https://localhost:7241/Factura").then((result) => {
        console.log(result.data.result);
        this.Facturas = result.data.result;
      });
    },
    borrarFactura(PkFactura) {
      console.log(PkFactura);

      axios.delete("https://localhost:7241/Factura/" + PkFactura);

      window.location.href = "listarfactura";
    },
    editarFactura(PkFactura){
      console.log(PkFactura);
      this.$router.push("/editarfactura/" + PkFactura)
    },
  },
};
</script>
<style>
span{
  color: black;
}
</style>