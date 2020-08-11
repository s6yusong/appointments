import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store'
import * as fromView from './appointments.reducer'

export interface AppointmentsState {
  savedAppointments: fromView.SaveAppointmentstate
}

export const reducers: ActionReducerMap<AppointmentsState> = {
  savedAppointments: fromView.reducer
};



//change view type
export const getAppointmentsState = createFeatureSelector<AppointmentsState>('appointments');
export const getSavedAppointmentsState = createSelector(getAppointmentsState, (state: AppointmentsState) => state.savedAppointments);
export const getSelectedYears = createSelector(getSavedAppointmentsState, fromView.getSelectedYears);
export const getSelectedMonth = createSelector(getSavedAppointmentsState, fromView.getSelectedMonth);
