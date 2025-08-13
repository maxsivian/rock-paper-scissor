import { configureStore } from "@reduxjs/toolkit"
import gameReducer from "./gameSlice"
import routeReducer from "./routeSlice"

export const store = configureStore(
    {
        reducer: {
            game: gameReducer,
            route: routeReducer
        }
    }
)

