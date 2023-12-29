import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  // get user details
  userData: {},
  userDataIsLoading: false,
  userDataIsError: false,
  userDataError: '',
  userDataIsSuccess: false
}

// Separate function for token refresh
const refreshAccessToken = async thunkAPI => {
  try {
    const refresh_token = sessionStorage.getItem('refresh_token')

    const refreshResponse = await axios.post(
      `/auth/refresh-token/`,
      {
        refresh_token: refresh_token,
        grant_type: 'refresh_token'
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
    )

    sessionStorage.setItem('token', refreshResponse.data.access_token)
    sessionStorage.setItem('sessionId', refreshResponse.data.session_state)

    return refreshResponse.data
  } catch (refreshError) {
    return refreshError
  }
}

export const getUserDetailsAction = createAsyncThunk('user/getUserDetailsAction', async () => {
  try {
    // Construct headers only if the values exist
    const headers = {}
    const sessionId = sessionStorage.getItem('sessionId')
    const username = sessionStorage.getItem('username')
    const token = sessionStorage.getItem('token')

    if (sessionId) {
      headers['sessionId'] = sessionId
    }

    if (username) {
      headers['username'] = username
    }

    if (token) {
      headers['Authorization'] = `Bearer ${token}`
    }

    const response = await axios.get(`/adminportal/api/getUserRoles/`, {
      headers: {
        Accept: 'application/json',
        ...headers
      }
    })

    return response.data
  } catch (error) {
    throw new Error(error.response.data.error)
  }
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetgetUserDetailsAction(state) {
      state.userDataIsLoading = false
      state.userDataIsError = false
      state.userDataError = ''
      state.userDataIsSuccess = false
    }
  },
  extraReducers(builder) {
    builder

      // get user details
      .addCase(getUserDetailsAction.pending, state => {
        state.userData = {}
        state.userDataIsLoading = true
        state.userDataIsError = false
        state.userDataError = ''
        state.userDataIsSuccess = false
      })
      .addCase(getUserDetailsAction.fulfilled, (state, action) => {
        // console.log("Inside fulfilled", action)

        state.userData = action.payload
        state.userDataIsLoading = false
        state.userDataIsError = false
        state.userDataError = ''
        state.userDataIsSuccess = true
      })
      .addCase(getUserDetailsAction.rejected, (state, action) => {
        // console.log("Inside error", action)

        state.userData = {}
        state.userDataIsLoading = false
        state.userDataIsError = true
        state.userDataError = action.error.message
        state.userDataIsSuccess = false
      })
  }
})

export const { resetgetUserDetailsAction } = userSlice.actions

export default userSlice.reducer
