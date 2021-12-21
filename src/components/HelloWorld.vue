<template>
  <div class="hello">
    <h1>不加倍：{{ count }}</h1>
    <h1>加倍计算：{{ double }}</h1>
    <button @click="increase">加油！！！！</button>
    <div>
      <ul>
        <li v-for="(item,index) in numbers" :key="index">{{item}}</li>
      </ul>
      <h1>
        {{person.name }}
      </h1>
      <br>
      <br>
      <h1>{{greeting}}</h1>
      <button @click="updateGreetion">watch</button>
      <h2>X:{{x}} Y： {{y}}</h2>
      <br>
      <h1 v-if="loading">Loading!...</h1>
      <img v-if="loaded" :src="result[0].url">
    </div>
    <modal :isOpen="modalIsOpen" @close-modal="onModalClone"> My Modal !!!!</modal>

    <br>
    <br>
    <br>
    <button @click="opemModal">打开弹出</button>

    <br>
    <br>
    <h2>解决异步问题</h2>
    <Suspense>
      <template #default>
        <div>
          <async-show />
        </div>
      </template>
      <template #fallback>
        <h1>Loading !...</h1>
      </template>
    </Suspense>

    <h2>解决一步和报错的问题</h2>
    <Suspense>
      <template #default>
        <div>
          <dog-show />
        </div>
      </template>
      <template #fallback>
        <h1>Loading !...</h1>
      </template>
    </Suspense>
    <br>
    <br>
    <p>{{errorData}}</p>
  </div>
</template>

<script lang="ts">
/*
ref  绑定值
computed 计算
reactive 包裹
*/
import {
  defineComponent,
  ref,
  computed,
  reactive,
  toRefs,
  onMounted,
  onUpdated,
  onRenderTriggered,
  watch,
  onErrorCaptured
} from 'vue'
import useMousePosition from '../hooks/useMousePosition'
import useURLLoader from '../hooks/useURLLoader'
import Modal from './Modal.vue'
import AsyncShow from './AsyncShow.vue'
import DogShow from './DogShow.vue'
import axios from 'axios'
// typejs格式校验
interface DataProps {
  count: number
  double: number
  increase: () => void
  numbers: number[]
  person: { name?: string } //问号代表可选的
}

interface DogResult {
  message: string
  status: string
}

interface CatResult {
  id: string
  url: string
  width: number
  height: number
}
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Modal,
    AsyncShow,
    DogShow
  },
  setup(props, context) {
    //props 组件属性  context

    // const count = ref(0)
    // //新增
    // const increase =()=>{
    //    count.value ++
    // }

    // //计算
    // const double = computed(()=>{
    //   return count.value *2
    // })

    //钩子函数
    onMounted(() => {
      console.log('onMounted')
    })
    onUpdated(() => {
      console.log('onUpdated')
    })
    //调试专用
    onRenderTriggered((event) => {
      console.log(event)
    })

    const data: DataProps = reactive({
      count: 0,
      increase: () => {
        data.count++
      },
      double: computed(() => data.count * 2),
      numbers: [0, 1, 2],
      person: {}
    })

    data.numbers[0] = 5
    data.person.name = '对象新增'

    // 更新为响应式数据类型
    const refData = toRefs(data)

    //watch 用法
    const greeting = ref('')
    const updateGreetion = () => {
      greeting.value += 'Hello'
    }
    //监听对象里的变化
    watch([greeting], (newValue, oldValue) => {
      document.title = '222' + greeting.value
    })

    //监听对象里的某一个值得变化
    watch([() => data.count], (newValue, oldValue) => {
      document.title = '222' + greeting.value + data.count
    })

    //模块化 点击事件到处 x和y的值
    const { x, y } = useMousePosition()

    //接口调用
    const { result, loading, loaded, error } = useURLLoader<CatResult[]>(
      'https://api.thecatapi.com/v1/images/search?limit=1'
    )
    watch(result, () => {
      if (result.value) {
        console.log('value', result.value[0].url)
      }
    })

    axios.get('/api/users').then((rawData) => {
      console.log('腾讯云接口',rawData.data)
    }).catch((e) => {
       console.log(e)
      })

    axios.get('/home').then((rawData) => {
      console.log('本地',rawData.data)
    }).catch((e) => {
       console.log(e)
      })
    //打开弹出框
    const modalIsOpen = ref(false)

    const opemModal = () => {
      modalIsOpen.value = true
    }
    const onModalClone = () => {
      modalIsOpen.value = false
    }

    //捕获代码异常
    const errorData = ref(null)

    onErrorCaptured((e: any) => {
      errorData.value = e
      return true
    })

    return {
      ...refData,
      greeting,
      updateGreetion,
      // count,
      // increase,
      // double
      x,
      y,
      result,
      loading,
      loaded,

      modalIsOpen,
      opemModal,
      onModalClone,
      errorData
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
