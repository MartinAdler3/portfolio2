import { Component, input } from '@angular/core';

@Component({
  selector: 'app-prueba',
  imports: [],
  templateUrl: './prueba.html',
  styleUrl: './prueba.scss',
})
export class Prueba {
  desc = input<string>();
  titulo = input<string>();
  img = input();
}
