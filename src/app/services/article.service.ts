import { Injectable } from '@angular/core';
import { HttpClient,HttpEvent,HttpRequest } from '@angular/common/http';
import { Provider } from '../models/provider';
import { Observable } from 'rxjs';
import {ListProviderComponent} from '../list-provider/list-provider.component'

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  urlArticles = 'http://127.0.0.1:81/articles';
  urlProviders = 'http://127.0.0.1:81/providers';
  article: any;
  providers: any;

  constructor(private Http: HttpClient) { }

  listArticles() { return this.Http.get(this.urlArticles + '/list');
 }

  addArticle(myform) {

       return this.Http.post(this.urlArticles + '/add/', myform);

      }

pushFileToStorage(myform,file: File): Observable<HttpEvent<{}>> {
    const data: FormData = new FormData();
    //ajout
    this.article = {
      'label': myform.value.articleLabel,
      //'picture': myform.value.articlePicture,
      'price': myform.value.articlePrice,
      'providerId': myform.value.providerId }
      const providerId = this.article.providerId;
      // fin ajout
    data.append('file', file);
    data.append('article', this.article);
    const newRequest = new HttpRequest('POST', this.urlArticles+'/add/' +providerId, data, {
    reportProgress: true,
    responseType: 'text'
        });
        return this.Http.request(newRequest);
    }



       listProviders() {
        //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) }); //return this.Http.get(this.urlProviders + '/list', { headers });

        return this.Http.get(this.urlProviders + '/list');
       }

        // deleteProvider(myObj) {
      deleteArticle(id:number) {
        //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
        //return this.Http.delete(this.urlProviders + '/' + myObj['id'], { headers })
       //  return this.Http.delete(this.urlProviders + '/' + myObj['id'])
       return this.Http.delete(this.urlArticles + '/' + id)
       }

       getArticle(id){
        return this.Http.get(this.urlArticles + '/' + id)

       }

       updateArticle(myObj) {
        // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
       //return this.Http.put(this.urlProviders + '/' + myObj['id'], myObj, { headers });
       return this.Http.put(this.urlArticles + '/' + myObj['id'], myObj);
     }

}
