<template>
  <el-form ref="form" :model="formData" class="loginForm sign-in-form" label-width="120px">
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
</template>

<script lang="ts">
import axios from 'axios'
interface fromResult {
  user: string
  pwd: string
}
import { defineComponent, toRefs, reactive } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup(props, context) {
    const formData: fromResult = reactive({
      user: '',
      pwd: ''
    })
    // const formData = toRefs(data)
    const router = useRouter()
    const onSubmit = () => {
      axios
        .post('http://localhost:9000/login/register', JSON.parse(JSON.stringify(formData)))
        .then((rawData) => {
          if (rawData) {
            //实现页面跳转
            router.push({
              name: 'about'
            })
            sessionStorage.setItem('token', JSON.stringify(rawData.data))
          }
        })
        .catch((e) => {
          console.log(e)
        })
    }

    return {
      formData,
      onSubmit
    }
  }
})
</script>
<style scoped>
.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 40px 40px 0px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}
</style>
