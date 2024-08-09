import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies: null,
        trailerVideo: null,
       
    },

    reducers:{

        addNowPlayingMovies: (state, action) => {

            state.nowPlayingMovies = action.payload;
        },

        addPopularMovies: (state, action) => {

            state.popularMovies = action.payload;
           },

       addTrailerVideos: (state, action) => {

        state.trailerVideo = action.payload;
       },

       addTopRatedMovies: (state, action) => {

        state.topRatedMovies = action.payload;
       },

       addUpComingMovies: (state, action) => {

        state.upComingMovies = action.payload;
       },
       
       


    }

   

})


export const {addNowPlayingMovies, addTrailerVideos, addPopularMovies, addTopRatedMovies, addUpComingMovies} = moviesSlice.actions;

export default moviesSlice.reducer;