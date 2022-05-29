import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Router } from '@angular/router';
import { ProviderService } from '../services/provider.service';

//import { FormBuilder, Validators,FormGroup,FormControl, AbstractControl } from '@angular/forms';
import { FormBuilder, Validators,FormGroup,FormControl } from '@angular/forms';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  /* files upload
  selectedFiles?: FileList;
  selectedFile = null;
  progressInfos: any[] = [];
  message: string[] = [];
  previews: string[] = [];
  imageInfos?: Observable<any>;*/

   // article: any;

  /*isSubmitted = false;
   providers: any;
  providerId: any;
   submitted = false;
 cityName: null;
  providerName: any;*/

  myArticle: any = {
    label:null,
    price:null,
    providerid: null,
    picture:null
  };
  ProviderIdw=null;
  website=null;
  articleLabel=null;
  articlePrice=null;
  articlePicture=null;


  //idProvider:any;

  SERVER_URL = 'http://127.0.0.1:81/articles/add';
  registrationForm: FormGroup;
  form: FormGroup;
  formData : FormData;
  file:File =null;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  /// last modif
  selectedFile: File;
  providers: any;


     constructor( private httpClient: HttpClient,private router: Router, private articleservice: ArticleService,
       private providerservice: ProviderService) { }

      ngOnInit() {

        this.getListProviders();

      }

   //Gets called when the user selects an image
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
    //console.log(this.selectedFile);
  }

      addArticle(myform) {

        const article = new FormData();
        article.append('imageFile', this.selectedFile, this.selectedFile.name);
        article.append('imageName',this.selectedFile.name);
        article.append('providerId', this.myArticle.providerid);
        article.append('label', myform.value.articleLabel);
        article.append('price', myform.value.articlePrice);


        /*article.append('name', myform.value.providerName);
        article.append('email', myform.value.providerEmail);
        article.append('address', myform.value.providerAdress);*/

        this.articleservice.addArticle(article).subscribe(
          (response) =>{
            console.log(response);
            this.router.navigate(['listArticles']);
          }
        );

      }




    /*  submit():void{
      //  alert(this.form.value);
        //ajouté
        this.submitted = true;
        if (this.form.invalid) {
          return;
        }

        //console.log(JSON.stringify(this.form.value, null, 2));
   // const formData = new FormData();

   // formData.append('file', this.form.get('articlePicture').value);
    const providerId =this.article.providerid;
   this.formData.append('file', this.file);
    this.formData.append('article', this.article);
   // this.httpClient.post<any>(this.SERVER_URL+ '/' + providerId, this.formData).subscribe(
    this.httpClient.post<any>(this.SERVER_URL+ '/' + providerId, this.formData).subscribe(

   //(res) => console.log(res),
   (res => {
    console.log(res);
    alert('Uploaded Successfully.');
  })
   ,
   (err) => console.log(err)
 );

}*/

      changeWebsite(e:any) {
       // console.log(e.target.value);
       //alert( this.form.get('website').setValue(e.target.value));

       alert("AAAAAAAAAA    la valeur est  : "+e.target.value);
       //this.article.providerid = e.target.value;  s7i7a
       alert("la valeur  2222222222: "+this.myArticle.providerid);
       //alert( "On verifie  : "+this.form.get('website').value); s7i7a
      }

       /****
       oppoSuitsForm = this.fb.group({
        ProviderIdw: ['']
      })
      /***** */



     /*oppoSuitsForm = this.fb.group({
      name: ['', [Validators.required]],
    });*/

   /* registrationForm = this.fb.group({
     // cityName: ['', [Validators.required]],
     providerName: ['', [Validators.required]],
    });*/



 /* ngOnInit() {

    this.getListProviders();
    this.imageInfos = this.uploadService.getFiles();
  }
*/


  getListProviders() {
    this.providerservice.listProviders().subscribe(
      response => {
        this.providers = response;
      }
    );
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
     /* const file = event.target.files[0];*/
     this.file= event.target.files[0];  // aussi   = event.target.files.item(0);
      //this.registrationForm.get('profile').setValue(file); ne marche pas
      //this.form.get('articlePicture').setValue(file);



      //alert( this.form.get('website').setValue(e.target.value)); ==> affiche Object object
      alert("le fichier est : "+this.myArticle.picture);

      alert("Pour savoir : "+event.target.files[0].name);
     /* this.article.picture= event.target.files[0].name;
      alert("Apressss Rectiff  :"+this.article.picture);

      ==> BON: Affiche le nom du fichier seulement
      mais on va garder le path tels qu'il est pour le traiter côté back end
      */
    }
    }

  /*  selectFile(event) {
      this.selectedFiles = event.target.files;
    }*/

/** Upload selected File
upload(myform) {
  this.progress.percentage = 0;
  this.currentFileUpload = this.selectedFiles.item(0);
this.articleservice.pushFileToStorage(myform,this.currentFileUpload).subscribe(event => {
    if (event.type === HttpEventType.UploadProgress) {
      this.progress.percentage = Math.round(100 * event.loaded / event.total);
    } else if (event instanceof HttpResponse) {
       alert('File Successfully Uploaded');
       this.router.navigate(['listArticles']);
    }
    this.selectedFiles = undefined;
   }
  );
} */




  }




 // addArticle(){}


  /*addArticle(myform) {  ///   ici le code  du Upload

    this.uploadFiles(myform);


    /*this.articleservice.addArticle(myform).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['listArticles']);
      }
    );
    this.submitted = true;
    alert(JSON.stringify(this.oppoSuitsForm.value));

  }
  */

   /* Select Dropdown error handling */
  /* public handleError = (controlName: string, errorName: string) => {
    return this.oppoSuitsForm.controls[controlName].hasError(errorName);
  }*/

 /* selectFiles(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.selectedFiles = event.target.files;
    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.previews.push(e.target.result);
        };
        reader.readAsDataURL(this.selectedFiles[i]);
      }
    }
  }*/

  /*uploadFiles(myform): void {
    this.message = [];
    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        //this.upload(i, this.selectedFiles[i]);
        this.upload(i, this.selectedFiles[i],myform);
      }
    }
  }*/

 /* upload(idx: number, file: File,myform: FormGroup): void {

    //ajouté
    this.article = {
      'label': myform.value.articleLabel,
     // 'picture': myform.value.articlePicture,
      'price': myform.value.articlePrice,
      'provider_id': myform.value.providerId }

    // fin ajout

    this.progressInfos[idx] = { value: 0, fileName: file.name };
    if (file) {
      // this.uploadService.upload(file).subscribe({
        this.uploadService.upload(this.article,file).subscribe({ // ajouté
        next: (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            const msg = 'Uploaded the file successfully: ' + file.name;
            this.message.push(msg);
            this.imageInfos = this.uploadService.getFiles();
          }
        },
        error: (err: any) => {
          this.progressInfos[idx].value = 0;
          const msg = 'Could not upload the fformile: ' + file.name;
          this.message.push(msg);
        }});
    }
  }
*/


 // changeCity(e:any) {
 /* changeProvider(e:any) {
   // this.cityName?.setValue(e.target.value, {
    this.providerName?.setValue(e.target.value, {
      onlySelf: true,
    });
    alert("la valeur est  : "+e.target.value);
    //this.provider.id = e.target.value;
    alert("22222222 : "+this.article.provider_id)
    //alert("3333333333 : "+this.providerId.valueOf())
  }*/

   // Access formcontrols getter
   /*get cityName() {
    return this.registrationForm.get('cityName');
  }*/

  /*onSubmit(): void {
    console.log(this.registrationForm);
    alert(this.registrationForm.value);
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      false;
    } else {
      console.log(JSON.stringify(this.registrationForm.value));
    }
  }*/




  /*onSubmit() {

alert(JSON.stringify(this.oppoSuitsForm.value));


    const formData = new FormData();
    formData.append('file', this.registrationForm.get('profile').value);
    formData.append('article', this.article);


    this.httpClient.post<any>(this.SERVER_URL, formData).subscribe(
      this.httpClient.post<any>(this.SERVER_URL+ '/' + this.article.provider_id, formData).subscribe(
         + '/' + id
      (res) => console.log(res),
      (err) => console.log(err)
    );

  }
  */








 /* changeSuit(e) {
    this.oppoSuitsForm.get('name').setValue(e.target.value, {
       onlySelf: true
    })
  }*/





