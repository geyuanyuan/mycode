<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="审批人">
      <el-input v-model="formInline.user" placeholder="审批人"></el-input>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-select v-model="formInline.region" placeholder="活动区域">
        <el-option v-for="item in address" :key="item.id" :label="item.name" :value="item.label">{{item.name}}</el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState,mapMutations,mapActions } = createNamespacedHelpers('tableStore')
// import {mapState,mapMutations,mapActions} from 'vuex'
export default {
  data() {
    return {
      
    };
  },
  computed:{
    
    ...mapState(['address','formInline'])
    /** 当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。 */
    // ...mapState([
    //   'formInline'//// 映射 this.formInline 为 store.state.formInline
    // ])
  },
  mounted(){
    this.getAddress()
    this.getData()
    this.$store.commit('changeUserId',678)
    console.log(
      this.$store.state.userId
    )
  },
  methods: {
    ...mapMutations(['changePageSize','changeCurrentPage']),
    ...mapActions(['getData','getAddress']),
    onSubmit() {
      this.changePageSize(20)
      this.changeCurrentPage(1)
      this.getData()
    },
  },
};
</script>
<style scoped>
.el-button--primary {
  color:white;
  background: blue;
}
</style>