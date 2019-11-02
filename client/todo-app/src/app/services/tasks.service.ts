import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, retry, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public url = 'http://localhost:1337/tasks/';

  constructor(private http: HttpClient) { }

  listAll(){
    return this.http.get(this.url).pipe(
      map(resp => resp),
      retry(3)
    )
  }

  getTaskById(id) {
    return this.http.get(this.url + id);
  }

  addTask(task) {
    return this.http.post(this.url, task);
  }

  update(task) {
    return this.http.put(this.url + task.id, task);
  }

  delete(id: number) {
    return this.http.delete(this.url + id);
  }
}
