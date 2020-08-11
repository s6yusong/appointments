import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  monthMap = {
    '1': 'Jan.',
    '2': 'Feb.',
    '3': 'Mar.',
    '4': 'Apr.',
    '5': 'May',
    '6': 'Jun.',
    '7': 'Jul.',
    '8': 'Aug.',
    '9': 'Sep.',
    '10': 'Oct.',
    '11':'Nov.',
    '12':'Dec.',
  };
  editData(data) {
    const newData = [];
    data.forEach(item=> newData.push({id: item.id, ...item.appointment, ...item.organizer}));
    return newData;
  }
}
