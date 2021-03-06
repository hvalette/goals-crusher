import { Component, OnInit } from '@angular/core';
import { UserModel } from '../core/models/user.model';
import { UserFacade } from '../facades/user.facade';
import { GoalsFacade } from '../facades/goals.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'vl-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: UserModel;
  goalsCount$: Observable<number>;
  achivementsCount$: Observable<number>;

  constructor(private readonly userFacade: UserFacade, private readonly goalsFacade: GoalsFacade) {}

  ngOnInit(): void {
    this.user = this.userFacade.getCurrentUser();
    this.goalsCount$ = this.goalsFacade.getGoalsCount$();
    this.achivementsCount$ = this.goalsFacade.getAchievementsCount$();
  }
}
