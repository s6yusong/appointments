import { Action } from '@ngrx/store'

export const SAVE_APPOINTMENTS = 'Save Appointments';
export const CHANGE_YEAR = 'Change Year';
export const CHANGE_MONTH = 'Change Month';

export class ChangeYear implements Action{
  readonly type = CHANGE_YEAR;
  constructor(public payload: string[]) {}
}
export class ChangeMonth implements Action{
  readonly type = CHANGE_MONTH;
  constructor(public payload: string[]) {}
}
export type AppointmentsAction =  ChangeYear | ChangeMonth;
