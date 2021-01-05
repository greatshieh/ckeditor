import Command from '@ckeditor/ckeditor5-core/src/command'

const INSERTBLANK = 'insertBlank'

export default class InsertBlankCommand extends Command {
  execute() {
    const editor = this.editor

    editor.model.change(writer => {
      const blankholder = writer.createElement(INSERTBLANK)
      editor.model.insertContent(blankholder)
    })
  }

  refresh() {
    const model = this.editor.model
    const selection = model.document.selection

    const isAllowed = model.schema.checkChild(selection.focus.parent, INSERTBLANK)

    this.isEnabled = isAllowed
  }
}
