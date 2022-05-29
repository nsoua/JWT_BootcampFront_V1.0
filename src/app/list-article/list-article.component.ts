import { Component, OnInit } from '@angular/core';
import { ArticleService } from './../services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {

  articles: any;
  id: number;

  urlUpload= 'http://127.0.0.1:81/uploads';



  constructor(private service: ArticleService, private router: Router) { }

  ngOnInit() {

    this.refreshListArticles();
  }

  refreshListArticles() {
    // this.service.listProviders().subscribe(
      this.service.listArticles().subscribe(
      response => {
        this.articles = response;
      }
    );
  }

  deleteArticle(id) {
    //console.log(this.provider);
    this.service.deleteArticle(id).subscribe(response => {
      // console.log(response);
      this.refreshListArticles();
    })
  }

  updateArticle(myObj) {
    this.router.navigate(['updateArticle' + '/' + myObj['id']]);
    }



}
