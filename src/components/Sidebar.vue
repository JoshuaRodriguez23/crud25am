<template>
	<aside :class="`${is_expanded ? 'is-expanded' : ''}`">
		<div class="logo">
			<img src="https://64.media.tumblr.com/tumblr_mbk4icecRT1rfjowdo1_500.gifv" alt="Vue" /> 
			<h3>Bienvenido</h3>
		</div>
		<div class="menu-toggle-wrap">
			<button class="menu-toggle" @click="ToggleMenu">
				<span class="material-icons">keyboard_double_arrow_right</span>
			</button>
		</div>


		<h3 style="color: white">Menu</h3>
		<div class="menu">
			<router-link to="/dashboard/listarcliente" class="button">
				<span class="material-icons">groups</span>
				<span class="text">Clientes</span>
			</router-link>
			<router-link to="/dashboard/listardepartamento" class="button">
				<span class="material-icons">web</span>
				<span class="text">Departamentos</span>
			</router-link>
			<router-link to="/dashboard/listarempleado" class="button">
				<span class="material-icons">engineering</span>
				<span class="text">Empleados</span>
			</router-link>
			<router-link to="/dashboard/listarfactura" class="button">				
				<span class="material-icons">request_page</span>
				<span class="text">Facturas</span>
			</router-link>
			<router-link to="/dashboard/listarpuesto" class="button">				
				<span class="material-icons">business_center</span>
				<span class="text">Puestos</span>
			</router-link>
			<router-link to="/dashboard/listarrol" class="button">				
				<span class="material-icons">supervisor_account</span>
				<span class="text">Roles</span>
			</router-link>
			<router-link to="/dashboard/listarusuario" class="button">				
				<span class="material-icons">switch_account</span>
				<span class="text">Usuarios</span>
			</router-link>
		</div>

		<div class="flex"></div>
		<div class="menu">
			<router-link to="/settings" class="button">				
				<span class="material-icons">logout</span>
				<span class="text">Cerrar sesión</span>
			</router-link>
		</div>
	</aside>	
</template>

<script setup>
import { ref } from 'vue'

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value
	localStorage.setItem("is_expanded", is_expanded.value)
}
</script>

<style lang="scss" scoped>
aside {
	display: flex;
	flex-direction: column;

	background-color: var(--dark);
	color: var(--light);

	width: calc(2rem + 32px);
	overflow: hidden;
	min-height: 100vh;
	padding: 1rem;

	transition: 0.2s ease-in-out;

	.flex {
		flex: 1 1 0%;
	}

	.logo {
		margin-bottom: 0.5rem;
		img {
  		min-width: 50%;
  		width: 50px;  
		}

	}

	.menu-toggle-wrap {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 1rem;

		position: relative;
		top: 0;
		transition: 0.2s ease-in-out;

		.menu-toggle {
			transition: 0.2s ease-in-out;
			.material-icons {
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-out;
			}
			
			&:hover {
				.material-icons {
					color: var(--primary);
					transform: translateX(0.5rem);
				}
			}
		}
	}

	h3, .button .text {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}

	h3 {
		color: var(--grey);
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
	}

	.menu {
		margin: 0 -1rem;

		.button {
			display: flex;
			align-items: center;
			text-decoration: none;

			transition: 0.2s ease-in-out;
			padding: 0.5rem 1rem;

			.material-icons {
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-in-out;
			}
			.text {
				color: var(--light);
				transition: 0.2s ease-in-out;
			}

			&:hover {
				background-color: var(--dark-alt);

				.material-icons, .text {
					color: var(--primary);
				}
			}

			&.router-link-exact-active {
				background-color: var(--dark-alt);
				border-right: 5px solid var(--primary);

				.material-icons, .text {
					color: var(--primary);
				}
			}
		}
	}

	.footer {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;

		p {
			font-size: 0.875rem;
			color: var(--grey);
		}
	}

	&.is-expanded {
		width: var(--sidebar-width);

		.menu-toggle-wrap {
			top: -3rem;
			
			.menu-toggle {
				transform: rotate(-180deg);
			}
		}

		h3, .button .text {
			opacity: 1;
		}

		.button {
			.material-icons {
				margin-right: 1rem;
			}
		}

		.footer {
			opacity: 0;
		}
	}

	@media (max-width: 1024px) {
		position: absolute;
		z-index: 99;
	}
}
</style>