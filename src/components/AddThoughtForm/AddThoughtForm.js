import { useState } from 'react';
import { generateId, getNewExpirationTime } from '../../utils/utilities.js';

export function AddThoughtForm(props) {
  const [text,setText] = useState('');
  const handleTextChange=(event)=>{
    setText(event.target.value);
  };
    const handleSubmit=(event)=>{
    event.preventDefault();
    if(text.length==0) return;
    let thought= {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime(),
    };
    props.addThought(thought);
    setText('');
  };
  return (
    <form onSubmit={handleSubmit} className="AddThoughtForm">
      <input value={text} type="text"
       onChange={handleTextChange}
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
      />
      <input type="submit" value="Add" />
    </form>
  );
}
