import ReactQuill from 'react-quill'
import { modules, formats } from "../RichTextEditorToolbar/RichTextEditorToolbar";
import './RichTextEditor.css'
import 'react-quill/dist/quill.snow.css';

interface RichtTextEditorProps {
  postText: any
	setPostText: any
}

const RichTextEditor = ({postText, setPostText}: RichtTextEditorProps) => {

  return (
    <ReactQuill 
        className='Quill-Editor'
        theme="snow" 
        value={postText}
        onChange={setPostText}
        placeholder={"Write something awesome..."}
        modules={modules}
        formats={formats}
    />
  )
}

export default RichTextEditor