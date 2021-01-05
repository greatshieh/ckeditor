import Plugin from '@ckeditor/ckeditor5-core/src/plugin'
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview'

const emphasizeIcon = `<svg t="1606455750929" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="645" width="128" height="128"><path d="M307.2 596.553143v10.020571h166.838857c40.265143 0 80.201143-5.12 116.809143-23.04 35.328-17.408 62.354286-44.873143 79.177143-88.137143 21.138286-54.857143 16.310857-104.228571-13.202286-155.062857-17.078857-29.622857-42.166857-51.821714-75.300571-66.450285C554.422857 261.924571 518.582857 256 474.038857 256H307.2v10.020571c12.397714 0 26.038857-1.170286 37.083429 5.449143 6.253714 3.401143 10.349714 7.497143 12.434285 12.178286 1.974857 4.717714 2.962286 16.457143 2.962286 35.254857v224.768c0 19.017143-0.804571 30.354286-2.450286 34.157714a31.451429 31.451429 0 0 1-12.946285 13.824c-10.971429 6.326857-24.868571 4.900571-37.083429 4.900572z m142.08-49.883429V276.882286c30.646857-0.182857 52.516571 2.56 65.718857 8.118857 18.651429 7.972571 34.011429 22.966857 45.897143 45.019428 34.889143 65.462857 36.754286 165.851429-10.422857 225.609143-16.164571 20.589714-39.497143 30.902857-70.107429 30.902857-15.835429 0-25.270857-3.584-28.854857-11.958857-1.462857-3.437714-2.194286-12.726857-2.194286-27.904zM500.845714 785.078857c33.28 0 60.306286-26.624 60.306286-59.501714s-27.062857-59.501714-60.342857-59.501714c-33.28 0-60.306286 26.624-60.306286 59.501714s26.989714 59.501714 60.342857 59.501714z" p-id="646"></path></svg>`

const EMPHASIZE = 'emphasize'

/**
 * The emphasize UI feature. It introduces the Underline button.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UnderlineUI extends Plugin {
  /**
   * @inheritDoc
   */
  init() {
    const editor = this.editor

    // Add bold button to feature components.
    editor.ui.componentFactory.add(EMPHASIZE, locale => {
      const command = editor.commands.get(EMPHASIZE)
      const view = new ButtonView(locale)

      view.set({
        label: '着重号',
        icon: emphasizeIcon,
        tooltip: true,
        isToggleable: true
      })

      view.bind('isOn', 'isEnabled').to(command, 'value', 'isEnabled')

      // Execute command.
      this.listenTo(view, 'execute', () => {
        editor.execute(EMPHASIZE)
        editor.editing.view.focus()
      })

      return view
    })
  }
}
