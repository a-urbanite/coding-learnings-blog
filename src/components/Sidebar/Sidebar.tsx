import './Sidebar.css'

const Sidebar = ({postList}: any) => {

  const scrollToFunc = (id: string) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({behavior: "smooth"})
  }

  return (
    <div className='sidebar'>
      <h2 className='sidebar__title'>Articles</h2>
      <ul className='sidebar__list'>
          <>{postList.map((post: any) => {
              return (<li key={post.id} className='sidebar__item'>
                        <button onClick={() => scrollToFunc(post.id)}> {post.title} - {new Date(post.date.seconds * 1000).toLocaleDateString()} </button>
                      </li>)
          })}</>
      </ul>
    </div>
  )
}

export default Sidebar