import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dataFake } from '../../data/dataFake';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BigCardComponent, SmallCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards: any[] = [];
  bigCard: any = {};
  smallCards: any[] = [];

  ngOnInit(): void {
    this.loadCards();
  }

  loadCards() {
    this.cards = dataFake;
    this.bigCard = this.cards[0];
    this.smallCards = this.cards.slice(1, 4);
  }
}
