import { Leader } from './../shared/leader';
import { LeaderService } from './../services/leader.service';
import { PromotionService } from './../services/promotion.service';
import { Promotion } from './../shared/promotion';
import { DishService } from './../services/dish.service';
import { Component, OnInit, Inject} from '@angular/core';
import {Dish} from '../shared/dish';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish!: Dish;
  promotion!: Promotion;
  leader!:Leader;

  constructor(private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderservice: LeaderService,
    @Inject('BaseURL') public BaseURL) { }

  ngOnInit() {
    this.dishservice.getFeaturedDish()
    .subscribe(dish => this.dish = dish);
    this.promotionservice.getFeaturedPromotion()
    .subscribe(promotion => this.promotion = promotion);
    this.leaderservice.getFeaturedLeaders()
    .subscribe(leader => this.leader = leader);
  }

}
