import { Injectable } from '@angular/core';
import { dogs } from './dogs';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DogsService {
  private dogsUrl = 'https://random.dog/woof.json';

  constructor(private http: HttpClient) {}

  getdogs(): Observable<dogs> {
    return this.http.get<dogs>(this.dogsUrl);
  }
}
