import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,  // Indica que é um Standalone Component
  imports: [RouterModule],  // Importa RouterModule para usar [routerLink]
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  @Input() photoCover: string = "";
  @Input() cardTitle: string = "";
  @Input() Id: string = "0";
}
