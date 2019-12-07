<template>
<el-form  :model="ruleForm" status-icon 
 ref="ruleForm"  class="demo-ruleForm"
 :label-position="labelPosition"
 >
  <el-form-item label="Name" prop="name">
    <el-input type="text" v-model="ruleForm.name" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="Email" prop="email"
  :rules="[
      { required: true, message: 'Please input email address', trigger: 'blur' },
      { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
    ]"
  >
    <el-input type="email" v-model="ruleForm.email" autocomplete="off"
    
    ></el-input>
  </el-form-item>
  <el-form-item label="Phone" prop="phone">
    <el-input type="tel" v-model="ruleForm.phone"></el-input>
  </el-form-item>
  <el-form-item class="btn">
    <el-button type="primary" @click="submitForm('ruleForm')">Submit</el-button>
    <el-button @click="resetForm('ruleForm')">Reset</el-button>
  </el-form-item>
</el-form>
</template>
<script>
  export default {
    data() {
        
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('Please input the age'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('Please input digits'));
          } else {
            if (value < 18) {
              callback(new Error('Age must be greater than 18'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password again'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('Two inputs don\'t match!'));
        } else {
          callback();
        }
      };
      return {
           labelPosition: 'right',
        ruleForm: {
          name: '',
          email: '',
          phone: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style lang="scss" scoped>
.el-form{
  // display: flex;
  // flex-direction: column;
  // // justify-content: center;
  // // align-items: center;
}
.el-form-item{
    width: 23%;
    
    // margin: 0px
}
.el-form-item__label{
    width: 0px
}
.el-form-item__label{
    
    text-align: start
}
.btn{
  margin-top: 20px;
  display: inline-flex;
  justify-content: space-between;
  width: fit-content;
}

</style>