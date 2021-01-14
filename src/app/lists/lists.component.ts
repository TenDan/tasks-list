import {Component, OnInit} from '@angular/core';
import {TasksList, TasksListService} from '../services/tasks-list.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  lists: TasksList[];

  constructor(private tasksListService: TasksListService) {}

  ngOnInit(): void {
    this.lists = this.tasksListService.lists;
  }

}
