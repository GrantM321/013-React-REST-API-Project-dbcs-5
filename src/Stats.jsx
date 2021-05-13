import React, { useState, useEffect, useRef } from 'react';

function Stats({score}) {

  return (
    <main>
      <div class="header">
        <h1>Capitol Quiz</h1>
        <p class="score">Score: {score}</p>
      </div>

      <div class="stats">

      </div>
    </main>
  )
}

export default Stats;