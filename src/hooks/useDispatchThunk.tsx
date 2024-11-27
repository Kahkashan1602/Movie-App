import { useDispatch } from 'react-redux';
import type { ThunkDispatch } from '@reduxjs/toolkit';
import type { RootState } from '../state/store';

export type AppThunkDispatch = ThunkDispatch<RootState, void, any>;
export const useDispatchThunk: () => AppThunkDispatch = useDispatch;
