import React from 'react';

const Menu = ({item}) => {
    const {name, recipe, image, price} = item;
    return (
        <div className='flex space-x-2'>
            <img style={{borderRadius: "0px 200px 200px 200px"}} src={image} className='w-[100px]' alt="" />
            <div>
                <h1 className='uppercase'>{name}</h1>
                <p className='text-gray-400 text-sm'>{recipe}</p>
            </div>
            <h1>{price}</h1>
        </div>
    );
};

export default Menu;