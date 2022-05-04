<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="count">
    </el-pagination>
  </div>
</template>

  <script>
  import { createNamespacedHelpers } from 'vuex'
const { mapState,mapActions } = createNamespacedHelpers('tableStore')
// import { mapState,mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(['tableData','currentPage','count','pageSize']),
  },
  methods:{
    ...mapActions(['handleSizeChange','handleCurrentChange'])
  }
};
</script>