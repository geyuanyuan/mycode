<template>
  <div id="ck-editer">
    <ckeditor
      id="editor"
      :editor="editor"
      @ready="onReady"
      v-model="editorData"
      :config="editorConfig"
    ></ckeditor>
  </div>
</template>

<script>
import CKEditor from "@ckeditor/ckeditor5-vue2";
import "@ckeditor/ckeditor5-build-decoupled-document/build/translations/zh-cn";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";

export default {
  components: {
    ckeditor: CKEditor.component,
  },

  data() {
    return {
      editor: DecoupledEditor,
      editorData: "<div>Content of the editor.</div>",
      editorConfig: {
        toolbar: [
          "heading",
          "|",
          "fontfamily",
          "fontsize",
          "fontColor",
          "fontBackgroundColor",
          "|",
          "bold",
          "italic",
          "underline",
          "strikethrough",
          "|",
          "alignment",
          "|",
          "numberedList",
          "bulletedList",
          "|",
          "indent",
          "outdent",
          "|",
          "link",
          "blockquote",
          "imageUpload",
          "insertTable",
          "mediaEmbed",
          "|",
          "undo",
          "redo",
        ],
        language: "zh-cn",
      },
    };
  },

  methods: {
    onReady(editor) {
      editor.ui
        .getEditableElement()
        .parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.getEditableElement()
        );
    },
  },
};
</script>

<style lang="less">
.document-editor {
  border: 1px solid var(--ck-color-base-border);
  border-radius: var(--ck-border-radius);

  /* Set vertical boundaries for the document editor. */
  /* max-height: 700px; */

  /* This element is a flex container for easier rendering. */
  display: flex;
  flex-flow: column nowrap;

  ::v-deep(.ck.ck-toolbar) {
    /* Make sure the toolbar container is always above the editable. */
    z-index: 1;

    /* Create the illusion of the toolbar floating over the editable. */
    box-shadow: 0 0 5px hsla(0, 0%, 0%, 0.2);

    /* Use the CKEditor CSS variables to keep the UI consistent. */
    border-bottom: 1px solid var(--ck-color-toolbar-border);

    border: 0;
    border-radius: 0;
  }

  ::v-deep(.ck-content) {
    min-height: 300px;
    line-height: normal;
  }
}
</style>