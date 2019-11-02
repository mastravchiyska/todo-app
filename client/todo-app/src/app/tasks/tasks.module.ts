import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TaskListComponent } from './task-list/task-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [TaskListComponent, TaskDetailsComponent],
  exports: [TaskListComponent, TaskDetailsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTooltipModule,
    FormsModule,
    FlexLayoutModule
  ]
})
export class TasksModule { }
