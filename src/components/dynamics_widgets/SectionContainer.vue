<template>
        <drop class="drop" @drop="handleDrop" :class="classNames">
    <div class="section-container">
          <component
        v-for="(widget,idx) in data"
        :key="idx"
        :is="widget.type"
        :data="widget.data"
        :contenteditable="true"
      ></component>
    </div>
        </drop>
</template>
<script>
export default {
    props:{
        widgets:Array
    },
    methods:{
        handleDrop(data){
            console.log(data);
            

        }
    }

}
</script>
<style lang="scss" scoped>
.section-container{
    min-height: 300px;
    border: 1px dotted black
}

</style>