import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Task } from '../Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];
  selectedTaskId: number;
  mode: string;

  constructor(private http: TasksService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.updateList();
  }

  showMessage(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  selectTask(task, mode) {
    if (mode == 'edit' && task) {
      this.mode = mode;
      this.selectedTaskId = task.id;
    }
    if (mode == 'new') {
      this.mode = mode;
    }
  }

  onCanceled() {
    this.mode = '';
  }

  onSave() {
    this.updateList();
    this.onCanceled();
    this.showMessage('Task was saved successfully!', 'NEW');
  }

  updateList() {
    this.http.listAll().subscribe(
      (tasks: Task[]) => this.tasks = tasks,
      err => this.showMessage(err, 'ERROR')
    )
  }

  completeTask(task) {
    if (task.completed) {
      return false;
    }

    task.completed = true;
    this.http.update(task).subscribe(
      t => this.showMessage('Task was completed!', 'COMPLETE'),
      err => this.showMessage(err, 'ERROR')
    );
  }

  deleteTask(task) {
    this.http.delete(task.id).subscribe(
      t => {
        this.updateList();
        this.showMessage('Task was deleted successfully!', 'DELETE');
      },
      err => this.showMessage(err, 'ERROR')
    )
  }

}
