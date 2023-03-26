<template>
    <div class="container">
      <div class="card">
        <div class="card-header">Editar Empleado</div>
        <div class="card-body">
          <form v-on:submit.prevent="editarEmpleado">
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
                v-model="form.apellidos"
                aria-describedby="helpId"
                placeholder="Apellido"
              />
              <small id="helpId" class="form-text" text-muted>Ingresa tu Apellido</small>
            </div><br>
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
            <div class="form-group">
              <label for="">Ciudad:</label>
              <input
                type="text"
                class="form-control"
                name="ciudad"
                id="ciudad"
                v-model="form.ciudad"
                aria-describedby="helpId"
                placeholder="Ciudad"
              />
              <small id="helpId" class="form-text" text-muted>Ingresa tu Ciudad</small>
            </div><br/>
            <div class="form-group">
              <label for="">Puesto:</label>
              <input
                type="text"
                class="form-control"
                name="puesto"
                id="puesto"
                v-model="form.puesto"
                aria-describedby="helpId"
                placeholder="Puesto"
              />
              <small id="helpId" class="form-text" text-muted>Ingresa tu Puesto</small>
            </div><br/>
            <div class="form-group">
              <label for="">Departamento:</label>
              <input
                type="text"
                class="form-control"
                name="departamento"
                id="departamento"
                v-model="form.departamento"
                aria-describedby="helpId"
                placeholder="Departamento"
              />
              <small id="helpId" class="form-text" text-muted>Ingresa tu Departamento</small>
            </div><br/>
  
            <div class="btn-group" role="group">
              |<button type="submit" class="btn btn-success">Editar</button>|
              |<router-link :to="{ path: '/dashboard/listarempleado' }" class="btn btn-danger">Cancelar</router-link>|
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
            pkEmpleado: null,
            form:{
                "pkEmpleado":"",
                "nombre":"",
                "apellidos":"",
                "direccion":"",
                "ciudad":"",
                "puesto":"",
                "departamento":"",
            },
        }
    },
    
    methods: {
      editarDepartamento() {
        axios.put("https://localhost:7241/Empleado/" + this.pkEmpleado, this.form).then
        (data=>{
            console.log(data);
        });
        this.$router.push("/dashboard/listarempleado")
      }
    },
    mounted:function(pkEmpleado){
        this.pkEmpleado = this.$route.params.pkEmpleado;
        console.log(this.pkEmpleado);
        axios.get("https://localhost:7241/Empleado/" + this.pkEmpleado)
        .then(datos=>{          
            this.form.pkEmpleado = datos.data.value.result.pkEmpleado
            this.form.nombre = datos.data.value.result.nombre
            this.form.apellidos = datos.data.value.result.apellidos
            this.form.direccion = datos.data.value.result.direccion
            this.form.ciudad = datos.data.value.result.ciudad
            this.form.puesto = datos.data.value.result.puesto
            this.form.departamento = datos.data.value.result.departamento;
            console.log(this.form);
        });

    },
}
</script>