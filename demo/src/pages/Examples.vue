<template>
  <hero>
    <div>
      <q-markdown>
**QPlaceholder** allows for creating placeholder elements that are displayed before your data arrives from the server.

All line lengths are randomly generated between 50-95%, so no two QPlaceholder components will look exactly alike.
      </q-markdown>
      <example-title title="Basics" />
      <example-card title="Basic" name="Basic" :tag-parts="getTagParts(require('!!raw-loader!../examples/Basic.vue').default)" />
      <example-card title="Animated" name="Animated" :tag-parts="getTagParts(require('!!raw-loader!../examples/Animated.vue').default)" />
      <example-card title="Title" name="Title" :tag-parts="getTagParts(require('!!raw-loader!../examples/Title.vue').default)" />
      <example-card title="Title Width and Height" name="TitleWidthHeight" :tag-parts="getTagParts(require('!!raw-loader!../examples/TitleWidthHeight.vue').default)" />
      <example-card title="Image" name="Image2" :tag-parts="getTagParts(require('!!raw-loader!../examples/Image.vue').default)" />
      <example-card title="Avatar" name="Avatar" :tag-parts="getTagParts(require('!!raw-loader!../examples/Avatar.vue').default)" />
      <example-card title="Image Size" name="ImageSize" :tag-parts="getTagParts(require('!!raw-loader!../examples/ImageSize.vue').default)" />
      <example-card title="Line Sizes" name="LineSizes" :tag-parts="getTagParts(require('!!raw-loader!../examples/LineSizes.vue').default)" />

      <example-card title="Random Line Lengths" name="Random" :tag-parts="getTagParts(require('!!raw-loader!../examples/Random.vue').default)">
      <q-markdown>
The property `random` can be used to generate random line lengths, the line lengths are calculated between 50 and 95%, so no two QPlaceholder components will look exactly alike.
      </q-markdown>
      </example-card>

      <example-card title="Rows" name="Rows" :tag-parts="getTagParts(require('!!raw-loader!../examples/Rows.vue').default)">
      <q-markdown>
The property `rows` can be used to control how many lines are displayed. The default is 4.
      </q-markdown>
      </example-card>

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
    this.addToToc('Title', 2)
    this.addToToc('Title Width and Height', 2)
    this.addToToc('Image', 2)
    this.addToToc('Avatar', 2)
    this.addToToc('Image Size', 2)
    this.addToToc('Line Sizes', 2)
    this.addToToc('Random Line Lengths', 2)
    this.addToToc('Rows', 2)
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
