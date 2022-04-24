<template>
  <Navbar />
  <div class="flex justify-center items-center">
    <div class="w-[500px] h-72 mt-10 text-pri">
      <form @submit.prevent="handleSubmit()"
      class="bg-white shadow-md rounded px-8 pt-4 pb-6 mb-4"
      >
        <p class="text-center mb-4 font-bold">
          REGISTRATE
        </p>
      
        <div class="mb-4">
          <label for="email"
          class="block text-sm font-bold ">
            Correo Electrónico
          </label>
          <input 
            type="text"
            id="email"
            placeholder="email@example.com"
            v-model="email"
            class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight text-dark outline-1 outline-pri focus:outline focus:shadow-outline"
          >
          <p
            id="correoInvalido"
            class="hidden mt-2 text-red-500 text-xs italic"
          >
            El correo no es válido.
          </p>
        </div>

        <div class="mb-4">
          <label class="block text-sm font-bold mb-2" for="password">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            placeholder="********"
            v-model="password"
            class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight text-dark outline-1 outline-pri focus:outline focus:shadow-outline"
          >
          <p
            id='missing'
            class="mt-2 text-red-500 text-xs italic"
          >
          </p>
        </div>

        <div class="text-center">
          <button
            type="submit"
            :disabled="userStore.loadingUser"
            class="px-3 py-1 gradientButton text-pri"
          >
            Registrarse
          </button>
        </div>
        <div class="mt-6 text-center">
            <p class="text-dark text-[10px]">
               ¿Ya tienes cuenta?
               <router-link
                  to="/login"
                  class="font-bold text-pri hover:text-dark"
               >Inicia Sesión</router-link>
           </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'

import {ref} from 'vue';
import { useRestrictStore } from '../stores/restrictedComponents'
import { useUserStore } from '../stores/user'

const restrictStore = useRestrictStore()
restrictStore.setRegister(true)
restrictStore.setLogin(false)

const userStore = useUserStore()

const email = ref('');
const password = ref('');

const handleSubmit = async() => {

  const alerta_email = document.getElementById('correoInvalido');
  const alerta_vacio = document.getElementById('missing');

  const email_inp = document.getElementById('email');
  const pass_inp = document.getElementById('password');

  const regUserEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
  const regUserPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g

  if(!email.value && !password.value){
    alerta_vacio.classList.remove('hidden');
    email_inp.classList.add('border-red-400');
    pass_inp.classList.add('border-red-400');
    email_inp.classList.add('focus:outline-red-400');
    pass_inp.classList.add('focus:outline-red-400');

    alerta_vacio.textContent = 'Por favor rellene los campos.'
    return
  }
  if(!email.value || !regUserEmail.test(email.value)){
    pass_inp.classList.remove('border-red-400');
    alerta_vacio.classList.add('hidden');

    alerta_email.classList.remove('hidden');
    email_inp.classList.add('border-red-400');
    email_inp.classList.add('focus:outline-red-400');
    return
  }
  if(!password.value){
    email_inp.classList.remove('border-red-400');

    alerta_vacio.classList.remove('hidden');
    pass_inp.classList.add('border-red-400');
    pass_inp.classList.add('focus:outline-red-400');
    alerta_vacio.textContent = 'Ingrese una contraseña.'
    return
  }
  if(!regUserPassword.test(password.value)){
    email_inp.classList.remove('border-red-400');
    alerta_vacio.classList.remove('text-red-500');

    pass_inp.classList.add('border-orange-400');
    pass_inp.classList.add('focus:outline-orange-400');
    alerta_vacio.classList.add('text-orange-500');
    alerta_vacio.textContent = 'Mínimo 8 caracteres, una mayuscula y un número.';
    return
  }

  email_inp.classList.remove('border-red-400');
  pass_inp.classList.remove('border-red-400');
  alerta_vacio.classList.add('hidden');
  alerta_email.classList.add('hidden');

  
  
  const submit = await userStore.registerUser(email.value, password.value)
  
  if (submit === 'user-exists'){
      alerta_vacio.textContent = 'El correo electronico ya ha sido registrado.'
      alerta_vacio.classList.remove('hidden');
  }

}



</script>


<style>
</style>