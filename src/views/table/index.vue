<template>
  <div class="wrap">
    <seach></seach>
    <TableComponent></TableComponent>
  </div>
  
</template>
<script>
import Seach from './seach.vue'
import TableComponent from './table.vue'
export default {
  components:{
    Seach,TableComponent
  }
  
}
</script>
<style lang="scss" scoped>
.wrap{
  width: 600px;
  margin:0 auto;
}
</style>