<template>
  <div>
    <Header></Header>

    <sidebar></sidebar>
    <div class="content_box" >
      <Tags></Tags>
      <div class="content">
        <transition name="move" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './sidebar'
import Header from './header'
import Tags from './tags'
export default {

  components: {
    Sidebar,
    Header,
    Tags,
  },
}
</script>

<style>
</style>