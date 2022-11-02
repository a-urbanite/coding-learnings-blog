import './Sidebar.css'

const Sidebar = ({currentPageContents}: any) => {

  const scrollToFunc = (id: string) => {
    document.getElementById(id)?.scrollIntoView({behavior: "smooth"})
  }

  return (
    <div className='sidebar'>
      <h2 className='sectionTitle'>Articles</h2>
      <ul className='sidebar__list'>
          <>{currentPageContents.map((post: any) => {
              return (
              <li key={post.id} className='globalBtn articleBtn'>
                <span onClick={() => scrollToFunc(post.id)}> 
                  {post.title} - {new Date(post.date.seconds * 1000).toLocaleDateString()} 
                </span>
              </li>
              )
          })}</>
      </ul>
    </div>
  )
}

export default Sidebar