import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {
  constructor(private http: HttpClient) { }
  
  public getAnimals(): Observable<any> {
    return this.http.get('http://localhost:3000/')
  }
  
}
