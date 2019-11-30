<template>
<section class="form-container">
    <widget-editor :widget="value" class="flex justify-end" @remove="removeWidget"></widget-editor>
    <!-- <h3>{{data.title}}</h3> -->

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
import WidgetEditor from '../wixer_cmps/WidgetEditor'

export default {
  props:{value: Object},
    data(){
      return{
        form:{}
      }
    },
    created(){
      console.log('form data', this.value)
    },
    methods:{
        send(){
            console.log('sending...')
        },
        removeWidget(id){
          this.$emit("remove", id);
        }
    },
    components:{
      WidgetEditor
    }
}
</script>
<style lang="scss">
  .form-container{
    padding: 10px;
    position: relative;
  }

  h4{
    margin: 0;
    margin-bottom: 5px;
  }

  input{
    width: 230px;
    padding: 3px;
    margin-bottom: 20px;
  }

  textarea{
    width: 500px;
    height: 100px;
    margin-bottom: 20px;

  }
</style>>

