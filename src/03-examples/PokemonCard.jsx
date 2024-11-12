import React from 'react'

export const PokemonCard = ({ id, name, sprites = [] }) => {
  return (
    <section style={{ height: 200 }}>
        <h3 className='text-capitalize'>#{ id } - { name }</h3>

        <div>
            {
                sprites.map( sprite => (
                    <img key={ sprite } src={ sprite } alt={ name } />
                ) )
            }
        </div>
      
    </section>
  )
}
