import React, { useEffect } from 'react';
import './App.css';
import Stories from 'react-insta-stories'

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const appContainer = css`
  max-width: 1060px;
  margin: 0 auto;
  display: flex;
  justify-content:center;
`

const stories = [
  'https://m.media-amazon.com/images/M/MV5BMTEzNDc3MDQ2NzNeQTJeQWpwZ15BbWU4MDYzMzUwMDIx._V1_.jpg',
  'https://pbs.twimg.com/profile_images/1210618202457292802/lt9KD2lt_400x400.jpg',
  'https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg',
];

function App() {  
  return (
    <div css={appContainer}>
      <Stories 
        stories={stories}
        defaultInterval={1500}
        width={432}
        height={768}
      />
    </div>
  );
}

export default App;
