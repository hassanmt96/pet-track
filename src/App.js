import PetDetailPage from './PetDetailPage'
import React from 'react'

function App(props) {
  console.log(props)
  return (
    <PetDetailPage pet={props.pet} />
  );
}

App.defaultProps = {
  pet: {
    PetType: {},
  },
};

export default App;
