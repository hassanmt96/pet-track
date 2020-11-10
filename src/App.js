import PetDetailPage from './PetDetailPage'
import React from 'react'

function App(props) {
  return (
    <PetDetailPage pet={props.pet} />
  );
}

App.defaultProps = {
  pet: {},
};

export default App;
