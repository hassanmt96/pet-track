import React from 'react';
import OwnerList from './OwnerList'

import PetDetailList from './PetDetailList';

const PetDetails = (props) =>
  <>
    <PetDetailList pet={props.pet} />
    <OwnerList owners={props.pet.Owners} />
  </>
  ;

// PetDetails.defaultProps = {
//   pet: {
//     PetType: {},
//   },
// };

export default PetDetails;
