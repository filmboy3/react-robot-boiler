import React from 'react';
import Card from './Card';


const CardList = ({ robots }) => {
  const cardsArr = robots.map((user, i) => {
    return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
  })
  return (
      <div>
        {cardsArr}
      </div>
  );
}

export default CardList;