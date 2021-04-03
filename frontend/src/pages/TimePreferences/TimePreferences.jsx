import React from 'react';
import TimePicker from 'react-time-picker';
import './TimePreferences.css';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import useStyles from './styles';

const dayArray = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

function TimePreferences () {

    const [checkedDays, setCheckedDays] = React.useState([false, false, false, false, false, false, false]);
    const [startTime, setStartTime] = React.useState('00:00');
    const [endTime, setEndTime] = React.useState('23:59');
    const [intervalMinutes, setIntervalMinutes] = React.useState(25);

    // changes day's true/false + colour when clicked
    const updateDays = (idx) => {
        const newCheckedDays = [...checkedDays];
        if (newCheckedDays[idx]) {
            newCheckedDays[idx] = false;
        } else {
            newCheckedDays[idx] = true;
        }
        setCheckedDays(newCheckedDays);
    }

    React.useEffect(() => {
        console.log("intervalMinutes=", intervalMinutes);
    }, [intervalMinutes]);

    return (
        <div id='time-preferences-container'>
            <h1>Time Preferences</h1>
            <div id='days-checklist'>
                {checkedDays.map((val, idx) => {
                    return (
                        <DayBox 
                            visible={checkedDays[idx]}
                            index={idx}
                            setDay={() => updateDays(idx)}
                        />
                    );
                })}
            </div>
            <div id='start-end-date'>
                <TimePicker value={startTime} onChange={setStartTime} />
                <TimePicker value={endTime} onChange={setEndTime} />
            </div>
            <div id='interval-config'>
                <Dropdown>
                    Let me take a break every
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        {intervalMinutes} minutes
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onSelect={() => setIntervalMinutes(5)}>5 minutes</Dropdown.Item>
                        <Dropdown.Item onSelect={() => setIntervalMinutes(10)}>10 minutes</Dropdown.Item>
                        <Dropdown.Item onSelect={() => setIntervalMinutes(15)}>15 minutes</Dropdown.Item>
                        <Dropdown.Item onSelect={() => setIntervalMinutes(20)}>20 minutes</Dropdown.Item>
                        <Dropdown.Item onSelect={() => setIntervalMinutes(25)}>25 minutes</Dropdown.Item>
                        <Dropdown.Item onSelect={() => setIntervalMinutes(30)}>30 minutes</Dropdown.Item>
                        <Dropdown.Item onSelect={() => setIntervalMinutes(35)}>35 minutes</Dropdown.Item>
                        <Dropdown.Item onSelect={() => setIntervalMinutes(40)}>40 minutes</Dropdown.Item>
                        <Dropdown.Item onSelect={() => setIntervalMinutes(45)}>45 minutes</Dropdown.Item>
                        <Dropdown.Item onSelect={() => setIntervalMinutes(50)}>50 minutes</Dropdown.Item>
                        <Dropdown.Item onSelect={() => setIntervalMinutes(60)}>1 hour</Dropdown.Item>
                        <Dropdown.Item onSelect={() => setIntervalMinutes(90)}>1.5 hours</Dropdown.Item>
                        <Dropdown.Item onSelect={() => setIntervalMinutes(120)}>2 hours</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
}

function DayBox ( {visible, index, setDay} ) {
    const classes = useStyles();
    if (visible === true) {
        return (
            <span
                className='dayBox' 
                onClick={setDay}
                style={{backgroundColor: "red", cursor:"pointer"}}>{dayArray[index]}
            </span> 
        );
    } else {
        return (
            <span 
                className='day-box' 
                onClick={setDay}
                style={{backgroundColor: "yellow", cursor:"pointer"}}>{dayArray[index]}
            </span> 
        );
    }
}

export default TimePreferences;
