import { TokenInterceptorService } from './Services/token-interceptor.service';
import { AuthGuard } from './guard/auth.guard';
import { EventService } from './Services/event.service';
import { AuthService } from './Services/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
FullCalendarModule.registerPlugins([dayGridPlugin]);

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { EventsComponent } from './components/events/events.component';
import { EspecialEventsComponent } from './components/especial-events/especial-events.component';
import { SpecialEventsComponent } from './components/special-events/special-events.component';
import { HomeComponent } from './components/learning/home/home.component';
import { NotFoundComponent } from './components/learning/not-found/not-found.component';
import { GithubProfileComponent } from './components/learning/github-profile/github-profile.component';
import { NavbarComponent } from './components/learning/navbar/navbar.component';
import { GithubFollowersComponent } from './components/learning/github-followers/github-followers.component';
import { PostsComponent } from './components/learning/posts/posts.component';
import { NoAccessComponent } from './components/no-access/no-access.component';
import { AdminGuard } from './guard/admin.guard';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    EspecialEventsComponent,
    SpecialEventsComponent,
    HomeComponent,
    NotFoundComponent,
    GithubProfileComponent,
    NavbarComponent,
    GithubFollowersComponent,
    PostsComponent,
    NoAccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule,
    SocialLoginModule,
    // FullCalendarModule
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '560079563754-33bcuhvvqqhibh72ehmodojjv6p9g7t8.apps.googleusercontent.com'
            ),
          }
        ]
      } as SocialAuthServiceConfig,
    } ,
    SnotifyService,
    AuthService,
    EventService,
    AuthGuard,
    AdminGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
