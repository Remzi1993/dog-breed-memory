import React from 'react'
import Emoji from './Emoji'

export default () => {
  return <>
      <h2 className="content-subhead"><Emoji symbol="🐕" label="Dog"/><Emoji symbol="🐩" label="Poodle"/>
        Dog breed memorization game. <Emoji symbol="🐕" label="Dog"/><Emoji symbol="🐩" label="Poodle"/>
      </h2>
      <p><Emoji symbol="📋" label="Clipboard"/> Features <Emoji symbol="📋" label="Clipboard"/></p>
      <ol>
        <li>The app should have a dog list page where it lists all the breeds, so the user can memorise the names of all the breeds.</li>
        <li>When you click one of the breeds on the doglist page you should go to a page that shows 10 pictures of that breed. So the user can see what a breed looks like.</li>
        <li>The app contains a game which must show the user a random picture of a dog and it must ask the user to choose the correct breed name from a list of 3 options.</li>
        <li>When a user makes the correct choice, they proceed to the next question.</li>
      </ol>
  </>
}