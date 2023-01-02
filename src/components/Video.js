const Video = ({ videoKey }) => {

  return (
    <div className='trailer'>
      <iframe
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=0`}
        title='trailer'
        allowFullScreen
        allow="autoplay"
      ></iframe>
    </div>
  )
}

export default Video