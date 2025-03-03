<template>
    <div class="home-container">
      <h1>Bienvenido, {{ username }}</h1>
      <button @click="logout">Cerrar sesión</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: localStorage.getItem("username") || "Invitado",
      };
    },
    methods: {
      logout() {
        localStorage.removeItem("username");
        this.$router.push("/");
      },
    },
  };
  </script>
  
  <style scoped>
  .home-container {
    text-align: center;
    margin-top: 50px;
  }
  
  button {
    background-color: #e74c3c;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
  </style>
  