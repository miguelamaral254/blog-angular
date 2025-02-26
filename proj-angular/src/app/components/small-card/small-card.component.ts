// small-card.component.ts
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  @Input() photoCover: string = "";
  @Input() cardTitle: string = "";
  @Input() cardDescription: string = "";
  @Input() Id: string = "0";
  ngOnInit(): void {
    const smallCardData = dataFake.find(item => item.id === this.Id);
    if (smallCardData) {
      this.photoCover = smallCardData.photoCover;
      this.cardTitle = smallCardData.title;
      this.cardDescription = smallCardData.description;
    }
  }

}
