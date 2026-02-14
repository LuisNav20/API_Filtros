const inst = Vue.createApp({
    created(){
        this.cargarPersonajes();
        this.personajesFiltrados=this.personajes;
    },
    data(){
        return{
            personajes:[],
            personajesFiltrados:[],
            seleccionarCategoria:'Todos',
            personajeSeleccionado: null,
        }
    },
    methods:{
        cargarPersonajes(){
                axios.get("https://dragonball-api.com/api/characters?limit=10").then(respuesta =>{
                    this.personajes = respuesta.data.items;
                    console.log(respuesta);
                    this.personajesFiltrados=this.personajes;
                });
        },
        filtrarCategoria(categoria){
            this.seleccionarCategoria = categoria;
            if(this.seleccionarCategoria=='Todos'){
                this.personajesFiltrados=this.personajes;
            }
            else{
                this.personajesFiltrados=this.personajes.filter(personaje=>personaje.race.includes(categoria));
            }
        },
        mostrarDescripcion(personaje){
            this.personajeSeleccionado = personaje;
        },
        ocultarDescripcion(){
            this.personajeSeleccionado = null;
        }

    }
   
        
});

const app = inst.mount("#contenedor")
