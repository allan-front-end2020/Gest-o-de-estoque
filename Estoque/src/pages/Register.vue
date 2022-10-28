<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent='handleRegister'>
       <p class="text-h6 text-center" >Register</p>
       <div class="col-md-12 col-sm-6 col-sx-10">

        <q-input
         label="Name"
         v-model="form.name"
        />
        <q-input
         label="E-mail"
         v-model="form.email"
        />
        <q-input
         label="password"
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
   </q-form>

  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'PageRegister',
  setup () {
    const router = useRouter()
    const { register } = useAuthUser()
    const form = ref({
      name: '',
      email: '',
      password: ''
    })
    const handleRegister = async () => {
      try {
        await register(form.value)
        router.push({
          name: 'email-confirmation',
          query: { email: form.value.email }
        })
      } catch (error) {
        alert(error)
      }
    }
    return {
      form,
      handleRegister
    }
  }
})
</script>
