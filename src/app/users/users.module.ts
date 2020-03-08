import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UserEffects } from './effects/user.effects';
import { UserService } from './services/user.service';
import { UserListComponent } from './user-list/user-list.component';
import * as fromUser from './user.reducer';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';

@NgModule({
  declarations: [UsersComponent, UserListComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    EffectsModule.forFeature([UserEffects]),
    StoreModule.forFeature(fromUser.usersFeatureKey, fromUser.reducer)
  ],
  providers: [UserService]
})
export class UsersModule {}
