<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent='handleForgotPassword'>
       <p class="text-h6 text-center" >Reset Password</p>
       <div class="col-md-12 col-sm-6 col-sx-10">

        <q-input
         label="E-mail"
         v-model= "email"
        />

       </div>
       <div >
       <q-btn
        label="Sent Reset Email"
        color='primary'
        class="full-width q-mt-md"
        rounded
        type="submit"
       />
       <q-btn
        label="Back"
        color='primary'
        class="full-width q-mt-md"
        rounded
        flat
        :to="{name: 'login'}"
       />
      </div>
   </q-form>

  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'

export default defineComponent({
  setup () {
    const { sendPasswordRestEmail } = useAuthUser()

    const email = ref('')

    const handleForgotPassword = async () => {
      await sendPasswordRestEmail(email.value)
      alert(`Password reset email sent To : ${email.value}`)
    }

    return {
      email,
      handleForgotPassword
    }
  }
})

</script>
