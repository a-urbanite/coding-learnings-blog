import ReactQuill from 'react-quill'
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import 'react-quill/dist/quill.snow.css';
import './Editor.css'

interface EditorProps {
	title: string 
	setTitle: Function
	postText: any
	setPostText: any
}

const Editor = ({title, setTitle, postText, setPostText}: EditorProps) => {

  return (
    <div> 
      <div className='titleBox'>
        <input
          className='globalInput'
          placeholder='Title...' 
          defaultValue={title}
          onChange={(event) => {setTitle(event.target.value)}}
        />
      </div>       	
      <EditorToolbar />
      <ReactQuill 
          className='Quill-Editor'
          theme="snow" 
          defaultValue={postText}
          onChange={setPostText}
          placeholder={"Write something awesome..."}
          modules={modules}
          formats={formats}
      />
    </div>
  )
}

export default Editor