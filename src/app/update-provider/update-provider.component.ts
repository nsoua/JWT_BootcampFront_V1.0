import { Component, OnInit } from '@angular/core';
import { ProviderService } from './../services/provider.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-provider',
  templateUrl: './update-provider.component.html',
  styleUrls: ['./update-provider.component.css']
})
export class UpdateProviderComponent implements OnInit {
  id;
  providerToUpdate;
  name;
  mail;
  adress;

  constructor(private service: ProviderService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id');
      }
    );
    this.service.getProvider(this.id).subscribe(
      response => {
        //console.log(response);
        this.name = response["name"];
        this.mail = response["email"];
        this.adress = response["address"];
      }
    );
  }


  updateProvider() {
    this.providerToUpdate = {
      'name': this.name,
      'email': this.mail,
      'address': this.adress,
      'id': this.id
    }
    this.service.updateProvider(this.providerToUpdate).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['listProvider']);
      }
    );

  }

}
