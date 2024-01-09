import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'

const initialState = {
  // demo
  demoData: '',
  demoDataIsLoading: false,
  demoDataIsError: false,
  demoDataError: '',
  demoDataIsSuccess: false,

  // demo with payload
  demoPayloadData: {},
  demoPayloadDataIsLoading: false,
  demoPayloadDataIsError: false,
  demoPayloadDataError: '',
  demoPayloadDataIsSuccess: false
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

export const demoAction = createAsyncThunk('demo/demoAction', async (payload, thunkAPI) => {
  try {
    const token = sessionStorage.getItem('token')

    const response = await axios.get(`/user_service/api/version/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return response.data
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Token expired, attempt to refresh
      const refreshedToken = await refreshAccessToken(thunkAPI)

      if (refreshedToken.response && refreshedToken.response.status === 401) {
        // console.log('refreshedToken', refreshedToken.response.data.message)
        // Manually set an error in the Redux state

        throw new Error(refreshedToken.response.data.message)
      } else {
        try {
          // Retry original request with the new access token
          const retryResponse = await axios.get(`/user_service/api/version/`, {
            headers: {
              Authorization: `Bearer ${refreshedToken.access_token}`
            }
          })

          return retryResponse.data
        } catch (error) {
          throw new Error(error.response.data.error)
        }
      }
    }

    // console.log('demoAction demoerr', error)

    throw new Error(error.response.data.error)
  }
})

export const demoPayloadAction = createAsyncThunk('user/demoPayload', async (payload, thunkAPI) => {
  try {
    const token = sessionStorage.getItem('token')

    const response = await axios.post(`/vendor/uploadInvoice/customExceptin/`, payload, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return response.data
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Token expired, attempt to refresh
      const refreshedToken = await refreshAccessToken(thunkAPI)

      if (refreshedToken.response && refreshedToken.response.status === 401) {
        // console.log('refreshedToken', refreshedToken.response.data.message)
        // Manually set an error in the Redux state

        throw new Error(refreshedToken.response.data.message)
      } else {
        try {
          // Retry original request with the new access token
          const retryResponse = await axios.post(`/vendor/uploadInvoice/customExceptin/`, payload, {
            headers: {
              Authorization: `Bearer ${refreshedToken.access_token}`
            }
          })

          return retryResponse.data
        } catch (error) {
          throw new Error(error.response.data.error)
        }
      }
    }

    // console.log('demoPayloadAction demoerr', error)

    throw new Error(error.response.data.error)
  }
})

export const demoSlice = createSlice({
  name: 'demo',
  initialState,
  reducers: {
    // demoPayloadAction
    resetDemoPayloadAction(state) {
      state.demoPayloadDataIsLoading = false
      state.demoPayloadDataIsError = false
      state.demoPayloadDataError = ''
      state.demoPayloadDataIsSuccess = false
    }
  },
  extraReducers(builder) {
    builder

      // demo
      .addCase(demoAction.pending, state => {
        state.demoData = ''
        state.demoDataIsLoading = true
        state.demoDataIsError = false
        state.demoDataError = ''
        state.demoDataIsSuccess = false
      })
      .addCase(demoAction.fulfilled, (state, action) => {
        // console.log('demoAction Inside fulfilled', action)

        state.demoData = action.payload
        state.demoDataIsLoading = false
        state.demoDataIsError = false
        state.demoDataError = ''
        state.demoDataIsSuccess = true
      })
      .addCase(demoAction.rejected, (state, action) => {
        // console.log('demoAction Inside error', action)

        state.demoData = ''
        state.demoDataIsLoading = false
        state.demoDataIsError = true
        state.demoDataError = action.error.message
        state.demoDataIsSuccess = false
      })

      // demo action payload
      .addCase(demoPayloadAction.pending, state => {
        state.demoPayloadData = {}
        state.demoPayloadDataIsLoading = true
        state.demoPayloadDataIsError = false
        state.demoPayloadDataError = ''
        state.demoPayloadDataIsSuccess = false
      })
      .addCase(demoPayloadAction.fulfilled, (state, action) => {
        //  console.log('demoPayloadAction Inside fulfilled', state, action)

        state.demoPayloadData = action.payload
        state.demoPayloadDataIsLoading = false
        state.demoPayloadDataIsError = false
        state.demoPayloadDataError = ''
        state.demoPayloadDataIsSuccess = true

        toast('request successful', { autoClose: 2000, type: 'success' })
        demoSlice.caseReducers.resetDemoPayloadAction(state, action)
      })
      .addCase(demoPayloadAction.rejected, (state, action) => {
        // console.log('demoPayloadAction Inside error', action)

        state.demoPayloadData = {}
        state.demoPayloadDataIsLoading = false
        state.demoPayloadDataIsError = true
        state.demoPayloadDataError = action.error.message
        state.demoPayloadDataIsSuccess = false

        toast(action.error.message, { autoClose: 2000, type: 'error' })
        demoSlice.caseReducers.resetDemoPayloadAction(state, action)
      })
  }
})

export default demoSlice.reducer
