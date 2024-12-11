import React from 'react';
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

interface Ratings {
  value: number;
}

const Rating = ({ value}:Ratings) => {
  const stars = [];
  for (let i = 0; i < 10; i++) {
    const filled = i < value ? <FaStar style={{color:'orange'}} key={i}  data-testid="filled-star"/> : <CiStar className='flex' key={i} data-testid="empty-star"/>
    stars.push(filled);
  }
  return <div className='flex'>{stars}</div>;
};

export default Rating;