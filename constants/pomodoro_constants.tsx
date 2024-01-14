const DEFAULT_WORK_DURATION = 25; // Default work duration in minutes
const DEFAULT_BREAK_DURATION = 5; // Default break duration in minutes
const DEFAULT_LONG_BREAK_DURATION = 15; // Default long break duration in minutes
const DEFAULT_NUM_OF_WORK_SESSIONS = 4; // Default number of work sessions before a long break

export const Pomodoro = {
    DEFAULT_WORK_DURATION,
    DEFAULT_BREAK_DURATION,
    DEFAULT_LONG_BREAK_DURATION,
    DEFAULT_NUM_OF_WORK_SESSIONS
}

export type PomodoroState = {
    workDuration: number;
    breakDuration: number;
    longBreakDuration: number;
    numOfSessions: number;
}

export const PomodoroDefault: PomodoroState = {
    workDuration: DEFAULT_WORK_DURATION,
    breakDuration: DEFAULT_BREAK_DURATION,
    longBreakDuration: DEFAULT_LONG_BREAK_DURATION,
    numOfSessions: DEFAULT_NUM_OF_WORK_SESSIONS
}

