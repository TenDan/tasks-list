import { Injectable } from '@angular/core';

export interface Task {
  uuid: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }
}
