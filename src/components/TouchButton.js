import React from 'react';

const TouchButton = () => {
    const styles = (s) => {
        const styles = {
            root:{
                width:300,
                height: 300,
                backgroundColor: 'yellow',
                borderRadius:'50%',
                '&:hover':{
                    backgroundColor:'red',
                }
            }
        }

        return (styles[s])
    }
    return (
        <div style={styles('root')} onTouchStart={()=>{console.log(1)}} onTouchEnd={()=>{console.log(2)}}>
            btn
        </div>
    );
}

export default TouchButton;
