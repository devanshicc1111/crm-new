import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'

const initialState = {
  accountTableData: {},
  accountTableDataIsLoading: false,
  accountTableDataIsError: false,
  accountTableDataError: '',
  accountTableDataIsSuccess: false
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

export const createAccountAction = createAsyncThunk('accountTable/createAccountAction', async (payload, thunkAPI) => {
  try {
    const token = sessionStorage.getItem('token')

    const response = await axios.post(`/crm/api/addAccount/`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        sessionId: sessionStorage.getItem('sessionId')
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
          const retryResponse = await axios.post(`/crm/api/addAccount/`, payload, {
            headers: {
              Authorization: `Bearer ${refreshedToken.access_token}`,
              'Content-Type': 'application/json',
              sessionId: sessionStorage.getItem('sessionId')
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

export const accountTableSlice = createSlice({
  name: 'accountTable',
  initialState,
  reducers: {
    // demoPayloadAction
    resetCreateAccountAction(state) {
      state.demoPayloadDataIsLoading = false
      state.demoPayloadDataIsError = false
      state.demoPayloadDataError = ''
      state.demoPayloadDataIsSuccess = false
    }
  }
})
