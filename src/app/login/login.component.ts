import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }
  onSubmit(): void {
    const { username, password } = this.form;
    this.authService.login(username, password).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }
  reloadPage(): void {
    window.location.reload();
  }
}






// import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
// import { AuthenticationService } from '../services/authentication.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   username: string;
//   password: string;
//   invalidLogin = false;
//   successMessage = "Authentication success";
//   errorMessage = "Invalide username or password";

//   constructor(private router: Router,
//     private loginservice: AuthenticationService) { }


//   ngOnInit() {
//   }
//   checkLogin() {

//     this.loginservice.authenticate(this.username, this.password).subscribe(
//       data => {
//         console.log(data);
//         this.router.navigate(['']);
//         this.invalidLogin=false;
//       },
//       (error) => {
//         console.log(error);
//         this.invalidLogin = true;
//       }
//     );
//     /*
//     if (this.loginservice.authenticate(this.username, this.password)==true) {
//       this.router.navigate([''])
//     } else
//       this.invalidLogin = true*/
//   }



// }
