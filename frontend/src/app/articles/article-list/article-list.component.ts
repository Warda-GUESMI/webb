import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, RouterModule],  // ← Retiré NavbarComponent
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles: any[] = [];

  ngOnInit() {
    this.chargerArticles();
  }

  chargerArticles() {
    this.articles = [
      { id: 1, nom: 'Article 1', description: 'Description 1', prix: 100 },
      { id: 2, nom: 'Article 2', description: 'Description 2', prix: 200 }
    ];
  }

  delete(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
      console.log('Supprimer article:', id);
      this.articles = this.articles.filter(a => a.id !== id);
    }
  }
}