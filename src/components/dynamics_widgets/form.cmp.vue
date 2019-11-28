<template>
    
<section class="form-container">
    <h3>Contact Us:</h3>

    <form @submit.prevent="send" class="flex column">
      <h4>Name:</h4>
      <input type="text" v-model="form.name"/>
      <h4>Email:</h4>
      <input type="text" v-model="form.email"/>
      <h4>Your Opinion:</h4>
      <textarea type="text" v-model="form.text"></textarea>
    </form>
    <button type="submit" @click="send">Send</button>
  </section>
</template>

<script>
export default {
    methods:{
        send(){
            console.log('sending...')
        }
    }
}
</script>
