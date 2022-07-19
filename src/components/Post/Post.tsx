import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase-config'
import { useLocation, useNavigate } from 'react-router-dom'
import parse from 'html-react-parser'
import './Post.css'
import { Link } from 'react-router-dom';

const Post = ({post, isAuth, getPosts, setPostToEdit}: any) => {
  const location = useLocation();
  let navigate = useNavigate();

  const deletePost = async (id: any) => {
    var result = window.confirm("Want to delete?");
    if (result) {
        const postDoc = doc(db, 'posts', id)
        await deleteDoc(postDoc);
        getPosts()
      }
    };
  
  const editPost = async (post: any) => {
    setPostToEdit(post)
    navigate('/editpost')
  };

  return (
    <div className='post' key={post.id} id={post.id}> 
      <div className='post__header'>
        {location.pathname === "/blog" ? <Link to={post.id}><h1>{post.title}</h1></Link> : <h1>{post.title}</h1>}
      </div>
      <div className='post__text'>{parse(post.postText)}</div>
      <div className='post__footer'>
        <h3>@{post.author.name}</h3>
        <p>{new Date(post.date.seconds * 1000).toLocaleDateString()}</p>
        { post.keywords && <span>Keywords: {post.keywords.map((keyword:string) => <span className='keyword'>{keyword}</span>)}</span>}
        <div className='post__buttonContainer'>
          {isAuth /*&& post.author.id === auth.currentUser?.uid*/ && <button onClick={() => {deletePost(post.id)}}>&#128465;</button>}
          {isAuth /*&& post.author.id === auth.currentUser?.uid*/ && <button onClick={() => {editPost(post)}}>&#9999;</button>}
        </div>
      </div>
    </div>
  )
}

export default Post