<template>
  <div class="about-as-container">
    <input type="file" id="srcImg" class="srcImg" ref="srcImg" />
    <h2 class="about-title-d" :contenteditable="isEdit" @keyup="changeTxt">{{content.data.title}}</h2>
    <p class="about-text-d" :contenteditable="isEdit" @keyup="changeTxt">{{content.data.mainTxt}}</p>
    <div class="about-as-cards-d">
      <div class="about-card-d" v-for="(card,idx) in content.data.cards" :key="idx">
        <img :src="card.img" @click="changeSrc(idx)" />
        <h3
          :contenteditable="isEdit"
          @input="changeCardTxt($event,idx)"
          class="card-title"
        >{{card.title}}</h3>
        <p :contenteditable="isEdit" @keyup.enter="changeCardTxt($event,idx)" class="card-txt">{{card.txt}}</p>
      </div>
    </div>
  </div>
</template>
<script>
var _ = require('lodash')
export default {
  props: {
      isEdit:Boolean,
    value: Object
  },
  data() {
    return {
      content: JSON.parse(JSON.stringify(this.value)),
      test:''

    };
  },
  methods: {
    changeTxt(ev) {
        
      if (ev.target.className === "about-title-d")
        this.content.data.title = ev.target.textContent;
      if (ev.target.className === "about-text-d")
        this.content.data.mainTxt = ev.target.textContent;
        this.$emit('edit',this.content)
    },
    delay(){
  _.debounce(()=>{
console.log('ggg');

            
        },1500)
    },
    changeCardTxt(ev, idx) {
      if (ev.target.className === "card-title"){
          console.log('changing title')
          console.log('before hasama', this.content.data.cards[idx].title)
          this.content.data.cards[idx].title = ev.target.innerText;
          ev.target.innerText='';
          ev.target.innerText=this.content.data.cards[idx].title;
          console.log('after hasama', this.content.data.cards[idx].title)
      }
      if (ev.target.className === "card-txt"){
          console.log('changing txt')
          this.content.data.cards[idx].txt = ev.target.textContent;
      }
        this.$emit('edit',this.content)
    },
    changeSrc(el) {
      this.$refs["srcImg"].click();
      console.log("dd", el);
    }
  }
};
</script>