import { LeaderService } from './../services/leader.service';
import { DishService } from './../services/dish.service';
import { LEADERS } from './../shared/leaders';
import { Leader } from './../shared/leader';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders!:Leader[];
  constructor(private leaderservice:LeaderService) { }

  ngOnInit(): void {
    this.leaderservice.getLeaders()
    .subscribe((leaders)=> this.leaders=leaders);
    }
}
