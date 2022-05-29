import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { ListProviderComponent } from './list-provider/list-provider.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { AuthGaurdService } from './services/auth-gaurd.service';

import { AddArticleComponent } from './add-article/add-article.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';



const routes: Routes = [
{ path: "", pathMatch: "full", redirectTo: "app-navbar" },
{ path: "listProvider", component: ListProviderComponent, canActivate: [AuthGaurdService] },
{ path: "addProvider", component: AddProviderComponent, canActivate: [AuthGaurdService] },
{ path: "updateProvider/:id", component: UpdateProviderComponent, canActivate: [AuthGaurdService] },
{ path: "updateArticle/:id", component: UpdateArticleComponent, canActivate: [AuthGaurdService] },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'logout', component: LogoutComponent, canActivate: [AuthGaurdService] },
{ path: "listArticles", component: ListArticleComponent },
{ path: "addArticle", component: AddArticleComponent },
//{ path: "updateArticle/:idProvider", component: UpdateArticleComponent },

{ path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },


 { path: 'mod', component: BoardModeratorComponent },
 { path: 'admin', component: BoardAdminComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
