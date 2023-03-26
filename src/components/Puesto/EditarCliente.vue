<template>
    <div class="container">
      <div class="card">
        <div class="card-header">Editar Cliente</div>
        <div class="card-body">
          <form v-on:submit.prevent="agregarCliente">
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
              <small id="helpId" class="form-text" text-muted>Ingresa tu nombre</small>
            </div><br>
            <div class="form-group">
              <label for="">Apellido:</label>
              <input
                type="text"
                class="form-control"
                name="apellido"
                id="apellido"
                v-model="form.apellido"
                aria-describedby="helpId"
                placeholder="Apellido"
              />
              <small id="helpId" class="form-text" text-muted>Ingresa tu Apellido</small>
            </div><br>
            <div class="form-group">
              <label for="">Telefono:</label>
              <input
                type="text"
                class="form-control"
                name="telefono"
                id="telefono"
                v-model="form.telefono"
                aria-describedby="helpId"
                placeholder="Telefono"
              />
              <small id="helpId" class="form-text" text-muted>Ingresa tu Telefono</small>
            </div><br/>
            <div class="form-group">
              <label for="">Email:</label>
              <input
                type="text"
                class="form-control"
                name="email"
                id="email"
                v-model="form.email"
                aria-describedby="helpId"
                placeholder="Email"
              />
              <small id="helpId" class="form-text" text-muted>Ingresa tu Email</small>
            </div><br/>
            <div class="form-group">
              <label for="">Dirección:</label>
              <input
                type="text"
                class="form-control"
                name="direccion"
                id="direccion"
                v-model="form.direccion"
                aria-describedby="helpId"
                placeholder="Dirección"
              />
              <small id="helpId" class="form-text" text-muted>Ingresa tu Dirección</small>
            </div><br/>
  
            <div class="btn-group" role="group">
              |<button type="submit" class="btn btn-success">Editar</button>|
              |<router-link :to="{ path: '/dashboard/listarcliente' }" class="btn btn-danger">Cancelar</router-link>|
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
            pkCliente: null,
            form:{
                "pkCliente":"",
                "nombre":"",
                "apellido":"",
                "telefono":"",
                "email":"",
                "direccion":"",
            },
        }
    },
    
    methods: {
      agregarCliente() {
        axios.put("https://localhost:7241/Cliente/" + this.pkCliente, this.form).then
        (data=>{
            console.log(data);
        });
        this.$router.push("/dashboard/listarcliente")
      }
    },
    mounted:function(pkCliente){
        this.pkCliente = this.$route.params.pkCliente;
        console.log(this.pkCliente);
        axios.get("https://localhost:7241/Cliente/" + this.pkCliente)
        .then(datos=>{          
            this.form.pkCliente = datos.data.value.result.pkCliente;
            this.form.nombre = datos.data.value.result.nombre;
            this.form.apellido = datos.data.value.result.apellido;
            this.form.telefono = datos.data.value.result.telefono;
            this.form.email = datos.data.value.result.email;
            this.form.direccion = datos.data.value.result.direccion;
            console.log(this.form);
        });

    },
}
</script>