import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
 export class ProviderService {

  urlProviders = 'http://127.0.0.1:81/providers';
  provider: any; username = sessionStorage.getItem('username');
  password = sessionStorage.getItem('password');

  constructor(private Http: HttpClient) { }
  listProviders() {
    //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) }); //return this.Http.get(this.urlProviders + '/list', { headers });

    return this.Http.get(this.urlProviders + '/list');
   }


   createProvider(myform) {
     //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
     this.provider = {
        'name': myform.value.providerName,
        'email': myform.value.providerEmail,
        'address': myform.value.providerAdress
      }
      //return this.Http.post(this.urlProviders + '/add', this.provider, { headers });
      return this.Http.post(this.urlProviders + '/add', this.provider);
    }


    updateProvider(myObj) {
       // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
      //return this.Http.put(this.urlProviders + '/' + myObj['id'], myObj, { headers });
      return this.Http.put(this.urlProviders + '/' + myObj['id'], myObj);
    }

    // deleteProvider(myObj) {
      deleteProvider(id:number) {
       //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
       //return this.Http.delete(this.urlProviders + '/' + myObj['id'], { headers })
      //  return this.Http.delete(this.urlProviders + '/' + myObj['id'])
      return this.Http.delete(this.urlProviders + '/' + id)
      }
      getProvider(id) {
        // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
        //return this.Http.get(this.urlProviders + '/' + id, { headers })
        return this.Http.get(this.urlProviders + '/' + id)
      }
      }
