import { Component, OnInit } from '@angular/core';
import { Router, RouteReuseStrategy } from '@angular/router';
import { TaskService } from 'src/app/service/task.service';
import { List } from 'src/app/models/list.models'

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
  }

  createNewList(title: string) {
    this.taskService.createList(title).subscribe((res: List) => {
      this.taskService.lists.push(res)
    // navigate to /lists/res.id
    this.router.navigate(['/lists', res._id])
    })
  }
}
