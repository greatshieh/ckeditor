import Plugin from '@ckeditor/ckeditor5-core/src/plugin'

import InsertBlankEditing from './insertblankediting'
import InsertBlankUI from './insertblankui'

export default class InsertBlank extends Plugin {
  static get requires() {
    return [InsertBlankEditing, InsertBlankUI]
  }
}
