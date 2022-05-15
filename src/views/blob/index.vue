<template>
  <div>
    <img :src="imgUrl" alt="" srcset="">
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      imgUrl: "",
    };
  },
  created() {
    let that = this
    axios({
      method: "get",
      url: "https://lh3.googleusercontent.com/iXmJ9aWblkGDpg-_jpcqaY10KmA8HthjZ7F15U7mJ9PQK6vZEStMlathz1FfQQWV5XeeF-A1tZ0UpDjx3q6vEm2BWZn5k1btVSuBk9ad=s660",
      responseType: "blob",
    }).then(function (res) {
      let binaryData = [];
      binaryData.push(res.data);
      that.imgUrl = window.URL.createObjectURL(new Blob(binaryData));
    });
  },
};
</script>