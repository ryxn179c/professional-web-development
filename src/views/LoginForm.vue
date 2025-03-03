<template>
    <div class="login-container">
      <h2>Iniciar Sesión</h2>
      <form @submit.prevent="handleLogin">
        <label>Usuario:</label>
        <input type="text" v-model="username" required />
  
        <label>Contraseña:</label>
        <input type="password" v-model="password" required />
  
        <button type="submit">Ingresar</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  import { login } from "@/services/authService";
  
  export default {
    data() {
      return {
        username: "",
        password: "",
        errorMessage: "",
      };
    },
    methods: {
      async handleLogin() {
        const response = await login(this.username, this.password);
        if (response.success) {
          localStorage.setItem("username", this.username);
          this.$router.push("/home");
        } else {
          this.errorMessage = "Usuario o contraseña incorrectos.";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 300px;
    margin: auto;
    text-align: center;
  }
  
  input {
    display: block;
    width: 100%;
    margin: 10px 0;
    padding: 8px;
  }
  
  button {
    background-color: #42b983;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
  
  .error {
    color: red;
    margin-top: 10px;
  }
  </style>
  