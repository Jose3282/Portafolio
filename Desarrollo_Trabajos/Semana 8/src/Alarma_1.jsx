import React, { useState, useEffect } from 'react';
import beepSound from './BeepExamen.mp3';

const Alarma = () => {
const [currentTime, setCurrentTime] = useState(new Date());
const [alarmHour, setAlarmHour] = useState(0);
const [alarmMinute, setAlarmMinute] = useState(0);
const [isAlarmSet, setIsAlarmSet] = useState(false);
const [isAlarmActive, setIsAlarmActive] = useState(false);
const [isCountdownExpired, setIsCountdownExpired] = useState(false);
const [isAlarmExpired, setIsAlarmExpired] = useState(false);
const [alarmSound, setAlarmSound] = useState(null);
const [alarmSoundLoop, setAlarmSoundLoop] = useState(null);
const [soundLoopCount, setSoundLoopCount] = useState(0);

useEffect(() => {
    const timer = setInterval(() => {
    setCurrentTime(new Date());
    }, 1000);

    return () => {
    clearInterval(timer);
    };
}, []);

useEffect(() => {
    if (isAlarmActive) {
    const alarmTime = new Date();
    alarmTime.setHours(alarmHour);
    alarmTime.setMinutes(alarmMinute);
    alarmTime.setSeconds(0);

    if (currentTime >= alarmTime) {
        setIsCountdownExpired(true);
        setIsAlarmExpired(true);
        playAlarmSound();
    }
    }
}, [isAlarmActive, alarmHour, alarmMinute, currentTime]);

useEffect(() => {
    if (isAlarmExpired) {
    const loopTimer = setTimeout(() => {
        stopAlarmSound();
        setIsAlarmExpired(false);
        setIsAlarmActive(false);
        setSoundLoopCount(soundLoopCount + 1);
    }, 30000);

    if (soundLoopCount < 3) {
        setAlarmSoundLoop(loopTimer);
    } else {
        clearTimeout(alarmSoundLoop);
        setSoundLoopCount(0);
    }
    }
}, [isAlarmExpired, soundLoopCount]);

const formatTime = (time) => {
    return time.toString().padStart(2, '0');
};

const playAlarmSound = () => {
    const audio = new Audio(beepSound);
    audio.loop = true;
    audio.play();
    setAlarmSound(audio);
};

const stopAlarmSound = () => {
    alarmSound.pause();
    alarmSound.currentTime = 0;
    setAlarmSound(null);
};

const handleAlarmSet = () => {
    setIsAlarmSet(true);
    setIsAlarmActive(true);
};

const handleAlarmDisable = () => {
    setIsAlarmSet(false);
    setIsAlarmActive(false);
    setSoundLoopCount(0);
    stopAlarmSound();
};

const handleHourChange = (e) => {
    const value = parseInt(e.target.value);
    setAlarmHour(value > 23 ? 23 : value);
};

const handleMinuteChange = (e) => {
    const value = parseInt(e.target.value);
    setAlarmMinute(value > 59 ? 59 : value);
};

const renderClock = () => {
    const hours = formatTime(currentTime.getHours());
    const minutes = formatTime(currentTime.getMinutes());
    const seconds = formatTime(currentTime.getSeconds());
    const date = currentTime.toLocaleDateString();

    return (
    <div>
        <h1>Ejercicio 3</h1>
        <div className="clock">
            <h1>{`${hours}:${minutes}:${seconds}`}</h1>
            <p>{date}</p>
        </div>
    </div>
    );
};

const renderAlarm = () => {
    return (
    <div className="alarm">
        <div className="alarm-inputs">
        <label>Horas:</label>
        <input
            type="number"
            value={alarmHour}
            onChange={handleHourChange}
            min={0}
            max={23}
            disabled={isAlarmSet}
            className="alarm-input"
        />
        <label>Minutos:</label>
        <input
            type="number"
            value={alarmMinute}
            onChange={handleMinuteChange}
            min={0}
            max={59}
            disabled={isAlarmSet}
            className="alarm-input"
        />
        </div>
        {!isAlarmSet && !isAlarmActive && (
        <button onClick={handleAlarmSet}>Establecer alarma</button>
        )}
        {isAlarmSet && !isAlarmActive && (
        <button onClick={handleAlarmDisable}>Desactivar alarma</button>
        )}
    </div>
    );
};

const renderCountdown = () => {
    if (isCountdownExpired) {
    const countdown = Math.floor(
        (currentTime - new Date().setHours(alarmHour, alarmMinute, 0)) / 1000
    );

    return (
        <div className="countdown expired">
        <h2>{`-${formatTime(Math.abs(countdown) % 60)}`}</h2>
        </div>
    );
    } else {
    const countdown = Math.floor(
        (new Date().setHours(alarmHour, alarmMinute, 0) - currentTime) / 1000
    );

    return (
        <div className="countdown">
        <h2>{`${formatTime(Math.floor(countdown / 3600))}:${formatTime(
            Math.floor((countdown % 3600) / 60)
        )}:${formatTime(countdown % 60)}`}</h2>
        </div>
    );
    }
};

return (
    <div className="alarma">
    {renderClock()}
    {isAlarmSet && renderCountdown()}
    {renderAlarm()}
    </div>
);
};

export default Alarma;
