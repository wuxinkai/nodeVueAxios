<template>
  <div class="form-outer">
    <el-form ref="form" :model="formData" label-width="120px">
      <el-form-item label="账号">
        <el-input v-model="formData.user"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formData.pwd"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
interface fromResult {
  user: string
  pwd: string
}
import { defineComponent, toRefs, reactive } from 'vue'
export default defineComponent({
  setup(props, context) {
    const formData: fromResult = reactive({
      user: '',
      pwd: ''
    })
    // const formData = toRefs(data)

    const onSubmit = () => {
      console.log( JSON.parse(JSON.stringify(formData)))

      debugger
    }

    return {
      formData,
      onSubmit
    }
  }
})
</script>
<style scoped>
.form-outer {
  width: 300px;
  height: 300px;
  display: flex;
  justify-items: center;
  align-items: center;
}
</style>
