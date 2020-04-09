<template>
    <header class="navbar bd-navbar flex-column flex-md-row navbar-dark navbar-expand">
      <b-container>
        <b-navbar-brand href="/">
          <img src="@/assets/Images/Isotipo.png" alt="Isotipo" width="30px"/> Petsuite
        </b-navbar-brand>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <div>
        <b-button href="/login" variant="light" class="ml-3"> Sign In</b-button>
        <b-button href="/signUp/all" variant="light" class="ml-3"> Sign Up</b-button>
        </div>
      </b-navbar-nav>
      </b-container>
    </header>
</template>

<script>
export default {
  name: "NavbarComponente",
}
</script>


<style scoped>
.bd-navbar{
    background: #40db9a;   
    position: sticky;
    top: 0;
    z-index: 1071;
}
</style>