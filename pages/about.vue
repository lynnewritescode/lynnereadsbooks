<template>
  <div id="about-page" class="page-wrapper about-page content-page">
    <site-hero title="About me" subtitle="About me" image="/uploads/reading.jpg"></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="content">
          <h2>Who am I?</h2>
          <p>
            Hello! My name is Lynne and I'm a front-end web developer from
            Glasgow, Scotland.
          </p>
          <p>
            I've always been an avid reader, and have only recently started
            writing reviews for the books I read. This is partially so that I
            can reflect on the books more, and also to improve my writing. I
            figured if I'm writing them anyway, why not create a blog? And here
            we are.
          </p>

          <h3>Social media</h3>
          <p>
            You can find me on
            <a href="http://instagram.com/lynnereadsbooks">instagram</a>
            and
            <a href="http://twitter.com/lynnereadsbooks">twitter</a>. Also checkout my
            <a href="https://www.goodreads.com/lynnewritescode">goodreads</a> account, and feel free to add me there!
          </p>
        </div>
        <h3 class="subtitle is-4">Latest Posts</h3>
        <posts-grid :per-row="1" :number="3" class="posts-grid" />
      </template>

      <template v-slot:sidebar>
        <img src="/avatar2020.jpg" class="profile-img" />
      </template>
    </main-section>
  </div>
</template>
<script>
import QuoteCard from '~/components/cards/QuoteCard'
export default {
  head() {
    return {
      title: `About | ${this.$siteConfig.siteName}`
    }
  },
  components: { QuoteCard }
}
</script>
<style lang="scss">
.posts-grid {
  .columns.is-multiline {
    flex-wrap: nowrap !important;
  }
}
</style>