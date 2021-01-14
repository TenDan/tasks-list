import {Injectable} from '@angular/core';
import {Task} from './tasks.service';

export interface TasksList {
  uuid: string;
  name: string;
  tasks: Task[];
}

const tasks: TasksList[] = [
  {
    uuid: 'test',
    name: 'Przykładowa lista',
    tasks: [
      {uuid: 'test', name: 'Testowy task 1'},
      {uuid: 'test2', name: 'Testowy task 2'},
      {uuid: 'test3', name: 'Testowy task 3'},
      {uuid: 'test4', name: 'Testowy task 4'},
      {uuid: 'test5', name: 'Testowy task 5'},
    ],
  },
  {
    uuid: 'test2',
    name: 'Przykładowa lista 2',
    tasks: [
      {uuid: 'test', name: 'Testowy task 6'},
      {uuid: 'test2', name: 'Testowy task 7'},
      {uuid: 'test3', name: 'Testowy task 8'},
      {uuid: 'test4', name: 'Testowy task 9'},
      {uuid: 'test5', name: 'Testowy task 10'},
    ],
  },
  {
    uuid: 'test3',
    name: 'Przykładowa lista 3',
    tasks: [
      {uuid: 'test', name: 'Testowy task 11'},
      {uuid: 'test2', name: 'Testowy task 12'},
      {uuid: 'test3', name: 'Testowy task 13'},
      {uuid: 'test4', name: 'Testowy task 14'},
      {uuid: 'test5', name: 'Testowy task 15'},
    ],
  },
];

@Injectable({
  providedIn: 'root'
})
export class TasksListService {
  private _lists: TasksList[];

  constructor() {
    this._lists = tasks;
  }

  get lists(): TasksList[] {
    return this._lists;
  }

  set lists(lists) {
    this._lists = lists;
  }

  findTasksFromList(listUuid: string): Task[] {
    return this._lists.find((list) => list.uuid === listUuid).tasks;
  }
}
