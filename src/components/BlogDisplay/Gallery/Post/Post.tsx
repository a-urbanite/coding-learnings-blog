import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../../firebase-config'
import { useLocation, useNavigate } from 'react-router-dom'
import parse from 'html-react-parser'
import './Post.css'
import { Link } from 'react-router-dom';
import { Key } from 'react';

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
        { post.keywords && 
          <div className='post__keywordsContainer'>
            Keywords: 
            {post.keywords.map((keyword:string, index: Key | null | undefined) => 
              <span key={index} className='post__keyword'>{keyword}</span>)
            }
          </div>}

        {location.pathname === "/" ? 
          <Link style={{ textDecoration: 'none' }} to={`blog/${post.id}`}>
            <h1 className='post__heading'>{post.title}</h1>
          </Link> : 
          <h1 className='post__heading'>{post.title}</h1>}
   
      <div className='post__text'>{parse(post.postText)}</div>
      <hr className='horzontalLine'/>
      <div className='post__footer'>
        <p>@{post.author.name}</p>
        <p>{new Date(post.date.seconds * 1000).toLocaleDateString()}</p>
        <div className='post__buttonContainer'>
          {isAuth && <span className='globalBtn' onClick={() => {editPost(post)}}>Edit</span>}
          {isAuth && <span className='globalBtn' onClick={() => {deletePost(post.id)}}>Delete</span>}
        </div>
      </div>
    </div>
  )
}

export default Post