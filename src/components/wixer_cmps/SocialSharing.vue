<template>
  <div class="social-container">
    <social-sharing
      :url="url"
      title="The Progressive JavaScript Framework"
      description="Intuitive, Fast and Composable MVVM for building interactive interfaces."
      quote="Build your website with wixer"
      hashtags="wixer"
      twitter-user="vuejs"
      inline-template
    >
      <div class="social-icons">
        <network network="email">
           <unicon name="envelope-alt" fill="red" height="50" width="50" class="share-icon"  />
          <p>Email</p> 
        </network>
        <network network="facebook">
          <unicon name="facebook" fill="#4267B2" height="50" width="50" class="share-icon"  />
        <p>Facebook</p> 
        </network>
        <network network="linkedin">
          <unicon name="linkedin" fill="#0077B5" height="50" width="50" class="share-icon"  />
         <p>LinkedIn</p> 
        </network>
        <network network="skype">
           <unicon name="skype" fill="#01ABEA" height="50" width="50" class="share-icon" />
        <p>Skype</p> 
        </network>
        <network network="telegram" >
          <unicon name="telegram" fill="#31A8DE" height="50" width="50" class="share-icon" />
          <p> Telegram</p>
        </network>
        <network network="twitter">
          <unicon name="twitter" fill="#1DA1F2" height="50" width="50" class="share-icon" />
          <p>Twitter</p> 
        </network>
        <network network="whatsapp">
          <unicon name="whatsapp" fill="#00E676" height="50" width="50" class="share-icon" />
          <p>Whatsapp</p> 
        </network>
      </div>
    </social-sharing>
    <router-link :to="'/publish/'+id" target="_blank">
  Visit Your Website
</router-link>
  </div>
</template>
<script>
export default {
  // props: {
  //   toyId: String
  // },
  data(){
return{
  id:''
}
  },
  created(){
const id =this.$route.params.id;
if(id)this.id=id
  },
  computed: {
    url() {
      return `https://wixer-om.herokuapp.com/${this.id}`;
    }
  },
  watch: {
   
  }
};
</script>
<style lang="scss" scoped>
.social-container{
  display: flex;
  flex-direction: column;
  align-items: center
}
.social-icons{
  display: grid;
  grid-template-columns: 70px 70px 70px;
  gap:10px;
  text-align: center;
 margin-bottom: 20px;
  
 
}




</style>
