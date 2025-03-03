<template>
    <div class="login-container">
      <div class="login-card">
        <h2>Iniciar Sesión</h2>
        <form @submit.prevent="handleLogin">
          <div class="input-group">
            <label for="username">Usuario:</label>
            <input id="username" type="text" v-model="username" required />
          </div>
          <div class="input-group">
            <label for="password">Contraseña:</label>
            <input id="password" type="password" v-model="password" required />
          </div>
          <button type="submit">Ingresar</button>
        </form>
        <transition name="fade">
          <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        </transition>
      </div>
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
  /* Estilos generales */
  * {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  
  /* Contenedor centrado con efecto de fondo animado */
  .login-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #141e30, #243b55);
    overflow: hidden;
    position: relative;
  }
  
  /* Partículas animadas en el fondo */
  .login-container::before {
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 10%, transparent 20%);
    background-size: 50px 50px;
    animation: movingBackground 8s linear infinite;
  }
  
  @keyframes movingBackground {
    from { transform: translateX(0) translateY(0); }
    to { transform: translateX(-50px) translateY(-50px); }
  }
  
  /* Tarjeta de login con efecto Glassmorphism */
  .login-card {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    text-align: center;
    width: 100%;
    max-width: 360px;
    color: #fff;
    opacity: 0;
    transform: translateY(-20px);
    animation: slideIn 0.8s forwards;
  }
  
  /* Animación de entrada */
  @keyframes slideIn {
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  /* Inputs con estilo moderno */
  .input-group {
    margin-bottom: 1.5rem;
    text-align: left;
  }
  
  .input-group label {
    display: block;
    margin-bottom: 0.3rem;
    color: #f1f1f1;
  }
  
  .input-group input {
    width: 100%;
    padding: 12px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    font-size: 1rem;
    transition: all 0.3s ease;
  }
  
  .input-group input:focus {
    border-color: #00c6ff;
    outline: none;
  }
  
  /* Botón con animaciones */
  button {
    width: 100%;
    padding: 12px;
    background: linear-gradient(135deg, #00c6ff, #0072ff);
    color: white;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 4px 10px rgba(0, 198, 255, 0.3);
  }
  
  button:hover {
    background: linear-gradient(135deg, #0072ff, #00c6ff);
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 198, 255, 0.5);
  }
  
  button:active {
    transform: translateY(0);
    box-shadow: 0 4px 10px rgba(0, 198, 255, 0.3);
  }
  
  /* Mensaje de error */
  .error {
    color: #ff4f4f;
    margin-top: 1rem;
    font-size: 0.9rem;
  }
  
  /* Animación del mensaje de error */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  </style>