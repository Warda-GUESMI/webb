import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/navbar/navbar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  statistiques = {
    totalArticles: 0,
    totalCommandes: 0,
    chiffreAffaires: 0
  };

  ngOnInit() {
    this.chargerStatistiques();
  }

  chargerStatistiques() {
    // TODO: Charger les statistiques depuis votre service
    this.statistiques = {
      totalArticles: 45,
      totalCommandes: 128,
      chiffreAffaires: 45600
    };
  }
}