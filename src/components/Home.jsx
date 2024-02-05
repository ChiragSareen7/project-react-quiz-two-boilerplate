import React, { useState } from 'react';
import Quiz from './Quiz';

function Home() {
    const [start, setStart] = useState(false);
  return (
    <div>
    {!start && (
        <div className="play">
          <button className="playButton" onClick={() => setStart(true)}>
            Start
          </button>
        </div>
      )}
      {start && <Quiz />}
    </div>
  )
}

export default Home
