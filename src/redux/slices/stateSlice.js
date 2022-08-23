// Redux
import { createSlice } from '@reduxjs/toolkit'

// export const fetchData = createAsyncThunk(
//   'state/fetchState',
//   async (_, { dispatch }) => {
//     // dispatch(setLoading(true))

//     // dispatch(setLoading(false))
//   }
// )

// state
const initialState = {
  state: []
}

export const stateSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    setState: (state, action) => {
      state.state = action.payload
    }
  }
})

export const { setState } = stateSlice.actions

export default stateSlice.reducer
