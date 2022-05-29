import { Component, OnInit } from '@angular/core';
import { Post } from '../Models';
import { PostsService } from '../services/posts.service';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  logo:string="https://smart-it-partner.com/wp-content/uploads/2021/06/logo.png";
  etudiants:string[]=[];
  mesPosts:Post[];
  nom:string="mon composant";
  displayed:boolean=true;
  constructor(private serviceUser: UsersService, private servicePosts:PostsService) {

   }

  ngOnInit(): void {

    this.etudiants = this.serviceUser.getStudent();
    this.servicePosts.getPosts().subscribe(
    data => {
       // console.log(data);
       this.mesPosts = data;
      }
    );

  }
  display()
  {
    //alert("Merci bq Angular");
    this.displayed = !this.displayed
  }

}
