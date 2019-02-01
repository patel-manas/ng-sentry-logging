import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, Injectable  } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {Route, RouterModule} from '@angular/router';
// import * as LogRocket from 'logrocket';
import * as Sentry from '@sentry/browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InitComponent } from './init/init.component';

//  LogRocket.init('6z7kwb/ngrockettest');


const routes: Route[] = [
  {path: '', pathMatch: 'full', component: LoginComponent},
  {path: 'login', pathMatch: 'full', component: LoginComponent},
  {path: 'app', pathMatch: 'full', component: AppComponent}
];

Sentry.init({
  dsn: 'https://ecc580135fb443d4bb502aab9f47599f@sentry.io/1381418'
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() {}
  handleError(error) {
    Sentry.captureException(error.originalError || error);
    throw error;
  }
}
//@Injectable()
// export class LogRocketErrorHandler implements ErrorHandler {
//   constructor() {}
//   handleError(error) {
//     LogRocket.captureException(error, {
//       tags: {
//         // additional data to be grouped as "tags"
//         subscription: 'Pro',
//       },
//       extra: {
//         // additional arbitrary data associated with the event
//         pageName: 'ProfileView',
//       },
//     });
//     throw error;
//   }
// }
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: SentryErrorHandler }
  ],
  bootstrap: [InitComponent]
})
export class AppModule { }
