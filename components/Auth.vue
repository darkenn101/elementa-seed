<template>
  <form class="row flex-center flex" @submit.prevent="registerWithEmail">
    <div class="col-6 form-widget">
      <h1 class="header">Supabase + Nuxt 3</h1>
      <p class="description">Register with email and password</p>
      <div>
        <input
          class="inputField"
          type="email"
          placeholder="Your email"
          v-model="email"
        />
      </div>
      <div>
        <input
          class="inputField"
          type="password"
          placeholder="Your password"
          v-model="password"
        />
      </div>
      <div>
        <input
          type="submit"
          class="button block"
          :value="loading ? 'Loading' : 'register'"
          :disabled="loading"
        />
      </div>
    </div>
  </form>

  <form class="row flex-center flex" @submit.prevent="signInWithEmail">
    <div class="col-6 form-widget">
      <h1 class="header">Supabase + Nuxt 3</h1>
      <p class="description">Sign in with email and password</p>
      <div>
        <input
          class="inputField"
          type="email"
          placeholder="Your email"
          v-model="email"
        />
      </div>
      <div>
        <input
          class="inputField"
          type="password"
          placeholder="Your password"
          v-model="password"
        />
      </div>
      <div>
        <input
          type="submit"
          class="button block"
          :value="loading ? 'Loading' : 'Login'"
          :disabled="loading"
        />
      </div>
    </div>
  </form>

  <div class="notes">
    <ul>
      <li>Update UI to have card with Login/Registration options toggle</li>
      <li>
        When Registration is done, show message to tell user to check email
      </li>
      <li>Use params to detect if sent from confirmation email</li>
      <li>Redirect to account page on login</li>
    </ul>
  </div>
</template>
<script setup>
const supabase = useSupabaseClient()

const loading = ref(false)
const email = ref('')
const password = ref('')

async function registerWithEmail() {
  loading.value = true
  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value
  })
  if (error) {
    console.log('error', error)
  } else {
    console.log('data', data)
  }
  loading.value = false
}

async function signInWithEmail() {
  loading.value = true
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })
  if (error) {
    console.log('error', error)
  } else {
    console.log('data', data)
  }
  loading.value = false
}
</script>
