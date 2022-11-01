import "./Gallery.css"
import Post from './Post/Post';

const Gallery = ({isAuth, setPostToEdit, postsToDisplay}:any) => {
  
  return (
    <div className='gallery'>
      {postsToDisplay.map((post: any) => {
        return (
          <Post 
            key={post.id} 
            post={post} 
            isAuth={isAuth} 
            setPostToEdit={setPostToEdit}>
          </Post>
        )
      })}
    </div>
  )
}

export default Gallery