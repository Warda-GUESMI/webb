import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-form',
  standalone: true,
  imports: [CommonModule, FormsModule],  // ← Retiré NavbarComponent
  templateUrl: './article-form.component.html'
})
export class ArticleFormComponent implements OnInit {
  article = {
    id: null as number | null,
    nom: '',
    description: '',
    prix: 0
  };
  
  isEditMode = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEditMode = true;
      this.chargerArticle(id);
    }
  }

  chargerArticle(id: number) {
    console.log('Charger article:', id);
  }

  save() {
    if (!this.article.nom || !this.article.description || this.article.prix <= 0) {
      alert('Veuillez remplir tous les champs correctement');
      return;
    }

    console.log('Sauvegarder article:', this.article);
    this.router.navigate(['/articles']);
  }

  annuler() {
    this.router.navigate(['/articles']);
  }
}