<template>
  <div>
    <input v-model="username" />
    <input v-model="password" type="password" />
    <button @click="handleSubmit">login</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "login_page",
  data: () => {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["login"]),
    handleSubmit() {
      this.login({ userName: this.username, password: this.password })
        .then(res => {
          console.log(res)
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
