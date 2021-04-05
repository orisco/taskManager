import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {


  public listId: string = ""

  constructor(private task: TaskService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.listId = params['listId']
      }
    )
  }


  createTask(body: string, title: string) {
    let newTask = {title: title, body: body}
    this.task.createTask(newTask, this.listId).subscribe((newTask: Task) => {
      this.router.navigate(['/lists', this.listId])
    })
  }
}
