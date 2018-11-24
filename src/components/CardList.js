import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    const cardComponents = robots.map(robot => 
        <Card key = {robot.id} id={robot.id} name={robot.name} email={robot.email} />
    );
    return (
        <section id = "CardList" className="d-flex justify-content-center flex-wrap m-0 pt-4">
            {cardComponents}
        </section>
    );
}

export default CardList;