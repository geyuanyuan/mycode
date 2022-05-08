<template>
  <div id="ck-editer">
    <ckeditor
      id="editor"
      v-model="editorData"
      :config="editorConfig"
    ></ckeditor>
    <textarea v-model="editorData"></textarea>
    <div v-html="editorData">{{editorData}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      editorData: "",
      editorConfig: {
        toolbarGroups:[
          { name: 'clipboard', groups: ['clipboard', 'undo'] },
        { name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
        { name: 'forms', groups: ['forms'] },
        { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
        { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
        { name: 'links', groups: ['links'] },
        { name: 'insert', groups: ['insert'] },
        { name: 'styles', groups: ['styles'] },
        { name: 'colors', groups: ['colors'] },
        { name: 'document', groups: ['document', 'doctools', 'mode'] },
        { name: 'tools', groups: ['tools'] },
        { name: 'others', groups: ['others'] },
        { name: 'about', groups: ['about'] }
        ],
        extraPlugins :'uploadimage',
        uploadUrl :'http://localhost:5500/upload/',
        removeButtons:'Templates,Print,Find,Replace,SelectAll,Scayt,Checkbox,Form,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,CreateDiv,Blockquote,BidiLtr,BidiRtl,Flash,PageBreak,Iframe,About,ShowBlocks,Smiley,SpecialChar,HorizontalRule,CopyFormatting,RemoveFormat',
        removeDialogTabs:'image:advanced;link:advanced',
        filebrowserImageUploadUrl:'http://localhost:5500/upload/',
        filebrowserUploadUrl:'http://localhost:5500/upload/',

      },
    };
  },
  methods: {
  },
};
</script>

<style lang="less">

</style>