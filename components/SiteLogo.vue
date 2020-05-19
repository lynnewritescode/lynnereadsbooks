<template>
  <div class="logo-wrapper">
    <img src="/booklogo.svg" class="site-logo" />

    <h2 class="title">Lynne Reads Books</h2>
    <!-- <div>
      Icons made by
      <a href="https://www.flaticon.com/authors/linector" title="Linector"
        >Linector</a
      >
      from
      <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
    </div> -->
    <!-- <div
      :class="{
        'logo-inner': true,
        blink: blinking
      }"
    >
      <img
        v-for="x in frames"
        :key="x"
        :src="`/logo-frames/logo-f${x - 1}.svg`"
      />
      <img
        v-for="x in frames"
        :key="`${x}-r`"
        :src="`/logo-frames/logo-f${frames - x}.svg`"
      />
    </div> -->
  </div>
</template>
<script>
export default {
  name: 'SiteLogo',
  data() {
    return {
      frames: 5,
      currentFrame: 1,
      blinking: true
    }
  },
  mounted() {
    setInterval(() => {
      const rand = Math.ceil(Math.random() * 10)
      this.blinking = rand % 2
    }, 1000)
  }
}
</script>
<style lang="scss">
.site-logo {
  max-height: 36px !important;

  @media (min-width: 1023px) {
    max-height: 55px !important;
  }
}

@keyframes logoBlink {
  100% {
    transform: translateY(-360px);
  }
}

.logo-wrapper {
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;

  .title {
    font-size: 1.2rem;
    margin-left: 10px;
    color: #ff6363;

    @media (min-width: 1023px) {
      margin-left: 15px;
    }
  }
  // width: 200px;
  // height: 50px;
  // .logo-inner {
  //   position: absolute;
  //   height: 500px;

  //   img {
  //     display: block;
  //     height: 40px;
  //     margin: 5px;
  //     max-height: initial;
  //   }

  //   &.blink {
  //     animation: logoBlink 0.2s steps(8, end) alternate;
  //   }
  // }
}
</style>
