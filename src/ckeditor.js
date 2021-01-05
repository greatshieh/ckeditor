/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment.js";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold.js";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials.js";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize.js";
import Heading from "@ckeditor/ckeditor5-heading/src/heading.js";
import HorizontalLine from "@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js";
import Image from "@ckeditor/ckeditor5-image/src/image.js";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize.js";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle.js";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar.js";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload.js";
import Indent from "@ckeditor/ckeditor5-indent/src/indent.js";
import IndentBlock from "@ckeditor/ckeditor5-indent/src/indentblock.js";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic.js";
import List from "@ckeditor/ckeditor5-list/src/list.js";
import ListStyle from "@ckeditor/ckeditor5-list/src/liststyle.js";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph.js";
import Table from "@ckeditor/ckeditor5-table/src/table.js";
import TableCellProperties from "@ckeditor/ckeditor5-table/src/tablecellproperties";
import TableProperties from "@ckeditor/ckeditor5-table/src/tableproperties";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar.js";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline.js";

import MathType from "@wiris/mathtype-ckeditor5/src/plugin";

import InsertBlank from "./plugin/insertBlank/insertblank";

import Emphasize from "./plugin/Emphasize/emphasize";

import './lang/zh-cn'

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
    Alignment,
    Bold,
    Essentials,
    FontSize,
    Heading,
    HorizontalLine,
    Image,
    ImageResize,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    Indent,
    IndentBlock,
    Italic,
    List,
    ListStyle,
    MathType,
    Paragraph,
    Table,
    TableCellProperties,
    TableProperties,
    TableToolbar,
    Underline,
    InsertBlank,
    Emphasize,
];

// Editor configuration.
ClassicEditor.defaultConfig = {
    toolbar: {
        items: [
          "heading",
          "|",
          "bold",
          "italic",
          "underline",
          "fontsize",
          "|",
          'horizontalLine',
          "bulletedList",
          "numberedList",
          "|",
          "indent",
          "outdent",
          "|",
          "alignment:left",
          "alignment:right",
          "alignment:center",
          "|",
          "imageUpload",
          "insertTable",
          "insertBlank",
          "emphasize",
          "|",
          "MathType",
          "ChemType",
        ],
      },
      heading: {
        options: [
          { model: "paragraph", title: "Paragraph", class: "ck-heading_paragraph" },
          {
            model: "heading1",
            view: "h1",
            title: "Heading 1",
            class: "ck-heading_heading1",
          },
          {
            model: "heading2",
            view: "h2",
            title: "Heading 2",
            class: "ck-heading_heading2",
          },
          {
            model: "heading3",
            view: "h3",
            title: "Heading 3",
            class: "ck-heading_heading3",
          },
        ],
      },
      image: {
        toolbar: [
          "imageTextAlternative",
          "|",
          "imageStyle:alignLeft",
          "imageStyle:full",
          "imageStyle:alignRight",
          "|",
          "imageResize",
        ],
        styles: ["full", "alignLeft", "alignRight"],
      },
      table: {
        contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
      },
      language: "zh-cn",
};
