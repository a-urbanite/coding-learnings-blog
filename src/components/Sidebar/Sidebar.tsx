import './Sidebar.css'

const Sidebar = ({postsToDisplay}: any) => {

  const scrollToFunc = (id: string) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({behavior: "smooth"})
  }

  return (
    <div className='sidebar'>
      <h2 className='sectionTitle'>Articles</h2>
      <ul className='sidebar__list'>
          <>{postsToDisplay.map((post: any) => {
              return (<li key={post.id} className='globalBtn'>
                        <span 
                          
                          onClick={() => scrollToFunc(post.id)}
                        > 
                          <b>{post.title}</b> - {new Date(post.date.seconds * 1000).toLocaleDateString()} 
                        </span>
                      </li>)
          })}</>
      </ul>
    </div>
  )
}

export default Sidebar