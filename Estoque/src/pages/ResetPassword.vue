<template >
<q-page padding>
    <q-form class="row justify-center" @submit.prevent=''>
       <p class="text-h6 text-center" >Reset Password</p>
       <div class="col-md-12 col-sm-6 col-sx-10">

        <q-input
         label="New Password"
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
      </div>
    </q-form>
 </q-page>
</template>
