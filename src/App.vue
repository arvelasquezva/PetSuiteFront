<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" class="navbarPetSuite">
      <b-container>
        <b-navbar-brand href="/">
          <img src="@/assets/Images/Isotipo.png" alt="Isotipo" width="30px"/> Petsuite
        </b-navbar-brand>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <div>
        <b-button href="/about" variant="light" class="ml-3"> Sign In</b-button>
        <b-button href="/about" variant="light" class="ml-3"> Sign Up</b-button>
        </div>
      </b-navbar-nav>
      </b-container>
    </b-navbar>
    
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  place-items: center;
  background: #063869;
  
  }
  .navbarPetSuite{
    background: #40db9a;   
  }
</style>
