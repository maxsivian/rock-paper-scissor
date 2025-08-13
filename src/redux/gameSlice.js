import { createSlice } from "@reduxjs/toolkit";
import { getComputerChoice, getGameWinner } from "../scripts/rps_game_logic";


const getUserNameFromLS = () => {
    let username = localStorage.getItem("username")
    // console.log("username", username);
    if (!username) {
        username = ""
    }
    return username
}

const getUserAvatarFromLS = () => {
    let userAvatar = localStorage.getItem("userAvatar")
    // console.log("userAvatar", userAvatar);
    if (!["female", "male"].includes(userAvatar)) {
        userAvatar = "female"
    }
    return userAvatar
}

const initialState = {
    computerScore: 0,
    userScore: 0,
    computerChoice: "-",
    userChoice: "-",

    username: getUserNameFromLS(),
    userAvatar: getUserAvatarFromLS(),
    totalGamesPlayed: 0,
    totalMatchesDrawn: 0,
    currentWinner: "-",
    currentTime: "",

    userWinStreak: 0,
    computerWinStreak: 0,
    userTestStreak: 0,
    computerTestStreak: 0,
    drawStreak: 0,
    testDrawStreak: 0
}


const handleGetUserInput = (state, action) => {
    // console.log("action.payload", action.payload);
    state.userChoice = action.payload
    state.computerChoice = getComputerChoice()
    state.currentWinner = getGameWinner(state.userChoice, state.computerChoice)

    // console.log("state.userChoice", state.userChoice);
    // console.log("state.computerChoice", state.computerChoice);
    // console.log("state.currentWinner", state.currentWinner);

    if (state.currentWinner == "u") {
        state.userScore += 1
        if (state.userTestStreak == state.userWinStreak) {
            // state.userWinStreak = state.userTestStreak
            state.userTestStreak += 1
            state.userWinStreak += 1
        }
        else {
            state.userTestStreak += 1
        }


        if (state.computerTestStreak > state.computerWinStreak) {
            state.computerWinStreak = state.computerTestStreak
        }
        state.computerTestStreak = 0

        if (state.testDrawStreak > state.drawStreak) {
            state.drawStreak = state.testDrawStreak
        }
        state.testDrawStreak = 0
    }
    else if (state.currentWinner == "c") {
        state.computerScore += 1
        if (state.computerTestStreak == state.computerWinStreak) {
            // state.computerWinStreak = state.computerTestStreak
            state.computerTestStreak += 1
            state.computerWinStreak += 1
        }
        else {
            state.computerTestStreak += 1
        }


        if (state.userTestStreak > state.userWinStreak) {
            state.userWinStreak = state.userTestStreak
        }
        state.userTestStreak = 0

        if (state.testDrawStreak > state.drawStreak) {
            state.drawStreak = state.testDrawStreak
        }
        state.testDrawStreak = 0
    }
    else {
        state.totalMatchesDrawn += 1
        if (state.testDrawStreak == state.drawStreak) {
            state.testDrawStreak += 1
            state.drawStreak += 1
        }
        else {
            state.testDrawStreak += 1
        }
    }

    state.totalGamesPlayed += 1
    state.currentTime = Date.now()
}

const handleChangeUsername = (state, action) => {
    state.username = action.payload
    localStorage.setItem("username", state.username)
}

const handleChangeUserAvatar = (state, action) => { 
    state.userAvatar = action.payload
    localStorage.setItem("userAvatar", state.userAvatar)
}

const handleResetScores = (state, action) => {
    state.computerScore = 0
    state.userScore = 0
    state.computerChoice = "-"
    state.userChoice = "-"

    state.computerWinStreak = 0
    state.userWinStreak = 0
    state.userTestStreak = 0
    state.computerTestStreak = 0
    state.drawStreak = 0
    state.testDrawStreak = 0

    state.totalGamesPlayed = 0
    state.totalMatchesDrawn = 0
    state.currentWinner = "-"
}

export const gameSlice = createSlice({
    name: "gameX",
    initialState,
    reducers: {
        getUserInput: handleGetUserInput,
        changeUsername: handleChangeUsername,
        changeUserAvatar: handleChangeUserAvatar,
        resetScores: handleResetScores
    }
})


export const { getUserInput, resetScores, changeUsername, changeUserAvatar } = gameSlice.actions

export default gameSlice.reducer