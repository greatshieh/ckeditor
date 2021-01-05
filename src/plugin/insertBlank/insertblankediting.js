import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import { toWidget } from "@ckeditor/ckeditor5-widget/src/utils";

import InsertBlankCommand from "./insertblankcommand";

import "./insertblank.css";

const INSERTBLANK = "insertBlank";

export default class InsertBlankEditing extends Plugin {
  init() {
    this._defineSchema();
    this._defineConverters();

    this.editor.commands.add(INSERTBLANK, new InsertBlankCommand(this.editor));
  }

  _defineSchema() {
    const schema = this.editor.model.schema;

    schema.register(INSERTBLANK, {
      // Allow wherever text is allowed:
      allowWhere: "$text",

      // The insertblank will acts as an inline node:
      isInline: true,

      // The inline-widget is self-contained so cannot be split by the caret and can be selected:
      isObject: true,
    });
  }

  _defineConverters() {
    const conversion = this.editor.conversion;

    // view -> model
    // 从外部到编辑器
    conversion.for("upcast").elementToElement({
      view: {
        name: "span",
        classes: ["gapfilling"],
      },
      model: INSERTBLANK,
    });

    // 在编辑器的可编辑模式中
    conversion.for("editingDowncast").elementToElement({
      model: INSERTBLANK,
      view: (modelElement, { writer }) => {
        const blankView = createInsertBlankView(modelElement, writer);

        // Enable widget handling on insertblank element inside editing view.
        return toWidget(blankView, writer);
      },
    });

    // model -> view
    // 从编辑器传递到外部
    conversion.for("dataDowncast").elementToElement({
      model: INSERTBLANK,
      view: (modelElement, { writer }) => {
        return createInsertBlankView(modelElement, writer);
      },
    });

    function createInsertBlankView(model, writer) {
      const blankView = writer.createContainerElement("span", {
        class: "gapfilling",
      });

      //   const innerText = writer.createText("");

      //   writer.insert(writer.createPositionAt(blankView, 0), innerText);

      return blankView;
    }
  }
}
