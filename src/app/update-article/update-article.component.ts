import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {

  id;
  articleToUpdate;
  provider;
  label;
  price;
  providerId;
  picture;

  providers;
  selectedFile: File;
  urlUpload= 'http://127.0.0.1:81/uploads';

  constructor(private providerservice: ProviderService, private router: Router,
    private route: ActivatedRoute, private articleservice: ArticleService ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id');

      }
    );
    //this.service.getProvider(this.id).subscribe(
      this.articleservice.getArticle(this.id).subscribe(
      response => {
        //console.log(response);
       this.provider = response["provider"]["name"];
       this.providerId= response["provider"]["id"];
        this.label = response["label"];
        this.price = response["price"];
        this.picture = response["picture"];
      }
    );
    alert("la valeur est : "+this.id);
    this.getListProviders();
  }

  getListProviders() {
    this.providerservice.listProviders().subscribe(
      response => {
        this.providers = response;
      }
    );
  }

  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
    //console.log(this.selectedFile);
  }


  updateArticle() {
    this.articleToUpdate = {
      'provider': this.provider,/// il faut vérifier
      'label': this.label,
      'price': this.price,
      'id': this.id
    }
    this.articleservice.updateArticle(this.articleToUpdate).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['listArticles']);
      }
    );

  }

  changeWebsite(e:any) {

    alert("AAAAAAAAAA    la valeur est  : "+e.target.value);
    //this.article.providerid = e.target.value;  s7i7a
    alert("la valeur  2222222222: "+this.providerId);
    //alert( "On verifie  : "+this.form.get('website').value); s7i7a
   }



}
