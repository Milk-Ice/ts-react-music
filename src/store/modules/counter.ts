import { createSlice } from '@reduxjs/toolkit'
const countSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 100,
    message: 'hello'
  },
  reducers: {}
})
export default countSlice.reducer
