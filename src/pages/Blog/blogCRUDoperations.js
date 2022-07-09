// import { db, auth } from '../../firebase-config'
// import { addDoc, collection } from 'firebase/firestore'

// const postsCollectionRef = collection(db, "posts" )
// const createPost = async (title, postText) => {
//     console.log(auth)
//     await addDoc(postsCollectionRef, {
//       title, 
//       postText, 
//       date: new Date().toLocaleDateString(), 
//       author: 
//         {name: auth.currentUser?.displayName, 
//         id: auth.currentUser?.uid}}
//       )
//     navigate('/blog')
//   }