import {delay} from 'rxjs/operators';
import { LEADERS } from './../shared/leaders';
import { Leader } from './../shared/leader';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getFeaturedLeaders(): Observable<Leader> {
    return of(LEADERS.filter((leader) => leader.featured)[0]).pipe(delay(2000));
  }

  getLeaders(): Observable<Leader[]>{
    return of(LEADERS).pipe(delay(2000));
  }
}
