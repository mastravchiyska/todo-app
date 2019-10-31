import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent {
  @Input() task;
  @Output() modified = new EventEmitter<T>();
  @Output() canceled = new EventEmitter<void>();
  @ViewChild(NgForm, { static: false }) form: NgForm;
  constructor() { }

  update(){
    this.modified.emit({...this.task})
    console.log(this.task)
  }

  
  cancel() {
    this.canceled.emit();
  }
}
