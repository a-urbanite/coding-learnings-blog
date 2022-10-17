import ReactQuill from 'react-quill'
import { modules, formats } from "../RichTextEditorToolbar/EditorToolbar";

interface RichtTextEditorProps {
  postText: any
	setPostText: any
}

const RichTextEditor = ({postText, setPostText}: RichtTextEditorProps) => {
  return (
    <ReactQuill 
        className='Quill-Editor'
        theme="snow" 
        defaultValue={postText}
        onChange={setPostText}
        placeholder={"Write something awesome..."}
        modules={modules}
        formats={formats}
    />
  )
}

export default RichTextEditor