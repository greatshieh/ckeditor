import Plugin from '@ckeditor/ckeditor5-core/src/plugin'
import EmphasizeEditing from './emphasizeediting'
import EmphasizeUI from './emphasizeui'

export default class Emphasize extends Plugin {
  /**
   * @inheritDoc
   */
  static get requires() {
    return [EmphasizeEditing, EmphasizeUI]
  }

  /**
   * @inheritDoc
   */
  static get pluginName() {
    return 'Emphasize'
  }
}
