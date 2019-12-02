<template>
  <div class="home">
    <h1>Make </h1>
  <NavBarSurfe/>
  <NavCardSurfe/>
  <AboutUsSurfe/>
  <OurTeamSurfe/>
  <FrameSurfe/>
   <i class="fas fa-edit"></i>
   <i class="fas fa-layer-plus"></i>
  </div>
</template>
<script>
import NavBarSurfe from '../components/dynamics_widgets/surfes_web/HeaderSurfe'
import NavCardSurfe from '../components/dynamics_widgets/surfes_web/MainCardSurfe'
import AboutUsSurfe from '../components/dynamics_widgets/surfes_web/AboutUsSurfe'
import OurTeamSurfe from '../components/dynamics_widgets/surfes_web/OurTeamSurfe'
import FrameSurfe from '../components/dynamics_widgets/surfes_web/FrameSurfe'
export default {
  components:{
 NavBarSurfe,
 NavCardSurfe,
 AboutUsSurfe,
 OurTeamSurfe,
 FrameSurfe
  }
}
</script>


