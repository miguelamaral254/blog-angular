import { Component, OnInit } from '@angular/core';
import { MenuBarComponent } from "../menu-bar/menu-bar.component";

@Component({
  selector: 'app-menu-title',
  templateUrl: './menu-title.component.html',
  styleUrls: [
  './menu-title.component.css',
  './menu-title.responsive.component.css'
  ],
  imports: [MenuBarComponent]
})
export class MenuTitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
