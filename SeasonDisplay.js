import React from 'react'
import "semantic-ui-css/semantic.min.css";

const SeasonConfig = {
    summer:{
        text:'Lets hit the beach',
        icon:'sun icon'
    },
    winter:{
        text:'Bluuur its chill',
        icon:'snowflake icon'
    }
}

const SeasonDisplay=(props)=>{

    const getSeason =(lat, month)=>{
        if(month<2 && month<9){
            return lat<0? 'summer' : 'winter'
        }
        else{
            return lat<0? 'winter' : 'summer'
        }
    }

    const season = getSeason(props.lat,new Date().getMonth())
    // const text = season ==="summer"?'Lets hit the beach': 'Bluuur its chill';
    // const icon = season ==="summer"?'sun icon':'snowflake icon';

    const {text,icon}= SeasonConfig[season]

    
    return <div>
        Season:{text}
        <i class={icon}></i>
        <i class={icon}></i>
        </div>
}

export default SeasonDisplay;