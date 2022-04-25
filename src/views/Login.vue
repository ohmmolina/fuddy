<template>
  <Navbar />
  <div class="flex justify-center items-center">
    <div class="w-[500px] h-72 mt-10 text-pri">
      <form @submit.prevent="handleSubmit()"
      class="bg-white shadow-md rounded px-8 pt-4 pb-6 mb-4"
      >
        <p class="text-center mb-4 font-bold">
          INICIA SESION
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
            class="ml-2 mt-1 cursor-pointer text-dark text-[10px] hover:text-pri hover:underline"
          >
             Recuperar contraseña
          </p>
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
            Iniciar
          </button>
        </div>
        <div class="mt-6 text-center">
            <p class="text-dark text-[10px]">
               No tienes cuenta?
               <router-link
                  to="/register"
                  class="font-bold text-pri hover:text-dark hover:underline"
               >Registrate</router-link>
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

const restrictStore = useRestrictStore();
const userStore = useUserStore()

restrictStore.setAuth(false);
restrictStore.setAccessing(true);

const email = ref('');
const password = ref('');

const handleSubmit = async() => {

   const alerta_email = document.getElementById('correoInvalido');
   const alerta_vacio = document.getElementById('missing');

   const regUserEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

   const email_inp = document.getElementById('email');
   const pass_inp = document.getElementById('password');

   if(!email.value && !password.value){
      alerta_vacio.classList.remove('hidden');
      email_inp.classList.add('border-red-400');
      pass_inp.classList.add('border-red-400');
      alerta_vacio.textContent = 'Por favor rellene los campos.'
      return
   }
   if(!email.value || !regUserEmail.test(email.value)){
      pass_inp.classList.remove('border-red-400');
      alerta_vacio.classList.add('hidden');

      alerta_email.classList.remove('hidden');
      email_inp.classList.add('border-red-400');
      return
   }
   if(!password.value){
      email_inp.classList.remove('border-red-400');

      alerta_vacio.classList.remove('hidden');
      pass_inp.classList.add('border-red-400');
      alerta_vacio.textContent = 'Ingrese una contraseña.'
      return
   }

   email_inp.classList.remove('border-red-400');
   pass_inp.classList.remove('border-red-400');
   alerta_vacio.classList.add('hidden');
   alerta_email.classList.add('hidden');

   const submit = await userStore.loginUser(email.value, password.value)
   switch (submit){
      case 'wrong-password':
         pass_inp.classList.add('border-red-400');

         alerta_vacio.textContent = 'Contraseña incorrecta. Por favor intente de nuevo.'

         alerta_vacio.classList.remove('hidden');
         break;
      
      case 'try-later':
         alerta_vacio.classList.remove('text-red-500');

         alerta_vacio.textContent = 'Demasiados intentos. Intente en 30 segundos';

         pass_inp.classList.add('border-yellow-400');
         alerta_vacio.classList.add('text-yellow-500');
         alerta_vacio.classList.remove('hidden');
         break;
      
      case 'no-user':
         alerta_vacio.classList.remove('text-red-500');
         pass_inp.classList.remove('border-yellow-400');
         pass_inp.classList.remove('border-red-400');

         alerta_vacio.textContent = 'No tienes ningina cuenta. Por favor registrate.';

         alerta_vacio.classList.add('text-yellow-500');
         alerta_vacio.classList.remove('hidden');
         break;
   }
}



</script>


<style>

</style>