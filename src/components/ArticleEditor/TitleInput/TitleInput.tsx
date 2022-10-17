interface TitleInputProps {
  title: any,
  setTitle: any
}

const TitleInput = ({title, setTitle}: TitleInputProps) => {
  return (
    <div className='titleBox'>
      <input
        className='globalForm__input'
        placeholder='Title...' 
        defaultValue={title}
        onChange={(event) => {setTitle(event.target.value)}}
      />
    </div> 
  )
}

export default TitleInput