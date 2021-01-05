import Plugin from '@ckeditor/ckeditor5-core/src/plugin'
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview'

// 按钮的图标 SVG
const insertblankIcon = `<svg t="1606104730845" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2211" width="128" height="128"><path d="M448 704H128a64 64 0 0 1-64-64V384a64 64 0 0 1 64-64h320V256H128a128 128 0 0 0-128 128v256a128 128 0 0 0 128 128h320zM896 256h-128v64h128a64 64 0 0 1 64 64v256a64 64 0 0 1-64 64h-128v64h128a128 128 0 0 0 128-128V384a128 128 0 0 0-128-128z" p-id="2212"></path><path d="M640 64h192V0H384v64h192v896H384v64h448v-64h-192V64z" p-id="2213"></path></svg>
`
const INSERTBLANK = 'insertBlank'

// 这个模块是用来监听 click的
import ClickObserver from '@ckeditor/ckeditor5-engine/src/view/observer/clickobserver'

export default class InsertBlankUI extends Plugin {
  init() {
    const editor = this.editor
    const t = editor.t

    // “insertBlank”按钮必须在编辑器的UI组件中注册
    // 将显示在工具栏中。
    editor.ui.componentFactory.add(INSERTBLANK, locale => {
      const view = editor.editing.view
      const command = editor.commands.get(INSERTBLANK)

      // 使用模块
      view.addObserver(ClickObserver)

      const buttonView = new ButtonView(locale)
      // 文档：https://ckeditor.com/docs/ckeditor5/latest/api/module_ui_button_buttonview-ButtonView.html
      buttonView.set({
        label: t('插入填空'),
        icon: insertblankIcon,
        tooltip: true
      })
      // 将按钮的状态绑定到命令。
      buttonView.bind('isOn', 'isEnabled').to(command, 'value', 'isEnabled')
      // 单击(执行)按钮时执行命令。
      this.listenTo(buttonView, 'execute', () => {
        editor.execute(INSERTBLANK)
        editor.editing.view.focus()
      })

      return buttonView
    })
  }
}
