
<template>
<div class="wh_upload_pic">
    <el-upload action="" list-type="picture-card" name="file"
    :on-preview="handlePictureCardPreview" 
    :on-remove="handleRemove" 
    :on-change="upload_photo"
    :auto-upload='false'>
        <i class="el-icon-plus"></i>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
    </el-upload>
</div>
</template>

<script>
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    upload_photo(file, fileList) {
      console.log(file.raw);
      let formdata = new FormData();
      formdata.append("file", file.raw);
      let config = {
        header: { "Content-Type": "application/x-www-form-urlencode" }
      };
      this.axios.post("/post_photo", formdata, config).then(res => {
        console.log(res);
      });
    }
  }
};
</script>
<style scoped>
.wh_upload_pic {
  margin: 10px;
}
</style>
