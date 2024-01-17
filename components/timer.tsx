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
    // Math
    const minutes = Math.floor(timer / 60)
    const seconds = timer % 60

    // Start or Pause timer
    const toggle = () => {
        setIsActive(!isActive)

    }
    const reset = () => {
        setIsActive(false)
        setTimer(timer => {
            if (isWorkSession) {
                return workDuration
            }
            else if (isBreak) {
                return breakDuration
            }
            else {
                return longBreakDuration
            }  
        })
    }
    
    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;
        if (isActive && timer > 0) {
            interval = setInterval(() => {
                setTimer(timer => timer - 1);
            }, 1000);
        } else if (!isActive && timer !== 0) {
            if (interval !== null) {

                clearInterval(interval);
            }
        }
        return () => {
            console.log("I'm the problem")
            if (interval !== null) {
                console.log("I'm the problem 10")
                clearInterval(interval);
            }
        };
    }, [isActive, timer])

    useEffect(() => {
        if (timer === 0) {
            setIsActive(false)
            setSession(session => session + 1)
        
        
            if (session % 2 === 0 && session > 0 && !isActive) {
                setIsBreak(true)
                setIsWorkSession(false)
                setTimer(breakDuration)
            
            }
            else if (session % 6 === 0 && session > 0) {
                setIsBreak(true)
                setIsWorkSession(false)
                setTimer(longBreakDuration)
            }
            else {
                setIsBreak(false)
                setIsWorkSession(true)
                setTimer(workDuration)
            
            }
        }
    }
        , [timer, session, isActive, breakDuration, longBreakDuration, workDuration])
    
    
    useEffect(() => {
        if (session === numOfSessions) {
            setSession(0)
        }
    }
        , [session, numOfSessions])
    

    return (
        <div className='items-center'>  
            <p className="text-6xl text-center font-extralight p-24">Pommy</p>
            <div>
                <p className="text-center text-8xl">{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>
            <div className="flex justify-center items-center grid-cols-2 gap-2 p-24">
                <Button onClick={toggle}>
                    {isActive ? 'Pause' : 'Start'}
                </Button>
                <Button onClick={reset}>Reset</Button>
            </div>
            </div>
        </div>
    )
}


export { Timer } // export the component so it can be imported elsewhere