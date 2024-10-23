<template>
  <VitePwaManifest />

  <div>
    <div class="form-container">
      <form @submit.prevent="submitForm">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="from.name" placeholder="Ex: John Doh" required>

        <label for="age">Age:</label>
        <input type="number" id="age" v-model="from.age" placeholder="Ex: 23" required>

        <button type="submit">Submit</button>
      </form>
    </div>

    <!-- show data start -->
    <div class="show-users" v-if="store?.getUsers?.length">
      <div class="single-item" v-for="user in store?.getUsers" :key="user?.name">
        <h3><strong>Name:</strong> {{ user.name }}</h3>
        <small><strong>Age:</strong> {{ user.age }}</small>
      </div>
    </div>
    <div v-else style="margin-top: 2rem;">
      <h2 style="text-align: center;">No User Found...</h2>
    </div>

    <!-- show data end -->
  </div>
</template>
<script setup>
// pinia store referance
const store = useDataStore();
const users = ref([]);

// user info
const from = ref({
  name: null,
  age: null
})

// save user
const submitForm = () => {
  store.addUser(from.value)
  from.value = {}
}


// init users
onMounted(() => {
  store.initStoreage();
})



</script>



<style scoped>
* {
  font-family: Arial, Helvetica, sans-serif;
}

.form-container {
  max-width: 300px;
  margin: 0 auto;
  margin-bottom: 2rem;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 6px;
  font-weight: bold;
}

input {
  padding: 10px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}

.show-users {
  max-width: 50%;
  margin: auto;
  background: #dbdbdb;
  margin: auto;
}

.show-users .single-item {
  padding: 18px 20px;
  border-bottom: 8px solid white;
}

.show-users .single-item h3{
  text-transform: capitalize;
  margin: 0;
}
@media only screen and (max-width: 600px) {
  .show-users {
    max-width: 95% !important;
  }
}
</style>