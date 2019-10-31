import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, retry, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public url = 'http://localhost:1337/tasks/';

  constructor(private http: HttpClient) { }

  listAll() {
    return this.http.get(this.url).pipe(
      map(resp => resp),
      tap(entities => console.log(typeof entities)),
      retry(3)
    )
  }

  getTaskById(id) {
    return this.http.get(this.url + id).pipe(
      tap(task => console.log(`Task fetched! ${JSON.stringify(task)}`))
    )
  }

  addTask(task) {
    return this.http.post(this.url, task).pipe(
      tap(t => console.log(`Task successfully created! ${JSON.stringify(t)}`))
    )
  }

  update(task){
    return this.http.put(this.url+ task.id, task).pipe(
      tap(t => console.log(`Task successfully updated! ${JSON.stringify(t)}`))
    )
  }

  delete(id: number) {
    return this.http.delete(this.url + id).pipe(
      tap(task => console.log(`Task successfully deleted! ${JSON.stringify(task)}`))
    )
  }
}
