export type { UISchema } from './model/types/UISchema'
export {
    getUIScroll,
    getUIScrollByPath,
    getIsScrolling,
    getUIMainColor,
    getUIBgColor,
} from './model/selectors/getUI'
export { uiReducer, uiActions } from './model/slice/UISlice'
