import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Prueba } from '../prueba/prueba';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Prueba],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
