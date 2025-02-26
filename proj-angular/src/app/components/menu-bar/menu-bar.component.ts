import { Component } from '@angular/core';
import { MenuTitleComponent } from "../menu-title/menu-title.component";

@Component({
  selector: 'app-menu-bar',
  imports: [MenuTitleComponent],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {

}
