import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-commande-list',
  standalone: true,
  imports: [CommonModule, DatePipe],  // ← Retiré NavbarComponent
  templateUrl: './commande-list.component.html'
})
export class CommandeListComponent implements OnInit {
  commandes: any[] = [];

  ngOnInit() {
    this.chargerCommandes();
  }

  chargerCommandes() {
    this.commandes = [
      { 
        id: 1, 
        numero: 'CMD-001', 
        dateCommande: new Date('2024-01-15'),
        client: 'Client 1',
        montantTotal: 500,
        statut: 'En cours'
      },
      { 
        id: 2, 
        numero: 'CMD-002', 
        dateCommande: new Date('2024-01-16'),
        client: 'Client 2',
        montantTotal: 750,
        statut: 'Livrée'
      }
    ];
  }
}