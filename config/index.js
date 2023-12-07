import {get} from 'lodash';

const COUNTRY_CODES = {
    ID :"ID",
    MY :"MY",
    SG : "SG"
}
const ENABLED_COUNTRIES = [
    COUNTRY_CODES.ID,
    COUNTRY_CODES.MY,
    COUNTRY_CODES.SG,
]
  

export const countryConfig = (key, defaultVal)=>{
    try {
    const countryCode = 'ID';
    if(ENABLED_COUNTRIES.includes(countryCode)){
        const config = require(`./${countryCode}/modules`).default
        return get(config,key,defaultVal)
      }
    return defaultVal
    } catch (error) {
    console.log("ERRROR>>>",error);
    return defaultVal
        
    }

  
} 
