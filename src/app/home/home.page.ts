import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  listCategories: any = [] = []
  listNoticias: any = [] = []
  detailNoticias: any = []  = []


  constructor(
    public http: HttpClient,
    public route: Router
  ) {}

  ngOnInit() {
    this.http.get('assets/noticias/notis.json').subscribe(data => {
      this.listCategories = JSON.parse(JSON.stringify(data))[0].noticias.categorys;
      this.listNoticias = JSON.parse(JSON.stringify(data))[0].detailNoticias;
  });
        
   
  }
  
  Navigate(valores: any){
    this.route.navigate(['/noticia'])
    localStorage.setItem('detailNoticias', JSON.stringify(valores))
  }
}  

 

  

