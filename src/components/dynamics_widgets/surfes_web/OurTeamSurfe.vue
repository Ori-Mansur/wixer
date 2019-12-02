<template>
  <div class="team-conteiner-surfe" style="background-color: #ffffff;">
    <h2 class="team-title">Our Team</h2>
    <div class="team-card-conteiner-surfe">
      <div class="team-card-surfe">
        <div class="profile-picture">
          <img
            src="https://i2.wp.com/digihypemedia.ca/wp-content/uploads/2019/05/4-Ways-To-Optimize-Your-Instagram-Profile-in-2019.jpg?resize=1170%2C781&ssl=1"
            alt
          />
        </div>
        <h3>Taj Burrow</h3>
        <p>@tajamos</p>
        <p>Yallingup, Australia</p>
      </div>
      <div class="team-card-surfe">
        <div class="profile-picture">
          <img
            src="https://i2.wp.com/digihypemedia.ca/wp-content/uploads/2019/05/4-Ways-To-Optimize-Your-Instagram-Profile-in-2019.jpg?resize=1170%2C781&ssl=1"
            alt
          />
        </div>
        <h3>Taj Burrow</h3>
        <p>@tajamos</p>
        <p>Yallingup, Australia</p>
      </div>
      <div class="team-card-surfe">
        <div class="profile-picture">
          <img
            src="https://i2.wp.com/digihypemedia.ca/wp-content/uploads/2019/05/4-Ways-To-Optimize-Your-Instagram-Profile-in-2019.jpg?resize=1170%2C781&ssl=1"
            alt
          />
        </div>
        <h3>Taj Burrow</h3>
        <p>@tajamos</p>
        <p>Yallingup, Australia</p>
      </div>
      <div class="team-card-surfe">
        <div class="profile-picture">
          <img
            src="https://i2.wp.com/digihypemedia.ca/wp-content/uploads/2019/05/4-Ways-To-Optimize-Your-Instagram-Profile-in-2019.jpg?resize=1170%2C781&ssl=1"
            alt
          />
        </div>
        <h3>Taj Burrow</h3>
        <p>@tajamos</p>
        <p>Yallingup, Australia</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.team-card-conteiner-surfe {
  display: flex;
  padding: 30px;
  padding-bottom: 60px
}
.team-card-surfe {
  height: 250px;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  box-shadow: 10px 17px 50px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
}
.team-card-surfe:nth-child(even) {
  margin-top: 30px;
}
.profile-picture {
  height: 100px;
  width: 100px;
}
img {
  border-radius: 50%;
}
.team-title {
  width: 100%;
  opacity: 0.1;
  color: #000000;
  font-family: Montserrat;
  font-size: 5rem;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  /* Text style for "Our Team" */
  letter-spacing: 5px;
  margin: 0px;
}
</style>
