import QPlaceholder from '@quasar/quasar-app-extension-qplaceholder/src/component/QPlaceholder'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-placeholder', QPlaceholder(ssrContext))
}
