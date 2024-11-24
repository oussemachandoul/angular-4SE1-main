import { Component } from '@angular/core';
import { Residence } from 'src/app/core/models/residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {

  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria",
    "image":"../../assets/images/R1.jpg", status: "Disponible"},
    {id:2,"name": "El yasmine",
    "address":"Ezzahra","image":"../../assets/images/R2.jpeg", status:
    "Disponible" },
    {id:3,"name": "El Arij",
    "address":"Rades","image":"../../assets/images/R3.jpg", status:
    "Vendu"},
    {id:4,"name": "El Anber","address":"inconnu",
    "image":"../../assets/images/R4.jpg", status: "En Construction"}
    ];

favorites: Residence[] = [];

searchTerm: string = '';

get filteredResidences(): Residence[] {
  if (!this.searchTerm) {
    return this.listResidences;
  }
  return this.listResidences.filter(residence =>
    residence.address.toLowerCase().includes(this.searchTerm.toLowerCase())
  );
}

showLocation(address: string): void {
  if (address.toLowerCase() === "inconnu") {
    alert("L'adresse de cette résidence est inconnue.");
  } else {
    alert(`Adresse : ${address}`);
  }
}

likeResidence(residence: Residence): void {
  if (!this.favorites.some(fav => fav.id === residence.id)) {
    this.favorites.push(residence);
    alert(`${residence.name} a été ajoutée à vos favoris.`);
  } else {
    alert(`${residence.name} est déjà dans vos favoris.`);
  }
}
}



