import React from 'react';
import OwnerLink from './OwnerLink'
const OwnerList = (props) =>

    <React.Fragment>
        <h2>Owners</h2>
        <ul>
            {props.owners.map(owner =>
                <li key={owner.id}>
              <OwnerLink href={owner.href} firstName={owner.firstName} lastName={owner.lastName}/>
                </li>
                )}
        </ul>
    </React.Fragment>
    ;

OwnerList.defaultProps = {
    owners: [],

}

export default OwnerList;