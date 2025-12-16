import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],  // ← Retiré NavbarComponent
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
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
    this.statistiques = {
      totalArticles: 45,
      totalCommandes: 128,
      chiffreAffaires: 45600
    };
  }
}