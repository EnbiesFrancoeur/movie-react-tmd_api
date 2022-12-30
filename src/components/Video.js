const Video = ({ videoKey }) => {

  return (
    <div className='trailer'>
      <iframe src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`} allowFullScreen title='trailer'></iframe>
    </div>
  )
}

export default Video