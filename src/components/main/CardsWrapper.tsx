import React, { ReactNode } from 'react';

import { PeopleSearchResp } from '../../model/TypesStarWars';

import Card from './Card.tsx';

import './Main.css';

interface CardsWrapperProps {
  cardPeopleData: PeopleSearchResp[];
}

class CardsWrapper extends React.Component<CardsWrapperProps> {
  render(): ReactNode {
    return (
      <>
        {this.props.cardPeopleData.map((obj, index) => {
          return <Card cardData={obj} key={index} />;
        })}
      </>
    );
  }
}

export default CardsWrapper;
