import Vue from 'vue'

// Styles
import './placeholder.styl'

export default function (ssrContext) {
  return Vue.extend({
    name: 'q-placeholder',

    props: {
      value: Boolean, // visible/hide
      imageSize: Number,
      src: String,
      minWords: Number,
      animated: Boolean,
      contentStyle: [String, Object, Array],
      contentClass: [String, Object, Array]
    },

    data () {
      return {
        text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
        words: []
      }
    },

    mounted () {
      let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
      this.words = text.split(' ')
    },

    computed: {
      classes () {
        let c = 'q-placeholder' +
          (this.animated === true ? ' animated-background' : '')
        return c
      },
      styles () {
        let style = {}
        if (this.imageSize !== void 0) {
          style['--placeholder-image-size'] = this.imageSize + 'px'
        }
        return style
      }
    },

    watch: {
      //
    },

    methods: {
      generateText (h, t) {
        let content
        let text = t
        if (text !== void 0) {
          let text = t.trim()
          let words = text.split(' ')
          content = words.map(word => {
            return h('span', {
              staticClass: 'q-placeholder__word'
            }, word)
          })
        } else {
          let length = this.minWords === void 0 ? this.words.length : Math.min(this.minWords, this.words.length)
          content = [...Array(length)]
            .map((_, i) => i)
            .map(index => {
              return h('span', {
                staticClass: 'q-placeholder__word'
              }, this.words[index])
            })
        }
        return content
      },

      generateContent (h) {
        const types = ['header-top', 'header-left', 'header-right', 'header-bottom', 'subheader-left', 'subheader-right', 'subheader-bottom', 'content-top', 'content-first-end', 'content-second-line', 'content-second-end', 'content-third-line', 'content-third-end']
        return types.map(type => {
          return h('div', {
            staticClass: `q-placeholder__masker ${type}`
          })
        })
      }
    },

    render (h) {
      return h('div', {
        staticClass: this.classes,
        style: this.styles
      }, [
        // ...this.generateText(h, (slot && slot[0].text) || this.src)
        ...this.generateContent(h)
      ])
    }
  })
}
