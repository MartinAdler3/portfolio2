import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-prim-port',
  imports: [CommonModule],
  templateUrl: './prim-port.html',
  styleUrl: './prim-port.scss',
})
export class PrimPort {
 title = "Tomas Levy"
  subtitle = "Estudiante de Arquitectura"

  projects = [
    {
      name: "BUZZadmin",
      description:
        "En BUZZadmin, un administrador para pequeños negocios, mi rol fue el de diseñar y programar la base de datos y toda la lógica del sistema.",
      imagen: "assets/images/projects/buzzadmin.png",
    },
    {
      name: "Bitcoin Clicker",
      description:
        "En BitcoinClicker, un juego de formato clicker, mi rol fue diseñar en 3d los personajes y dibujar tablas como monitores y pausados al código",
      imagen: "assets/images/projects/bitcoin-clicker.png",
    },
    {
      name: "Impulsar+",
      description:
        "Impulsar+ es una aplicación web para ayudar a personas neurodivergentes, mi rol fue hacer la conexión de la base de datos con Front-End",
      imagen: "assets/images/projects/impulsar.png",
    },
  ]

  languages = [
    { name: "Python", color: "bg-blue-500", label: "Py", imagen: "assets/images/languages/python.png" },
    { name: "Java Script", color: "bg-yellow-400", label: "JS", imagen: "assets/images/languages/js.png" },
    { name: "SQL", color: "bg-blue-600", label: "SQL", imagen: "assets/images/languages/sql.png" },
    { name: "C#", color: "bg-purple-600", label: "C#", imagen: "assets/images/languages/csharp.png" },
  ]

  contactChannels = [
    { name: "LinkedIn", imagen: "assets/images/contact/linkedin.png" },
    { name: "Github", imagen: "assets/images/contact/github.png" },
    { name: "Gmail", imagen: "assets/images/contact/gmail.png" },
    { name: "WhatsApp", imagen: "assets/images/contact/whatsapp.png" },
  ]

  education = [
    {
      name: "ORT",
      period: "2020-2025",
      description: "Bachiller orientado en tecnologías de la información y la comunicación",
      color: "bg-gray-400",
      imagen: "assets/images/education/ort.png",
    },
    {
      name: "FADU",
      period: "2026-2031",
      description: "Licenciatura en Arquitectura",
      color: "bg-yellow-400",
      imagen: "assets/images/education/fadu.png",
    },
  ]

  profileImage = "assets/images/profile/tomas.png"
}
