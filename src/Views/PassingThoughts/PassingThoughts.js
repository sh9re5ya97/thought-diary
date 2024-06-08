import { useState } from 'react';
import { AddThoughtForm } from '../../components/AddThoughtForm/AddThoughtForm.js';
import { Thought } from '../../components/Thought/Thought.js';
import { generateId, getNewExpirationTime } from '../../utils/utilities.js';
import './PassingThoughts.css';


export default function PassingThoughts() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: 'This is a place for your passing thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);
  console.log(thoughts)
const addThought=(thought)=>{
  console.log(thoughts)
setThoughts((thoughts) =>[thought,...thoughts]);
console.log(thoughts)

};
const removeThought=(thoughtIdToRemove)=>{
  console.log(thoughts)
setThoughts(thoughts.filter((thought)=>thought.id!==thoughtIdToRemove));
console.log(thoughts)
};
  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm key='addThoughtForm' addThought={addThought} />
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought removeThought={removeThought} key={thought.id} thought={thought} />
          ))}
        </ul>
      </main>
    </div>
  );
}