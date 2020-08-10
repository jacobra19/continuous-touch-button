import React, {useState} from 'react';
import MicIcon from '@material-ui/icons/Mic';
require('./TouchButtonStyle.scss')

const TouchButton = () => {
    const [isTouch, setIsTouch] = useState(false);
    const styles = (s) => {

        const styles = {
            root:{
                width:100,
                height: 100,
                backgroundColor: isTouch ?'#ff5656': '#ff4242',
                borderRadius:'50%',
                display:'flex',
                justifyContent: "center",
                alignItems: "center",

            },
            micIcon:{
                width:70,
                height:70,
                color:isTouch ? 'white' : 'whitesmoke',
            }
        }

        return (styles[s])
    }

    const handleButton = (isOn) => {
        setIsTouch(isOn)
    }

    return (
        <div style={styles('root')}  className={isTouch ? 'waves' : ''}
            onTouchStart={(e)=>{handleButton(true)}} 
            onTouchEnd={(e)=>{handleButton(false)}}
            onMouseDown={(e)=>{handleButton(true)}} 
            onMouseUp={(e)=>{handleButton(false)}}
        >
            <MicIcon style={styles('micIcon')}/>
        </div>
    );
}

export default TouchButton;
