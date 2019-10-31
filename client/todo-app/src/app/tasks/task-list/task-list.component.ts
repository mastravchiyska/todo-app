import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks;
  isSelected = false;
  selectedTask: object;

  constructor(private http: TasksService, private _snackBar: MatSnackBar) { }

  showMessage(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  ngOnInit() {
    this.http.listAll().subscribe(
      tasks => this.tasks = tasks,
      err => console.log(err)
    );
  }

  selectTask(task) {
    this.isSelected = true;
    this.selectedTask = task;
    console.log(this.selectedTask)
  }
  createTask() {
    this.isSelected = true;
    this.selectTask({ "title": undefined });
  }

  onCanceled() {
    this.isSelected = false;
  }

  updateTask(task) {
    if (task.id) {
      this.http.update(task).subscribe(
        t => console.log('updated', t)
      )
    } else {
      this.http.addTask(task).subscribe(
        t => this.tasks.push(t))
    }
    
    this.showMessage('Task was saved successfully!', 'NEW');
  }

  completeTask(task) {
    this.selectedTask = task;
    if (task.completed === false) {
      this.selectedTask.completed = true;
      this.http.update(task).subscribe(
        t => console.log('completed', t)
      )
    }
    this.showMessage('Task was completed!', 'COMPLETE')
  }

  deleteTask(task) {
    this.http.delete(task.id).subscribe(
      t => {
        const index = this.tasks.findIndex(tsk => tsk.id === t.id);
        this.tasks.splice(index, 1);
      }
    )
    this.showMessage('Task was deleted successfully!', 'DELETE')
  }

}
