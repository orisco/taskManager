import { Injectable } from '@angular/core';
import { List } from '../models/list.models';
import { Task } from '../models/task.model';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public lists: List[] = [];
  public tasks: Task[] = [];

  constructor(private webReqService: WebRequestService) { }

  public createList(title: string) {
    // send a web request to create a new list
    return this.webReqService.post('lists', {title})
  }

  public getList() {
    // send a web request to create a new list
    return this.webReqService.get('lists')
  }

  public getTasks(listId: string) {
    return this.webReqService.get(`lists/${listId}/tasks`)
  }


  public createTask(body: object, listId: string) {
    console.log(body)
    return this.webReqService.post(`lists/${listId}/tasks`, body )
  }

  public complete(task: Task) {
    return this.webReqService.put(`lists/${task._listId}/tasks/${task._id}`, {completed: !task.completed})
  }

  public deleteTask(task: Task) {
    return this.webReqService.delete(`lists/${task._listId}/tasks/${task._id}`)
  }

  public deleteList(list: List) {
    return this.webReqService.delete(`lists/${list._id}`)
  }

  public deleteAllTasksFromList(list: List) {
    return this.webReqService.delete(`lists/${list._id}`)
  }

  public editTask(task: Task) {
    return this.webReqService.put(`lists/${task._listId}/tasks/${task._id}`, task)
  }
}
