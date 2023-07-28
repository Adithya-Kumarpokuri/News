import React from 'react'
import spinner from './spinner.gif'

const Loading=()=>{
    return (
     <div className='text-center my-3'>
      <img src={spinner} alt="loading" />
      {/* <iframe src="https://giphy.com/embed/kUTME7ABmhYg5J3psM" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> */}
     </div>
    )
}

export default Loading

