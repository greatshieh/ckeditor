import Plugin from '@ckeditor/ckeditor5-core/src/plugin'
import EmphasizeCommand from './emphasizecommand'

const EMPHASIZE = 'emphasize'

export default class EmphasizeEditing extends Plugin {
  /**
   * @inheritDoc
   */
  static get pluginName() {
    return 'EmphasizeEditing'
  }

  /**
   * @inheritDoc
   */
  init() {
    const editor = this.editor

    // Allow strikethrough attribute on text nodes.
    editor.model.schema.extend('$text', { allowAttributes: EMPHASIZE })
    editor.model.schema.setAttributeProperties(EMPHASIZE, {
      isFormatting: true,
      copyOnEnter: true
    })

    editor.conversion.attributeToElement({
      model: EMPHASIZE,
      view: {
        name: 'span',
        classes: 'typo-em'
      }
    })

    editor.commands.add(EMPHASIZE, new EmphasizeCommand(editor, EMPHASIZE))
  }
}
