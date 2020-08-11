import * as fromViewState from "../actions/appointments.action";

export interface SaveAppointmentstate {
  selectedYears: any,
  selectedMonth: any,
};

export const initState = {
  selectedYears: ['2018', '2019'],
  selectedMonth: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'],
};

export function reducer(
  state = initState,
  action: fromViewState.AppointmentsAction
) {
  switch ((action.type)) {
    case fromViewState.CHANGE_YEAR: {
      const searchKey = action.payload;
      return {
        ...state,
        selectedYears: searchKey
      }
    }
    case fromViewState.CHANGE_MONTH: {
      const searchKey = action.payload;
      return {
        ...state,
        selectedMonth: searchKey
      }
    }
  }
  return state;
}
export const getSelectedYears = (state: SaveAppointmentstate) => state.selectedYears;
export const getSelectedMonth = (state: SaveAppointmentstate) => state.selectedMonth;
