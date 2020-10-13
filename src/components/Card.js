import React from 'react';

const Card = ({ name, email, id }) => {
  return(
    <div className='bg-light-blue dib br3 w5 pa3 ma2 grow bw2 shado-5 tc'>
      <img src={`https://robohash.org/${id}?200*200`} alt="photo"/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
