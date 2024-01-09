import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  userData: {},
  userDataIsLoading: false,
  userDataIsError: false,
  userDataError: '',
  UserDataIsSuccess: false
}
