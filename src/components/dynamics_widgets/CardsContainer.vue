<template>
  <section class="container-threeCol flex row" :style="{backgroundColor: section.style.bcgColor, border: isBorder}">

    <card-container @setImg="setImg" v-for="(data, index) in section.data" :key="index"
     :index="index" :data="data" :isEdit="isEdit" :style="{maxWidth: 'width'}"></card-container>
  </section>
</template>

<script>
import CardContainer from '../dynamics_widgets/CardContainer';

export default {
  props: {
    edit: Boolean,
    section: Object
  },
  created() {
    console.log(this.section)
  },
  components: {
    CardContainer
  },
  data(){
    return{
      isEdit: false
    }
  },
  computed:{
    isBorder(){
      if (this.isEdit) return '1px solid blue'
      else return ''
    },
    width(){
      var width = 100/this.section.data.length+'%'
      return width
    },
   
  },
  methods:{
    removeWidget(id) {
      this.$emit("remove", id);
    },
      setImg(data) {
       console.log(data);
      // this.$emit("setCardImg", {event:data.event, sectionId: this.section._id ,idx:data.idx});
    },
  },
};
</script>
<style scoped>
.container-threeCol {
  position: relative;

}
.text-header,
.text-center {
  display: flex;
  justify-content: center;
}
.column {
  float: left;
  width: 33.33%;
  padding: 10px;
  min-height: 300px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>