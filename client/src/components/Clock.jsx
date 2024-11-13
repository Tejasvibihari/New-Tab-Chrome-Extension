import React, { useEffect, useState } from 'react';
import './clock.css';

export default function Clock() {
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();

            const nowHours = now.getHours().toString().padStart(2, '0');
            const nowMinutes = now.getMinutes().toString().padStart(2, '0');
            const nowSeconds = now.getSeconds().toString().padStart(2, '0');

            setHours(nowHours);
            setMinutes(nowMinutes);
            setSeconds(nowSeconds);
        };

        updateTime(); // Initial call to set the time immediately
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="clock">
            <div className="hours">
                <div className="first">
                    <div className="number text-3xl">{hours[0]}</div>
                </div>
                <div className="second">
                    <div className="number text-3xl">{hours[1]}</div>
                </div>
            </div>
            <div className="tick text-3xl">:</div>
            <div className="minutes">
                <div className="first">
                    <div className="number text-3xl">{minutes[0]}</div>
                </div>
                <div className="second">
                    <div className="number text-3xl">{minutes[1]}</div>
                </div>
            </div>
            <div className="tick text-3xl">:</div>
            <div className="seconds">
                <div className="first">
                    <div className="number text-3xl">{seconds[0]}</div>
                </div>
                <div className="second">
                    <div className="number text-3xl" >{seconds[1]}</div>
                </div>
            </div>
        </div>
    );
}