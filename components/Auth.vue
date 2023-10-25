<template>
  <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-neutral">
    <form class="card-body">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <input
          type="email"
          placeholder="email"
          class="input input-bordered"
          required
          v-model="email"
        />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Password</span>
        </label>
        <input
          type="password"
          placeholder="password"
          class="input input-bordered"
          v-model="password"
          required
        />
        <label class="label">
          <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
        </label>
      </div>
      <div class="form-control mt-6 align-right">
        <div class="join flex justify-end">
          <button class="btn btn-primary join-item" @click.prevent="signInWithEmail">
            Sign In
          </button>
          <button class="btn btn-secondary join-item" @click.prevent="registerWithEmail">
            Register
          </button>
        </div>
      </div>
      <div class="alert alert-error mt-6" v-if="authError">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Error! Invaild details.</span>
      </div>
    </form>
  </div>
</template>
<script setup>
const supabase = useSupabaseClient()

const loading = ref(false)
const email = ref('darkenn101@gmail.com')
const password = ref('')
const authError = ref(false)

async function registerWithEmail() {
  loading.value = true
  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value
  })
  if (error) {
    console.log('error', error)
    // TODO: handle error state
    authError.value = true

    setTimeout(() => {
      authError.value = false
    }, 3000)
  } else {
    console.log('data', data)
    navigateTo('/profile')
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

    authError.value = true
    setTimeout(() => {
      authError.value = false
    }, 3000)
  } else {
    console.log('data', data)
    navigateTo('/profile')
  }
  loading.value = false
}
</script>
