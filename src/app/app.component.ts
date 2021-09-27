import { Component } from '@angular/core';
import { SocialAuthService  } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: SocialUser | null; 

  constructor(private authService: SocialAuthService, private http: HttpClient) 
  { 
	this.user = null;
	this.authService.authState.subscribe((user: SocialUser) => {
	  console.log(user);
	  this.user = user;
	});
  }

  GoogleLoginOptions = {
    scope: 'https://www.googleapis.com/auth/drive'
  };

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID, this.GoogleLoginOptions).then((x: any) => {
      console.log(x.authToken);
    });
  }

  signOut(): void {
    this.authService.signOut();
  }  
}
