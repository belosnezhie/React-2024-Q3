import React from 'react';

import { PeopleSearchResp } from '../../model/TypesStarWars';

interface CardProps {
  cardData: PeopleSearchResp;
}

class Card extends React.Component<CardProps> {
  render() {
    return (
      <>
        <div className="card">
          <p>Name: {this.props.cardData.name}</p>
          <p>Birth year: {this.props.cardData.birth_year}</p>
          <p>Hair color: {this.props.cardData.hair_color}</p>
          <p>Skin color: {this.props.cardData.skin_color}</p>
          <p>Eye color: {this.props.cardData.eye_color}</p>
          <p>Gender: {this.props.cardData.gender}</p>
        </div>
      </>
    );
  }
}

export default Card;
