import { NoAccessComponent } from './components/no-access/no-access.component';
import { PostsComponent } from './components/learning/posts/posts.component';
import { NotFoundComponent } from './components/learning/not-found/not-found.component';
import { GithubFollowersComponent } from './components/learning/github-followers/github-followers.component';
import { GithubProfileComponent } from './components/learning/github-profile/github-profile.component';
import { HomeComponent } from './components/learning/home/home.component';
import { AuthGuard } from './guard/auth.guard';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { SpecialEventsComponent } from './components/special-events/special-events.component';
import { EventsComponent } from './components/events/events.component';
import { AdminGuard } from './guard/admin.guard';

const appRoutes: Routes = [
  {
    path: "",
    redirectTo: '/events',
    pathMatch: 'full'
  },
  {
    path: "events",
    component: EventsComponent
  },
  {
    path: "special",
    component: SpecialEventsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "no-access",
    component: NoAccessComponent
  },
// Learning Routes
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'followers/:id/:username',
    component: GithubProfileComponent
  },
  {
    path: 'followers',
    component: GithubFollowersComponent,
    canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
]

@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
