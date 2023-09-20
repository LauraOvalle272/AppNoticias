import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.page.html',
  styleUrls: ['./noticia.page.scss'],
})
export class NoticiaPage implements OnInit {

  detailNoticias:any = [];
  titleNew: string ='';
  textSmallnew: string = '';
  dateNews: string = '';
  urlImgnew: string ='';
  textLongNew: string = '';
  fuenteNews: string = '';

  constructor(
    public route: Router
  ) { }

  ngOnInit() {
    this.detailNoticias = localStorage.getItem('detailNoticias');
    this.detailNoticias = JSON.parse(this.detailNoticias);
    console.log(this.detailNoticias)

    this.titleNew = this.detailNoticias.title;
    this.textSmallnew = this.detailNoticias.text_small;
    this.dateNews = this.detailNoticias.date;
    this.urlImgnew = this.detailNoticias.url_imag;
    this.textLongNew = this.detailNoticias.text_long;
    this.fuenteNews = this.detailNoticias.font_noticia;
  }

  back(){
    this.route.navigate(['/home'])
  }
  

}
