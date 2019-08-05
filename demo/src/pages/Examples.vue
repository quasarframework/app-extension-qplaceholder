<template>
  <hero>
    <div>
      <q-markdown>
**QPlaceholder** allows for creating placeholder elements that are displayed before your data arirves from the server.

All line lengths are randomly generated between 50-95%, so no two QPlaceholder components will look exactly alike.
      </q-markdown>
      <example-title title="Basics" />
      <example-card title="Basic" name="Basic" :tag-parts="getTagParts(require('!!raw-loader!../examples/Basic.vue').default)" />
      <example-card title="Animated" name="Animated" :tag-parts="getTagParts(require('!!raw-loader!../examples/Animated.vue').default)" />
      <example-card title="No Header" name="NoHeader" :tag-parts="getTagParts(require('!!raw-loader!../examples/NoHeader.vue').default)" />
      <example-card title="Image Size" name="ImageSize" :tag-parts="getTagParts(require('!!raw-loader!../examples/ImageSize.vue').default)" />
      <example-card title="Line Sizes" name="LineSizes" :tag-parts="getTagParts(require('!!raw-loader!../examples/LineSizes.vue').default)" />
      <example-card title="Colors" name="Colors" :tag-parts="getTagParts(require('!!raw-loader!../examples/Colors.vue').default)" />
    </div>
    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" color="primary" />
    </q-page-scroller>
  </hero>
</template>

<script>
import Hero from '../components/Hero'
import ExampleTitle from '../components/ExampleTitle'
import ExampleCard from '../components/ExampleCard'
import { slugify } from 'assets/page-utils'
import getTagParts from '@quasar/quasar-app-extension-qmarkdown/src/lib/getTagParts'

export default {
  name: 'Examples',

  components: {
    Hero,
    ExampleTitle,
    ExampleCard
  },

  data () {
    return {
      tempToc: []
    }
  },

  mounted () {
    this.toc = []
    this.tempToc = []

    this.addToToc('Basics')
    this.addToToc('Basic', 2)
    this.addToToc('Animated', 2)
    this.addToToc('No Header', 2)
    this.addToToc('Image Size', 2)
    this.addToToc('Line Sizes', 2)
    this.addToToc('Colors', 2)

    this.toc = this.tempToc
  },

  computed: {
    toc:
    {
      get () {
        return this.$store.state.common.toc
      },
      set (toc) {
        this.$store.commit('common/toc', toc)
      }
    }
  },

  methods: {
    getTagParts,
    addToToc (name, level = 1) {
      const slug = slugify(name)
      this.tempToc.push({
        children: [],
        id: slug,
        label: name,
        level: level
      })
    }
  }
}
</script>

<style lang="stylus">
.example-page
  padding: 16px 46px;
  font-weight: 300;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
</style>
