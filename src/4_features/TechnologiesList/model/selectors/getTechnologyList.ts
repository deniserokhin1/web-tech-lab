import { StateSchema } from '@/1_app/providers/StoreProvider'

import { ITechnology } from '../types/technologiesListSchema'

export const getTechnologyListData = (state: StateSchema): ITechnology[] | undefined => state.technologiesList?.technologies
export const getTechnologyListIsLoading = (state: StateSchema): boolean => state.technologiesList?.isLoading || false
export const getTechnologyListError = (state: StateSchema): string => state.technologiesList?.error || ''
