import { PayloadAction, createSlice } from '@reduxjs/toolkit'

enum Tabs {
  EDITOR = 'Editor',
  GAME = 'Game'
}

export interface TabsState {
  allTabs: Tabs[]
  currentTab: Tabs
}

const initialState: TabsState = {
  allTabs: [Tabs.EDITOR, Tabs.GAME],
  currentTab: Tabs.EDITOR
}

export const tabsSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    switchTab(state, action: PayloadAction<Tabs>) {
      state.currentTab = action.payload
    }
  }
})

export default tabsSlice.reducer
