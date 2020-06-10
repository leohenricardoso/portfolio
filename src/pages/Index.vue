<template>
  <q-page>
    <div class="row justify-between shadow-10">
      <q-img
        src="../assets/banner/bg10.jpg"
        style="height: 100vh"
      >
        <div class="row justify-center items-center full-width full-height text-center">
            <div class="col-10">
              <div class="text-uppercase text-overline text-weight-medium">Fullstack Web Developer</div>
              <div class="text-white text-h1 text-weight-bolder">I'm Leonardo Henrique</div>
              <q-btn outline rounded label="About me" class="q-px-xl q-mt-xl" @click="scrollToElement('about-me')" />
            </div>
        </div>
      </q-img>
    </div>
    <q-separator />
    <div id="about-me" class="row justify-center q-pa-md">
      <div class="col-12 col-md-6">

      </div>
    </div>
    <div style="height:2000px"></div>
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
      const duration = 500
      setScrollPosition(target, offset, duration)
    }
  }
}
</script>

<style>
body {
  /* font-family: 'Josefin Sans', sans-serif; */
  /* font-family: 'Permanent Marker', cursive; */
  /* font-family: 'Patrick Hand', cursive; */
  font-family: 'Sriracha', cursive;

}
</style>
