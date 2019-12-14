<template>
  <div class="social-container">
    <social-sharing
      :url="url"
      title="The Progressive JavaScript Framework"
      description="Intuitive, Fast and Composable MVVM for building interactive interfaces."
      quote="Vue is a progressive framework for building user interfaces."
      hashtags="vuejs,javascript,framework"
      twitter-user="vuejs"
      inline-template
    >
      <div class="social-icons">
        <network network="email">
          <i class="fa fa-envelope"></i> Email
        </network>
        <network network="facebook">
          <i class="fa fa-facebook"></i> Facebook
        </network>
        <network network="linkedin">
          <i class="fa fa-linkedin"></i> LinkedIn
        </network>
        <network network="pinterest">
          <i class="fa fa-pinterest"></i> Pinterest
        </network>
        <network network="reddit">
          <i class="fa fa-reddit"></i> Reddit
        </network>
        <network network="skype">
          <i class="fa fa-skype"></i> Skype
        </network>
        <network network="sms">
          <i class="fa fa-commenting-o"></i> SMS
        </network>
        <network network="telegram">
          <i class="fa fa-telegram"></i> Telegram
        </network>
        <network network="twitter">
          <i class="fa fa-twitter"></i> Twitter
        </network>
        <network network="whatsapp">
          <i class="fa fa-whatsapp"></i> Whatsapp
        </network>
      </div>
    </social-sharing>
    <a class="web-url" :href="url">{{url}}</a>
    
  </div>
</template>
<script>
export default {
    props:{
        toyId:String
    },
    computed:{
        url(){
            if(!this.toyId)return'https://om-mister-toy.herokuapp.com'
            return `https://om-mister-toy.herokuapp.com/#/toy/details/${this.toyId}`
        }
    }
}
</script>
