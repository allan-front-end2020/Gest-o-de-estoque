<template>
  <q-page class="flex flex-center">
   <q-form class="row justify-center" @submit.prevent='handleLogin'>
       <p class="text-h6 text-center" >Login</p>
       <div class="col-md-12 col-sm-6 col-sx-10">
        <q-input
         label="E-mail"
         v-model="form.email"
        />
       </div>
       <div class="col-md-12 col-sm-6 col-sx-10 q-gutter-y-md ">
        <q-input
         label="Password"
         v-model="form.password"
        />
       </div>
       <q-btn
        label="Login"
        color='primary'
        class="full-width q-mt-md"
        rounded
        type="submit"
       />
       <q-btn
        label="Register"
        color='primary'
        class="full-width  q-mt-md"
        flat
        to="/register"
       />
   </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'PageLogin',
  setup () {
    const router = useRouter()
    const { login } = useAuthUser()
    const form = ref({
      email: '',
      password: ''
    })

    const handleLogin = async () => {
      try {
        await login(form.value)
        router.push({ name: 'me' })
      } catch (error) {
        alert(error.message)
      }
    }
    return {
      form,
      handleLogin
    }
  }
})
</script>
