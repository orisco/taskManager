import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { NewComponent } from './pages/new/new.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';

const routes: Routes = [
  { path: '', redirectTo:'lists', pathMatch: 'full'},
  { path: 'new-list', component: NewComponent}, 
  { path: 'login', component: LoginPageComponent}, 
  { path: 'lists', component: TaskViewComponent},
  { path: 'lists/:listId', component: TaskViewComponent},
  { path: 'lists/:listId/new-task', component: NewTaskComponent}, 
  { path: 'lists/:listId/:taskId/edit-task', component: EditTaskComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
