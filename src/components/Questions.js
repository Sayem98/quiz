import React from 'react'

function Questions({question}) {
  return (
    <>
      <h1>{question}?</h1>
      <h4>Question can have multiple answers.</h4>
    </>
  );
}

export default Questions