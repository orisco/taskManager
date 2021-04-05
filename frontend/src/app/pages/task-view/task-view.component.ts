import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { List } from 'src/app/models/list.models';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  
  public extendItem: any;
  public listId: string = "";
  
  constructor(public taskService: TaskService, private route: ActivatedRoute, private rt: Router) { }

  ngOnInit() {
    this.taskService.getList().subscribe((res: any) => {
      this.taskService.lists = res
      if (this.taskService.lists.length == 0) {
        this.rt.navigateByUrl('new-list')
      }
    }) 
    this.route.params.subscribe(
      (params: Params) => {
        if (params.listId) {
          this.listId = params.listId;
        }
        this.taskService.getTasks(params.listId).subscribe((tasks: any) => {
          this.taskService.tasks = tasks;
        })
      }
    ) 
  }


  // set the task to complete
  onTaskClick(task: Task) {
    this.taskService.complete(task).subscribe(()=> {
    task.completed = !task.completed
    })
  }


  // delete the task
  onTaskDelete(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.taskService.tasks = this.taskService.tasks.filter((h) => h._id != task._id)
    })
  }

  onListDelete(list: List) {
  this.taskService.deleteList(list).subscribe(() => {
    // update frontend
    this.taskService.lists = this.taskService.lists.filter((l) => list._id != l._id)
    // if this list is pressed while deleting it - return to main screen >
    if (this.listId == list._id) {
      this.rt.navigateByUrl('lists')
    }
    }).add(() => {
      // remove all the tasks that were associated with this list
      this.taskService.deleteAllTasksFromList(list).subscribe(() => {
        this.taskService.tasks = this.taskService.tasks.filter((l) => {
          l._listId != list._id
        })
      })
    })
  }

}
