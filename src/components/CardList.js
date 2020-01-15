import React, { Fragment } from 'react';
import Card from './Card';
// must put {} around robots to destructure since it does not contain a single 'thing'
//import {robots} from './robots';

const CardList = ({robots}) => {
  // throw a fake error for testing </ErrorBoundary>
  // if (true) { throw new Error('Fake Error in Cardlist'); }

  const cardsArray = robots.map((fMLoaf, i) => {
    // return (<Card 
    //   key={robots[i].id}    WTF. Why did he do it this way?!?
    //   id={robots[i].id} 
    //   name={robots[i].name} 
    //   email={robots[i].email} 
    //   set={robots[i].set} />);

      return (<Card 
        key={fMLoaf.id} 
        id={fMLoaf.id} 
        name={fMLoaf.name} 
        email={fMLoaf.email} 
        set={fMLoaf.set} />);
      })
  return (
    <Fragment className='tc'>
      {cardsArray}
      {/* original, manual way of doing this.
      <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} set={robots[0].set} />
      <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} set={robots[1].set} />
      <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} set={robots[2].set} />
      <Card id={robots[3].id} name={robots[3].name} email={robots[3].email} set={robots[3].set} /> 

      could also put what cardsArray equals in this section. ie:
      {
        robots.map((user, i) => {
        return (<Card 
          key={robots[i].id} 
          id={robots[i].id} 
          name={robots[i].name} 
          email={robots[i].email} 
          set={robots[i].set} />);
      }
      */
      }
    </Fragment>
  )
}

export default CardList;