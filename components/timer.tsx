'use client'
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Pomodoro } from '@/constants/pomodoro_constants'

export default function Timer() {
    // constants
    const workDuration = Pomodoro.DEFAULT_WORK_DURATION * 60
    const breakDuration = Pomodoro.DEFAULT_BREAK_DURATION * 60
    const longBreakDuration = Pomodoro.DEFAULT_LONG_BREAK_DURATION * 60
    const numOfSessions = Pomodoro.DEFAULT_NUM_OF_WORK_SESSIONS
    // states
    const [isWorkSession, setIsWorkSession] = useState(true)
    const [isBreak, setIsBreak] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const [session, setSession] = useState(0) // 
    const [timer, setTimer] = useState(workDuration)

    useEffect(() => { 
        if (session % 2 === 0 && session > 0) {
            setIsBreak(true)
            setIsWorkSession(false)
            setTimer(breakDuration)
            console.log("I'm the problem 1")
        }
        else if (session % 6 === 0 && session > 0 ) {
            setIsBreak(true)
            setIsWorkSession(false)
            setTimer(longBreakDuration)
            console.log("I'm the problem 2")
        }
        else {
            setIsBreak(false)
            setIsWorkSession(true)
            setTimer(workDuration)
            console.log("I'm the problem 3")
        }
        
    }, [breakDuration, isBreak, isWorkSession, longBreakDuration, session, timer, workDuration])


    const minutes = Math.floor(timer / 60)
    const seconds = timer % 60

    const toggle = () => {
        setIsActive(!isActive)

    }

    const reset = () => {
        setIsActive(false)
        setTimer(timer => {
            if (isWorkSession) {
                console.log("I'm the problem 4")
                return workDuration * 60

            }
            else if (isBreak) {
                console.log("I'm the problem 5")
                return breakDuration * 60
            }
            else {
                console.log("I'm the problem 6")
                return longBreakDuration * 60
            }  
        })
    }

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;
        if (isActive && timer > 0) {
            interval = setInterval(() => {
                console.log("I'm the problem 7")
                setTimer(timer => timer - 1);
            }, 1000);
        } else if (!isActive && timer !== 0) {
            if (interval !== null) {
                console.log("I'm the problem 8")
                clearInterval(interval);
            }
        }
        return () => {
            console.log("I'm the problem")
            if (interval !== null) {
                console.log("I'm the problem")
                clearInterval(interval);
            }
        };
    }, [isActive, timer])

    useEffect(() => {
        if (timer === 0) {
            setIsActive(false)
            setSession(session => session + 1)
        }
    }
        , [timer])
    
    useEffect(() => {
        if (session === numOfSessions) {
            setSession(0)
        }
    }
        , [session, numOfSessions])
    

    return (
        <div className="">
            <p className="text-2xl text-center p-2">Timer</p>
            <div>
                <p className="text-center text-3xl p-24">{minutes == 0 ? "00" : minutes}:{seconds == 0 ? '00' : seconds}</p>
            </div>
            <div className="flex justify-center grid-cols-2 gap-2">
                <Button onClick={toggle}>
                    {isActive ? 'Pause' : 'Start'}
                </Button>
                <Button onClick={reset}>Reset</Button>
            </div>
        </div>
    )
}




export { Timer } // export the component so it can be imported elsewhere