<template>
  <form class="form-widget" @submit.prevent="updateProfile">
    <div class="form-control w-full max-w-xl">
      <label class="label">
        <span class="label-text">Email</span>
      </label>
      <input
        class="input input-bordered w-full max-w-xs"
        id="email"
        type="text"
        :value="user.email"
        disabled
      />
    </div>

    <div class="form-control w-full max-w-xl">
      <label class="label">
        <span class="label-text">Username</span>
      </label>

      <input
        class="input input-bordered w-full max-w-sm"
        id="username"
        type="text"
        v-model="username"
      />
    </div>

    <div class="form-control w-full max-w-xs">
      <label class="label">
        <span class="label-text">Username</span>
      </label>

      <input
        class="input input-bordered w-full max-w-xs"
        id="username"
        type="text"
        v-model="username"
      />

      <input
        class="input input-bordered w-full max-w-xs"
        id="website"
        type="url"
        v-model="website"
      />
    </div>

    <div>
      <input
        type="submit"
        class="btn btn-primary"
        :value="loading ? 'Loading ...' : 'Update'"
        :disabled="loading"
      />
    </div>
  </form>
  <br />
  <br />
  <div>
    <button class="btn btn-link" @click="signOut" :disabled="loading">Sign Out</button>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient()

const loading = ref(true)
const username = ref('')
const website = ref('')
const avatar_path = ref('')

loading.value = true
const user = useSupabaseUser()
console.log('user', user.value.id)
const { data } = await supabase
  .from('profiles')
  .select(`username, website, avatar_url`)
  .eq('id', user.value.id)
  .single()

if (data) {
  username.value = data.username
  website.value = data.website
  avatar_path.value = data.avatar_url
}

loading.value = false

async function updateProfile() {
  try {
    loading.value = true
    const user = useSupabaseUser()

    const updates = {
      id: user.value.id,
      username: username.value,
      website: website.value,
      avatar_url: avatar_path.value,
      updated_at: new Date()
    }

    let { error } = await supabase.from('profiles').upsert(updates, {
      returning: 'minimal' // Don't return the value after inserting
    })
    if (error) throw error
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}

async function signOut() {
  try {
    loading.value = true
    let { error } = await supabase.auth.signOut()
    if (error) throw error
    user = null
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}

definePageMeta({
  middleware: 'auth',
  layout: 'dashboard'
})
</script>

<style lang="scss">
.drawer-side {
  min-height: calc(100vh - 206px);
  height: auto;
}
</style>
