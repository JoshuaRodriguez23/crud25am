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