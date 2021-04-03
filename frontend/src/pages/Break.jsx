import React from 'react';

function Break () {

    const [time, setTime] = React.useState('00:00');

    return(
        <div id='break-container'>
            <div id='time-remaining'>
                <TimeBox>
                    time={time}
                    setTime={setTime}
                </TimeBox>
            </div>
        </div>
    );
}

function TimeBox ( {time, setTime}) {

    return(
        <div 
            onChange={setTime}>
            {time}
        </div>
    )

}

export default Break;
