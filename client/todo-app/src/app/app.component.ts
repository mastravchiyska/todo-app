import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToDo Task Manager';

  tasks = [
    {
      "createdAt": 1572437538669,
      "updatedAt": 1572437538669,
      "id": 1,
      "title": "Task 1",
      "description": "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originallybred for hunting.The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originallybred for hunting.",
      "priority": 0,
      "completed": true,
      "project": null
    },
    {
      "createdAt": 1572437538669,
      "updatedAt": 1572437538669,
      "id": 1,
      "title": "Task 1",
      "description": "Add new task",
      "priority": 0,
      "completed": false,
      "project": null
    },
    {
      "createdAt": 1572437538669,
      "updatedAt": 1572437538669,
      "id": 1,
      "title": "Task 1",
      "description": "Add new task",
      "priority": 0,
      "completed": false,
      "project": null
    }
  ]

  openedTasks = this.tasks.filter(task => task.completed !==true);
  completedTasks = this.tasks.filter(task => task.completed ===true);
}
