import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='text-center my-8'>
            <p className='text-yellow-500 mb-2'>---{subHeading}---</p>
            <h1 className='uppercase border-base-300 border-y-2 text-3xl py-2 w-1/4 mx-auto'>{heading}</h1>
        </div>
    );
};

export default SectionTitle;