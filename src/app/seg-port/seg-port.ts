import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-seg-port',
  imports: [CommonModule],
  templateUrl: './seg-port.html',
  styleUrl: './seg-port.scss',
})
export class SegPort {
title = "Martin Uriel Adler"
  subtitle = "Ingeniería en Ingeniería Civil"

  projects = [
    {
      name: "Statill",
      imagen: "assets/images/projects/statill.png",
      description: "En Statill, una aplicación para la gestión de pequeños comercios, mi rol fue de Front End, encargandome de la conexión del back con la página",
    },
    {
      name: "Apocaliptic",
      imagen: "assets/images/projects/apocaliptic.png",
      description: "En Apocaliptic, un juego tower defense, mi rol fue diseñar las torretas y todo el mapa del juego",
    },
    {
      name: "We-Play",
      imagen: "assets/images/projects/we-play.png",
      description: "En We-Play, una juego de trivia y creación de preguntas, mi rol fue de diseño"
    },
  ]

  languages = [
    { name: "HTML", color: "bg-orange-500", label: "5", imagen: "assets/images/languages/html.png" },
    { name: "C#", color: "bg-purple-600", label: "C#", imagen: "assets/images/languages/csharp.png" },
    { name: "Python", color: "bg-blue-500", label: "Py", imagen: "assets/images/languages/python.png" },
    { name: "Java Script", color: "bg-yellow-400", label: "JS", imagen: "assets/images/languages/js.png" },
  ]

  softSkills = {
    left: ["Resolucion de problemas", "Pensamiento crítico", "Etica de trabajo"],
    right: ["Trabajo en equipo", "Adaptacion a los cambios", "Creatividad"],
  }

  contactChannels = [
    { name: "Github", imagen: "assets/images/contact/github.png" },
    { name: "LinkedIn", imagen: "assets/images/contact/linkedin.png" },
    { name: "Gmail", imagen: "assets/images/contact/gmail.png" },
    { name: "WhatsApp", imagen: "assets/images/contact/whatsapp.png" },
  ]

  education = [
    {
      name: "FIUBA",
      period: "2026-2031",
      description: "Ingenieria civil",
      color: "bg-blue-500",
      imagen: "assets/images/education/fiuba.png",
    },
    {
      name: "ORT",
      period: "2020-2025",
      description: "Bachiller orientado en tecnologias de la informacion y la comunicacion",
      color: "bg-gray-300",
      imagen: "assets/images/education/ort.png",
    },
  ]

  profileImage = "assets/images/profile/martin.png"
}
