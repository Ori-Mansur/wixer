<template>
  <el-dialog title="Shipping address" :visible.sync="dialogFormVisible">
    <el-form :model="form">
      <el-form-item label="Promotion name" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Zones" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="Please select a zone">
          <el-option label="Zone No.1" value="shanghai"></el-option>
          <el-option label="Zone No.2" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">Cancel</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">Confirm</el-button>
    </span>
  </el-dialog>
</template>
<script>
  export default {
    data() {
      return {
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    },
    created(){
         if (
        this.$route.path.includes("login")
      ) {
        this.dialogFormVisible = true;
      } else this.dialogFormVisible = false;

    },
    watch: {
    $route() {
      if (
        this.$route.path.includes("login")
      ) {
        this.dialogFormVisible = true;
      } else this.dialogFormVisible = false;
    }
  }
  };
</script>