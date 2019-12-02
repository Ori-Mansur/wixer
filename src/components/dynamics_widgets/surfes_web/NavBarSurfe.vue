<template>
<div class="nav-bar-container-surfe">
    <div class="surfe-logo">Surfers Co.</div>
  <ul class="nav-bar-ul">
    <li class="nav-bar-li">
      <a href="#" class="nav-bar-link">Boards</a>
    </li>
    <li>
      <a href="#" class="nav-bar-link">Accessories</a>
    </li>
    <li>
      <a href="#" class="nav-bar-link">Blog</a>
    </li>
    <li>
      <a href="#" class="nav-bar-link">Technology</a>
    </li>
    <li>
      <a href="#" class="nav-bar-link">Team</a>
    </li>
    <li>
      <a href="#" class="nav-bar-link">Dealers</a>
    </li>
  </ul>
  </div>
</template>
<style lang="scss" scoped>
.nav-bar-container-surfe{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}
.nav-bar-ul{
    display: inline-flex
}
.surfe-logo{
    color: #000000;
font-family: Montserrat;
font-size: 34px;
font-weight: 700;
/* Text style for "Surfers Co" */
letter-spacing: -1.03px;
}
.nav-bar-link{
color: #000000;
font-family: Montserrat;
font-size: 14px;
font-weight: 400;
text-transform: uppercase;
text-decoration: none;
padding: 12px;
}
.nav-bar-link:hover{
background-color: #00b0ff;
color: #ffffff;
}

</style>