import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './list/list.component';
import {TaskComponent} from './task/task.component';
import {HomeComponent} from './home/home.component';
import {NoListComponent} from './no-list/no-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home', component: HomeComponent, children: [
      {path: '', component: NoListComponent, pathMatch: 'full'},
      {
        path: ':list',
        component: ListComponent,
        children: [
          {
            path: ':task', component: TaskComponent
          }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
