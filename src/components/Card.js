import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        <div className = "card text-center m-3 bg-info">
            <img className = "card-img-top" alt = "robot" src = {`https://robohash.org/${id}`} />
            <div className = "card-body">
                <h6 className = "card-title">{name}</h6>
                <p className = "card-text">{email}</p>
            </div>
        </div>
    );
}

export default Card;