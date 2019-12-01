<template>
  <ul class="edit-options">
    <li class="wap-option-list">
      <el-form
        :model="dynamicValidateForm"
        ref="dynamicValidateForm"
        label-width="120px"
        class="demo-dynamic"
      >
        <el-form-item prop="email" label="Site Name">
          <el-input v-model="dynamicValidateForm.wapName"></el-input>
        </el-form-item>
        <el-form-item
        v-show="nav"
          v-for="(link, index) in dynamicValidateForm.links"
          :label="'Domain' + index"
          :key="link.key"
          :prop="'links.' + index + '.value'"
          :rules="{
      required: true, message: 'link can not be null', trigger: 'blur'
    }"
        >
          <el-input v-model="link.value" class="link-nav-input"></el-input>
          <el-button @click.prevent="removeDomain(link)" class="link-nav-btn">
            <unicon name="trash-alt" fill="black" />
          </el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('dynamicValidateForm')" class="link-nav-submit">Submit</el-button>
          <el-button @click="addDomain" class="link-nav-submit">New link</el-button>
        </el-form-item>
      </el-form>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    nav: Object
  },
  data() {
    return {
      wapName: "",
      dynamicValidateForm: {
        links: [
          {
            key: 1,
            value: ""
          },
          {
            key: 2,
            value: ""
          },
          {
            key: 3,
            value: ""
          }
        ],
        wapName: ""
      }
    };
  },
  methods: {
    add() {
      this.$emit("setName", this.wapName);
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    removeDomain(item) {
      var index = this.dynamicValidateForm.links.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.links.splice(index, 1);
      }
    },
    addDomain() {
      this.dynamicValidateForm.links.push({
        key: Date.now(),
        value: ""
      });
    }
  },
  computed:{
   
  }
};
</script>
<style lang="scss" scoped>
.link-nav-input {
  width: 100px;
  display: inline-block;
  height: 40px;
}
.link-nav-btn{
  display: inline-block;
  padding: 0px;
  padding-left: 5px;
  padding-right: 5px;
  margin-left: 5px
}
.link-nav-submit{
  display: inline-block
}
</style>