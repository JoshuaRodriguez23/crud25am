
    <template>
    <div class="container">
      <div class="card">
        <div class="card-header">Agregar Empleado</div>
        <div class="card-body">
          <form v-on:submit.prevent="agregarEmpleado">
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
            <!-- ------------------------------------------------------ -->
              <label for="puesto">Puesto</label>
              <select class="form-control" name="puesto" id="puesto" v-model="form.fkPuesto">
                <option v-for="puesto in puestos" :value="puesto.pkpuesto" :key="puesto.pkpuesto">{{puesto.nombre}}</option>
              </select>
            </div><br/>
            <!-- ------------------------------------------------------ -->
            <div class="form-group">
              <label for="departamento">Departamento</label>
              <select class="form-control" name="departamento" id="departamento" v-model="form.fkDepartamento">
                <option v-for="departamento in departamentos" :value="departamento.pkDepartamento" :key="departamento.pkDepartamento">{{departamento.nombre}}</option>
              </select>
              <!-- ------------------------------------------------------ -->
            </div><br/>
  
            <div class="btn-group" role="group">
              |<button type="submit" class="btn btn-success">Agregar</button>|
              |<router-link :to="{ path: '/dashboard/listarempleado' }" class="btn btn-danger">Cancelar</router-link>|
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
                  "pkEmpleado":"",
                  "nombre":"",
                  "apellido":"",
                  "direccion":"",
                  "ciudad":"",
                  "fkPuesto":"",
                  "fkDepartamento":""
              },
              puestos:[],
              departamentos:[],
        };
      },
      created: function () {
        this.consultarPuesto();
        this.consultarDepartamento();    
      },
      methods: {
        agregarEmpleado() {
          console.log(this.form);
    
          var datosEnviar = {
            pkEmpleado : this.form.pkEmpleado,
            nombre : this.form.nombre,
            apellido : this.form.apellido,
            direccion : this.form.direccion,
            ciudad :this.form.ciudad,
            fkPuesto :this.form.fkPuesto,
            fkDepartamento :this.form.fkDepartamento                                                                                 
          };
    
          axios
            .post("https://localhost:7241/Empleado", datosEnviar)
            .then((result) => {
              console.log(result);
            });
            this.$router.push("/dashboard/listarempleado")
          },
            consultarDepartamento() {
            axios.get("https://localhost:7241/Departamento").then((result) => {
            console.log(result.data.result);
            this.departamentos = result.data.result;});
          },
            consultarPuesto() {
            axios.get("https://localhost:7241/Puesto").then((result) => {
            console.log(result.data.result);
            this.puestos = result.data.result;});
          },
      },
    };
    </script>