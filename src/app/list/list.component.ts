import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Task} from '../services/tasks.service';
import {TasksListService} from '../services/tasks-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  uuid: string;
  tasksList: Task[];
  constructor(private route: ActivatedRoute, private tasksListService: TasksListService) { }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.uuid = param.list;
      this.tasksList = this.tasksListService.findTasksFromList(this.uuid);
    });
  }

}
