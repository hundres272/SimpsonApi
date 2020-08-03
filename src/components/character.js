import React from 'react'

function Character ({quote,character,image}) {
    return (
        <>
            <div className='title-Character'>
                <h2>{character}</h2>
            </div>
            <div className='image-quote'>
                <div className="text-vert">
                    <p>
                        {character}
                    </p>
                </div>
                <img src={image} alt={character} />
                <div className='quote'>
                    <div className='center-quote'>
                        <p>{quote}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Character