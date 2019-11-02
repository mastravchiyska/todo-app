import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnChanges {
  @Input() id: number;
  @Input() mode: string;
  @Output() modified = new EventEmitter<void>();
  @Output() canceled = new EventEmitter<void>();
  task: Task;
  
  constructor(private http: TasksService) { }

  ngOnChanges() {
    if (this.mode == 'edit') {
      this.http.getTaskById(this.id).subscribe((t: Task) => this.task = t);
    } else {
      this.task = { title: '', description: '' };
    }
  }

  onUpdate() {
    if (this.mode == 'edit') {
      this.http.update(this.task).subscribe(t => this.modified.emit());
    } else {
      this.http.addTask(this.task).subscribe(t => this.modified.emit());
    }
  }

  onCancel() {
    this.canceled.emit();
  }
}
