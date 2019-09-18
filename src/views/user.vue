<template>
  <div>
    <p>
      <input v-model="userName" />
    </p>
    <p>
      <input v-model="password" />
    </p>
    <p>
      <input v-model="address" />
    </p>
    <p>
      <input v-model="phone" />
    </p>
    <p>
      <button @click="HandleAdd">add</button>
      <button @click="HandleDelete">delete</button>
    </p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "userInfo",
  data: () => {
    return {
      userName: "",
      password: "",
      address: "",
      phone: ""
    };
  },
  methods: {
    ...mapActions(["addUser", "deleteUser"]),
    HandleAdd() {
      this.addUser({
        userName: this.userName,
        password: this.password,
        address: this.address,
        phone: this.phone
      })
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    },
    HandleDelete() {
      this.deleteUser({ userName })
        .then(res => {
          console.log(userName + "is delete");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style>
</style>
