import TitleInput from "./TitleInput/TitleInput";
import RichTextEditorToolbar from "./RichTextEditorToolbar/EditorToolbar";
import RichTextEditor from "./RichTextEditor/RichTextEditor";
import 'react-quill/dist/quill.snow.css';
import './ArticleEditor.css'

interface EditorProps {
	title: string 
	setTitle: Function
	postText: any
	setPostText: any
}

const ArticleEditor = ({title, setTitle, postText, setPostText}: EditorProps) => {

  return (
    <> 
      <TitleInput title={title} setTitle={setTitle}/>    	
      <RichTextEditorToolbar/>
      <RichTextEditor postText={postText} setPostText={setPostText}/>
    </>
  )
}

export default ArticleEditor