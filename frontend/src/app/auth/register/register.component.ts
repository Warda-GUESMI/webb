import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  error = '';
  success = '';

  constructor(private router: Router) {}

  register() {
    // Réinitialiser les messages
    this.error = '';
    this.success = '';

    if (!this.name || !this.email || !this.password) {
      this.error = 'Veuillez remplir tous les champs';
      return;
    }
    
    // TODO: Appeler votre service d'inscription
    console.log('Inscription:', this.name, this.email, this.password);
    
    // Exemple de succès
    this.success = 'Inscription réussie ! Redirection...';
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000);
  }
}