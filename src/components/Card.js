import React from 'react';

// can destructure within the parameter field. ie:
// const Card = ({ name, email, id }) => {

const Card = (props) => {
  // deconstruct the individual properties from props (passed in). w/o this we have to use: props.name, etc.
  const { name, email, set } = props;
  return(
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-4'>
      <img alt='robots' src={`https://robohash.org/${name}?set=set${set}&size=150x150`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card;