import React from 'react';

export interface Movie {
    title: string;
    episode_id: number;
    release_date: string;
    opening_crawl: string;
    director:string,
    omdbDetails:{
        Poster:string,
        imdbRating:string,
        Ratings:[{
            Source:string,
            Value:string
        }]
           
    }
  }


  