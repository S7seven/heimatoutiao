import layoutAside from './home/layout-aside.vue'
import layoutHeader from './home/layout-header.vue'
import breadCrumb from './common/bread-crumb'
import { quillEditor } from 'vue-quill-editor'
import CoverImage from './publish/cover.image.vue'
import selectImage from './publish/select-image.vue'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default {
  install (Vue) {
    Vue.component('layout-aside', layoutAside)
    Vue.component('layout-header', layoutHeader)
    Vue.component('bread-crumb', breadCrumb)
    Vue.component('quill-editor', quillEditor)
    Vue.component('cover-image', CoverImage)
    Vue.component('select-image', selectImage)
  }
}
