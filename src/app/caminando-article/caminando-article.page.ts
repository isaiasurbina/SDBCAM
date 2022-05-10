import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-caminando-article',
  templateUrl: './caminando-article.page.html',
  styleUrls: ['./caminando-article.page.scss'],
})
export class CaminandoArticlePage implements OnInit {
  article = {title: '', desc:'', banner:'' };
  constructor(private a_route: ActivatedRoute) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    
    this.a_route.queryParams.subscribe( params => {
        this.article.title = params.title ;
        this.article.desc = params.desc ;
        this.article.banner = params.banner ;
    });
    
  }

}
