"use client"
import React from 'react';
import { getTimezoneOffset, formatInTimeZone } from 'date-fns-tz'



const TimeZone = () => {
    const myTz = "Africa/Algiers"
    const myOffset = getTimezoneOffset(myTz)
    const myTime = formatInTimeZone(new Date(), myTz, "HH:mm")
    const theirTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const theirOffset = getTimezoneOffset(theirTz)
    const gmt = formatInTimeZone(new Date(), myTz, "O")
    const offset = myOffset - theirOffset
    let message
    if (offset < 0) {
        message = `It is ${myTime} for me, that's ${offset / 1000 / 60 / 60} hours behind you.`
    } else if (offset > 0 ) {
        message = `It is ${myTime} for me, that's ${offset / 1000 / 60 / 60} hours ahead of you.`
    } else {
        message = `It is ${myTime} for me, that's the same as you!`
    }

    return (
        <div className={"outline outline-[#1f1f21] gap-2 bg-[#131314] h-full rounded-md"}>

            <div className={"flex flex-row items-center justify-center p-1"}>
                <span className={"text-gray-400 text-lg"}>My timezone</span>
            </div>
            <div className={"flex flex-col items-center justify-center p-1"}>
                {message}
                <span className={"text-[#404040]"}>(My timezone is {gmt})</span>
            </div>
        </div>
    );
};

export default TimeZone;