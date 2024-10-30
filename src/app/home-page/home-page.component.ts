import { Component } from '@angular/core';
import { TEXTS } from './texts';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  texts = TEXTS;
}
