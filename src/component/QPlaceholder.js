import Vue from 'vue'

// Styles
import './placeholder.styl'
import 'quasar-mixin-colorize/src/qColors.styl'

import { Colorize, calculateColor } from 'quasar-mixin-colorize'

export default function (ssrContext) {
  return Vue.extend({
    name: 'q-placeholder',

    mixins: [Colorize],

    props: {
      value: Boolean, // visible/hide
      animated: Boolean,
      imageSize: {
        type: Number,
        default: 80,
        validator: v => v > 0
      },
      rowHeight: {
        type: Number,
        default: 12,
        validator: v => v > 0
      },
      dividerHeight: {
        type: Number,
        default: 12,
        validator: v => v > 0
      },
      noHeader: Boolean,
      color: {
        type: String,
        default: '#eee' // any color
      },
      backgroundColor: {
        type: String,
        default: '#fff' // any color
      },
      shimmerColor: {
        type: String,
        default: '#ddd'
      }
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
        style['--placeholder-color'] = calculateColor(this.color)
        style['--placeholder-bgcolor'] = calculateColor(this.backgroundColor)
        style['--placeholder-shimmercolor'] = calculateColor(this.shimmerColor)
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
      },

      __renderDivider (h, width, height) {
        return h('div', {
          staticClass: 'q-placeholder__divider',
          style: {
            width: width,
            minHeight: height
          }
        })
      },

      __renderMask (h, maxWidth, marginLeft) {
        return h('div', {
          staticClass: 'q-placeholder__mask',
          style: {
            minHeight: this.rowHeight + 'px',
            maxWidth: maxWidth,
            marginLeft: marginLeft
          }
        })
      },

      __renderColumn (h, style, content) {
        return h('div', {
          staticClass: 'q-placeholder__column',
          style: {
            ...style
          }
        }, [
          content
        ])
      },

      __renderRow (h) {
        let min = 50
        let max = 95
        let random = Math.round(Math.random() * (+max - +min) + +min)

        let row = []
        row.push(this.__renderDivider(h, '100%', this.dividerHeight + 'px'))
        row.push(this.__renderMask(h, (100 - random + 1) + '%', random + '%'))
        return row
      },

      __renderHeaderRows (h) {
        let count = Math.floor(this.imageSize / (this.rowHeight + this.dividerHeight))
        let remaining = this.imageSize - ((this.rowHeight + this.dividerHeight) * count)
        return h('div', {
          staticClass: 'q-placeholder__column'
        }, [
          ...[...Array(parseInt(count))]
            .map((_, i) => i)
            .map(idx => this.__renderRow(h)),
          this.__renderDivider(h, '100%', remaining + 'px')
        ])
      },

      __renderRows (h) {
        return h('div', {
          staticClass: 'q-placeholder__column'
        }, [
          this.__renderRow(h),
          this.__renderRow(h),
          this.__renderRow(h),
          this.__renderRow(h),

          this.__renderDivider(h, '100%', this.dividerHeight + 'px')
        ])
      },

      __renderHead (h) {
        const divider = this.__renderDivider(h, '100%', '100%')

        const imageSize = this.imageSize + 'px'
        return h('div', {
          staticClass: 'q-placeholder__row',
          style: {
            overflow: 'hidden',
            maxHeight: imageSize
          }
        }, [
          this.__renderColumn(h, { maxWidth: '10px' }, divider),
          this.__renderColumn(h, { maxWidth: imageSize, minHeight: imageSize }),
          this.__renderColumn(h, { maxWidth: '10px' }, divider),
          this.__renderHeaderRows(h)
        ])
      },

      __renderBody (h) {
        const divider = this.__renderDivider(h, '100%', '100%')

        return h('div', {
          staticClass: 'q-placeholder__row',
          style: {
            minHeight: '100px',
            overflow: 'hidden'
          }
        }, [
          this.__renderColumn(h, { maxWidth: '10px' }, divider),
          this.__renderRows(h)
        ])
      }
    },

    render (h) {
      return h('div', {
        staticClass: this.classes,
        style: this.styles
      }, [
        this.noHeader || this.__renderHead(h),
        this.__renderBody(h)
      ])
    }
  })
}
