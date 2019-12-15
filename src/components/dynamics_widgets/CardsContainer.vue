<template>
  <section
    class="container-threeCol flex align-center row container"
    :style="{backgroundColor: section.style.bcgColor, border: isBorder}"
  >
  <WidgetEditor @setImg="setImg" :data="section" @changePos="changePos"/>
    <card-container
    
      @setImg="setImg"
      @changeStyle="changeStyle"
      @changePos="changePos"
      v-for="(data, index) in section.data"
      :key="index"
      :index="index"
      :data="data"
      :isEdit="isEdit"
      :style="{maxWidth: 'width'}"
    ></card-container>
  </section>
</template>

<script>
import CardContainer from "../dynamics_widgets/CardContainer";
import WidgetEditor from "../wixer_cmps/WidgetEditor";


export default {
  props: {
    edit: Boolean,
    section: Object
  },
  components: {
    CardContainer,
    WidgetEditor
  },
  data() {
    return {
      isEdit: false
    };
  },
  computed: {
    isBorder() {
      if (this.isEdit) return "1px solid blue";
      else return "";
    },
    width() {
      var width = 100 / this.section.data.length + "%";
      return width;
    }
  },
  methods: {
    changePos(diff){
      console.log(diff)
      this.$emit('changePos', diff, this.section)
    },
    removeWidget(id) {
      this.$emit("remove", id);
    },
    setImg(data) {
      console.log(data);
      this.$emit("setCardImg", {
        event: data.event,
        sectionId: this.section._id,
        idx: data.idx
      });
    },
    changeStyle(data) {
      console.log(data);
      this.$emit("changeStyle", {
        cardData: data,
        sectionId: this.section._id
      });
    }
  }
};
</script>
