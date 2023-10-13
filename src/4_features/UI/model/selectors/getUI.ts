import { type StateSchema } from '1_app/providers/StoreProvider'
import { type ScrollSchema } from '../types/UISchema'
import { createSelector } from '@reduxjs/toolkit'

export const getUIScroll = (state: StateSchema): ScrollSchema => state.ui.scroll
export const getUIMainColor = (state: StateSchema): string | undefined =>
    state.ui?.primaryColor
export const getUISecondaryColor = (state: StateSchema): string | undefined =>
    state.ui?.secondaryColor
export const getUIBgColor = (state: StateSchema): string | undefined => state.ui?.bgColor
export const getIsScrolling = (state: StateSchema): boolean | undefined =>
    state.ui.isScrolling

export const getUIScrollByPath = createSelector(
    getUIScroll,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
)
