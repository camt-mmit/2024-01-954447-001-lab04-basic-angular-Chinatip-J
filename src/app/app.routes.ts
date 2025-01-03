import { Routes } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { StatusComponent } from './status/status.component';
import { ProfileComponent } from './profile/profile.component';
import { FriendComponent } from './friend/friend.component';

export const routes: Routes = [
  {
    path: '', redirectTo: 'hello-world', pathMatch: 'full',
  },

  {
    path: 'hello-world',
    component: HelloWorldComponent,
  },

  {
    path: 'status',
    component: StatusComponent,
  },

  {
    path: 'profile',
    component: ProfileComponent,
  },

  {
    path: 'friend',
    component: FriendComponent,
  }
];
