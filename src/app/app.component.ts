import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  sampleMessage: string;

  constructor(private _http: HttpClient) {
  }

  logError() {
    this._http.get('http://dummy.com/dummies')
    .subscribe(
      data => console.log(data),
      err => {
        Object.assign(err,
        {
          test: 'this error created intentionally to check sentry',
          user : sessionStorage.getItem('user') || 'anonymous user',
          sampleMessage: this.sampleMessage || 'didn\'t had a valid reason'
        });
        throw err;
      },
      () => console.log('completed')
    );
  }
 }
