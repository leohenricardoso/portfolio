<template>
  <q-page>
    <div class="row justify-between shadow-10">
      <q-parallax
        src="../assets/banner/header-home.jpg"
        style=""
      >
        <div class="text-yellow text-uppercase text-orverline text-weight-medium">Fullstack Web Developer</div>
        <div class="text-white text-uppercase text-h1 text-weight-bolder">Leonardo Henrique</div>
        <q-btn outline rounded color="yellow" label="About me" class="q-px-xl q-mt-xl" @click="scrollToElement('about-me')" />
      </q-parallax>
    </div>
  </q-page>
</template>

<script>
import { scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll
export default {
  name: 'PageIndex',
  methods: {
    scrollToElement (el) {
      const ele = document.getElementById(el)
      const target = getScrollTarget(ele)
      const offset = ele.offsetTop - ele.scrollHeight
      const duration = 1000
      setScrollPosition(target, offset, duration)
    }
  }
}
</script>
