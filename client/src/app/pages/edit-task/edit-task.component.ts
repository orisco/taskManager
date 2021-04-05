import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  public listId: string = "";
  public task: Task[] = []

  constructor(public route: ActivatedRoute, public taskService: TaskService, public rt: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.listId = params.listId
        this.task = this.taskService.tasks.filter((ta) => ta._id == params.taskId )
      }
    )
    // console.log(this.task)
    if (this.task.length === 0) {
        this.rt.navigateByUrl(`lists`)
    }
  }


  editTask(title: string, body: string ){
    this.task[0].body = body
    this.task[0].title = title
    this.taskService.editTask(this.task[0]).subscribe(() => {
      this.rt.navigate(['/lists', this.listId])
    })
  }
}
