import React from 'react';
import comments from '../files/comments.json'
import { TestimonialCard } from './TestimonialCard'

const Comments = () => {
    
    return(
        <div className='flex justify-center items-center py-8'>
            <div className='w-full max-w-[1100px] px-4'>
                <h3 className="aboutTitle">Opiniones de Clientes: Lo que dicen sobre nuestro taller</h3>
                <div className='flex overflow-x-scroll snap-x'>
                    {comments.data.map((comment, index) => (
                        <TestimonialCard key={index} comment={comment}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default React.memo(Comments)