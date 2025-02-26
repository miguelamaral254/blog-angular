import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input() photoCover: string = "";
  @Input() cardTitle: string = "";
  @Input() cardDescription: string = "";
  @Input() Id: string = "0";

  ngOnInit(): void {
    const bigCardData = dataFake.find(item => item.id === this.Id);
    if (bigCardData) {
      this.photoCover = bigCardData.photoCover;
      this.cardTitle = bigCardData.title;
      this.cardDescription = bigCardData.description;
    }
  }
}
