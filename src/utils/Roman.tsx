import React from 'react'

export const Roman = (num:any):any => {
    if(num < 1){ return "";}
    if(num >= 40){ return "XL" + Roman(num - 40);}
    if(num >= 10){ return "X" + Roman(num - 10);}
    if(num >= 9){ return "IX" + Roman(num - 9);}
    if(num >= 5){ return "V" + Roman(num - 5);}
    if(num >= 4){ return "IV" + Roman(num - 4);}
    if(num >= 1){ return "I" + Roman(num - 1);} 
}


