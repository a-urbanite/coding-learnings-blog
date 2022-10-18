import TitleInput from "./TitleInput/TitleInput";
import RichTextEditorToolbar from "./RichTextEditorToolbar/RichTextEditorToolbar";
import RichTextEditor from "./RichTextEditor/RichTextEditor";
import KeywordsBar from "./KeywordsBar/KeywordsBar";
import './ArticleEditor.css'

interface EditorProps {
	title: string 
	setTitle: Function
	postText: any
	setPostText: any
  keywords: any
  setkeywords: any
}

const ArticleEditor = ({title, setTitle, postText, setPostText, keywords, setkeywords}: EditorProps) => {

  return (
    <> 
      <TitleInput title={title} setTitle={setTitle}/>    	
      <KeywordsBar keywords={keywords} setkeywords={setkeywords}/>
      <RichTextEditorToolbar/>
      <RichTextEditor postText={postText} setPostText={setPostText}/>
    </>
  )
}

export default ArticleEditor