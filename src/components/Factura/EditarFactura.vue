<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Editar Factura</div>
      <div class="card-body">
        <form v-on:submit.prevent="editarFactura">
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
            |<button type="submit" class="btn btn-success">Editar</button>|
            |<router-link :to="{ path: '/dashboard/listarfactura' }" class="btn btn-danger">Cancelar</router-link>|
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
 
<script>
import axios from 'axios';
export default{
    name: "Editar",
    components:{

    },
    data:function(){
        return{
            pkFactura: null,
            form:{
              "pkFactura":"",
              "razonSocial":"",
              "fecha":"",
              "rfc":"",
              "fkCliente":"",
              },
              Clientes:[],
        }
    },
      created: function () {
        this.consultarCliente();
      },
    methods: {
      editarFactura() {
        axios.put("https://localhost:7241/Factura/" + this.pkFactura, this.form).then
        (data=>{
            console.log(data);
        });
        this.$router.push("/dashboard/listarfactura")
      },      
      consultarCliente() {
            axios.get("https://localhost:7241/Cliente").then((result) => {
            console.log(result.data.result);
            this.Clientes = result.data.result;});
          },
    },
    mounted:function(pkFactura){
        this.pkFactura = this.$route.params.pkFactura;
        console.log(this.pkFactura);
        axios.get("https://localhost:7241/Factura/" + this.pkFactura)
        .then(datos=>{          
            this.form.pkFactura = datos.data.value.result.pkFactura;
            this.form.razonSocial = datos.data.value.result.razonSocial;
            this.form.fecha = datos.data.value.result.fecha;
            this.form.rfc = datos.data.value.result.rfc;
            this.form.fkCliente = datos.data.value.result.fkCliente;
            console.log(this.form);
        });

    },
}
</script>