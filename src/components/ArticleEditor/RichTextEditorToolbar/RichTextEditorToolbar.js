import { Quill } from "react-quill";
import htmlEditButton from "quill-html-edit-button";
import './RichTextEditorToolbar.css'
import EmbedBlot from 'quill';

// Add fonts to whitelist and register them
const Font = Quill.import("formats/font");
Font.whitelist = [
  "arial",
  "comic-sans",
  "courier-new",
  "georgia",
  "helvetica",
  "lucida"
];
Quill.register(Font, true);

// Add button to view HTML source code
Quill.register({
  "modules/htmlEditButton": htmlEditButton
})

//video
// let Inline = Quill.import('blots/inline');
// class BoldBlot extends Inline {}
// BoldBlot.blotName = 'bold';
// BoldBlot.tagName = 'strong';
// Quill.register('formats/bold', BoldBlot);

// class VideoBlot extends BlockEmbed {
//   static create(url) {
//     let node = super.create();
//     node.setAttribute('src', url);
//     // Set non-format related attributes with static values
//     node.setAttribute('frameborder', '0');
//     node.setAttribute('allowfullscreen', true);

//     return node;
//   }
// }

// let blockEmbed = Quill.import('blots/BlockEmbed');
let blockEmbed = Quill.import('blots/block/embed');
class videoBlot extends blockEmbed {
  static create(url) {
    let node = super.create();
    node.setAttribute('src', url);
    node.setAttribute('frameborder', '0');
    node.setAttribute('allowfullscreen', true);
    return node;
  }
};
Quill.register('formats/customVideo', videoBlot);



// Modules object for setting up the Quill editor
export const modules = {
  syntax: true,
  toolbar: {
    container: "#toolbar",
  },
  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true
  },
  htmlEditButton: {}
};

// Formats objects for setting up the Quill editor
export const formats = [
  "header",
  "font",
  "bold",
  "italic",
  "underline",
  "align",
  "strike",
  "script",
  "blockquote",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  // "video",
  "customVideo",
  "color",
  "code-block"
];

// Quill Toolbar component
export const QuillToolbar = () => (
  <div id="toolbar">
    <span className="ql-formats">
      <select className="ql-font" defaultValue="arial">
        <option value="arial">Arial</option>
        <option value="comic-sans">Comic Sans</option>
        <option value="courier-new">Courier New</option>
        <option value="georgia">Georgia</option>
        <option value="helvetica">Helvetica</option>
        <option value="lucida">Lucida</option>
      </select>
      <select className="ql-header" defaultValue="3">
        <option value="1">Heading</option>
        <option value="2">Subheading</option>
        <option value="3">Normal</option>
      </select>
    </span>
    <span className="ql-formats">
      <button className="ql-bold" />
      <button className="ql-italic" />
      <button className="ql-underline" />
      <button className="ql-strike" />
    </span>
    <span className="ql-formats">
      <button className="ql-list" value="ordered" />
      <button className="ql-list" value="bullet" />
      <button className="ql-indent" value="-1" />
      <button className="ql-indent" value="+1" />
    </span>
    <span className="ql-formats">
      <button className="ql-script" value="super" />
      <button className="ql-script" value="sub" />
      <button className="ql-blockquote" />
      <button className="ql-direction" />
    </span>
    <span className="ql-formats">
      <select className="ql-align" />
      <select className="ql-color" />
      <select className="ql-background" />
    </span>
    <span className="ql-formats">
      <button className="ql-link" />
      <button className="ql-image" />
      <button className="ql-customVideo" />
    </span>
    <span className="ql-formats">
      <button className="ql-formula" />
      <button className="ql-code-block" />
      <button className="ql-clean" />
    </span>
  </div>
);

export default QuillToolbar;