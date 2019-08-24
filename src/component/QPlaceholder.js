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
      image: Boolean,
      imageSize: {
        type: Number,
        default: 80,
        validator: v => v > 0
      },
      avatar: Boolean,
      title: Boolean,
      titleWidth: {
        type: Number,
        default: 50,
        validator: v => v > 0
      },
      titleHeight: {
        type: Number,
        default: 16,
        validator: v => v > 0
      },
      rows: {
        type: Number,
        default: 4,
        validator: v => v > 0
      },
      rowHeight: {
        type: Number,
        default: 12,
        validator: v => v > 0
      },
      random: Boolean,
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
      }
    },

    computed: {
      styles () {
        return {
          '--placeholder-color': calculateColor(this.color),
          '--placeholder-bgcolor': calculateColor(this.backgroundColor),
          '--placeholder-shimmercolor': calculateColor(this.shimmerColor)
        }
      }
    },

    methods: {
      __renderTitle (h) {
        if (this.title !== true) return ''

        return h('h3', {
          staticClass: 'q-placeholder2__title' +
            (this.animated === true ? ' q-placeholder2__animated-background' : ''),
          style: {
            width: this.titleWidth + '%',
            minHeight: this.titleHeight + 'px',
            fontSize: this.titleHeight + 'px',
            lineHeight: this.titleHeight + 'px',
            ...this.styles
          }
        })
      },

      __renderRow (h) {
        let min = 50
        let max = 95
        let random = Math.round(Math.random() * (+max - +min) + +min)

        return h('ul', {
          staticClass: 'q-placeholder2__line' +
            (this.animated === true ? ' q-placeholder2__animated-background' : ''),
          style: {
            minHeight: this.rowHeight + 'px',
            marginTop: this.rowHeight + 'px',
            width: this.random ? random + '%' : '100%',
            ...this.styles
          }
        })
      },

      __renderRows (h) {
        return [...Array(parseInt(this.rows))]
          .map((_, i) => i)
          .map(idx => this.__renderRow(h))
      },

      __renderParagraph (h) {
        return h('ul', {
          staticClass: 'q-placeholder2__paragraph'
        }, [
          this.__renderRows(h)
        ])
      },

      __renderContent (h) {
        return h('div', {
          staticClass: 'q-placeholder2__content q-placeholder2__column',
          style: {
            minHeight: '16px',
            overflow: 'hidden'
          }
        }, [
          this.__renderTitle(h),
          this.__renderParagraph(h)
        ])
      },

      __renderImage (h) {
        if (this.image !== true) return ''

        return h('div', {
          staticClass: 'q-placeholder2__sidebar q-placeholder2__column',
          style: {
            minWidth: this.imageSize + 'px',
            maxWidth: this.imageSize + 'px',
            minHeight: this.imageSize + 'px',
            maxHeight: this.imageSize + 'px',
            ...this.styles
          }
        }, [
          h('div', {
            staticClass: 'q-placeholder2__avatar' +
              (this.avatar === true ? ' q-placeholder2__avatar--circle' : '') +
              (this.animated === true ? ' animated-background' : ''),
            style: {
              '--placeholder-color': calculateColor(this.color),
              '--placeholder-bgcolor': calculateColor(this.backgroundColor),
              '--placeholder-shimmercolor': calculateColor(this.shimmerColor)
            }
          })
        ])
      }
    },

    render (h) {
      return h('div', {
        staticClass: 'q-placeholder2 q-placeholder2__row', // this.classes,
        style: this.styles
      }, [
        this.__renderImage(h),
        this.__renderContent(h)
      ])
    }
  })
}
