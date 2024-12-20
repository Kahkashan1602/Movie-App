import { useDispatch } from 'react-redux';
import type { ThunkDispatch } from '@reduxjs/toolkit';
import type { RootState } from '../redux/store';

export type AppThunkDispatch = ThunkDispatch<RootState, void, any>;
export const useDispatchThunk: () => AppThunkDispatch = useDispatch;
