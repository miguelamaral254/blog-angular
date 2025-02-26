import { Component, OnInit } from '@angular/core';
import { dataFake } from '../../data/dataFake'; // Importando o dataFake
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BigCardComponent, SmallCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bigCard: any; // Para armazenar o big card
  smallCards: any[] = []; // Para armazenar os small cards

  ngOnInit(): void {
    this.loadCards();
  }

  loadCards() {
    // Pega o primeiro item como o big card
    this.bigCard = dataFake[0];

    // Pega os próximos 3 itens para os small cards
    this.smallCards = dataFake.slice(1, 4);
  }
}
