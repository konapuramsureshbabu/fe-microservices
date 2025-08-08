import { createSlice } from '@reduxjs/toolkit'

interface AuthState {
  user: { name: string } | null
}

const initialState: AuthState = {
  user: { name: 'Student User' },
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
})

export default authSlice.reducer
