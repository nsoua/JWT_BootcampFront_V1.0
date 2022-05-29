// import { Injectable } from '@angular/core';
// import {
//   HttpInterceptor,
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
// } from '@angular/common/http';
// import { AuthenticationService } from './services/authentication.service';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class BasicAuthHtppInterceptorService implements HttpInterceptor {
//   intercept(req: HttpRequest<any>, next: HttpHandler) {
//     if (
//       sessionStorage.getItem('username') &&
//       sessionStorage.getItem('basicauth')
//     ) {
//       req = req.clone({
//         setHeaders: { Authorization: sessionStorage.getItem('basicauth') },
//       });
//     }
//     return next.handle(req);
//   }
// }
