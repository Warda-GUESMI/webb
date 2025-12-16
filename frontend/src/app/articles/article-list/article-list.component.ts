import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  templateUrl: './article-list.component.html'
})
export class ArticleListComponent implements OnInit {
  articles: any[] = [];

  ngOnInit() {
    // TODO: Charger les articles depuis votre service
    this.chargerArticles();
  }

  chargerArticles() {
    // Exemple de données
    this.articles = [
      { id: 1, nom: 'Article 1', description: 'Description 1', prix: 100 },
      { id: 2, nom: 'Article 2', description: 'Description 2', prix: 200 }
    ];
  }

  delete(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
      // TODO: Appeler votre service pour supprimer l'article
      console.log('Supprimer article:', id);
      this.articles = this.articles.filter(a => a.id !== id);
    }
  }
}