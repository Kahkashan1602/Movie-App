import React from 'react';
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

interface Rating {
  value: number;
  count?: number;
}

const Rating = ({ value, count = 10 }:Rating) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    const filled = i < value ? <FaStar style={{color:'orange'}}/> : <CiStar className='flex'/>
    stars.push(filled);
  }
  return <div className='flex'>{stars}</div>;
};

export default Rating;