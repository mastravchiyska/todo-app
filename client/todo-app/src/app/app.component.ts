import { Component } from '@angular/core';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToDo Task Manager';
  // this.openedTasks = this.tasks.filter(task => task.completed !== true);
  // this.completedTasks = this.tasks.filter(task => task.completed === true);

}
