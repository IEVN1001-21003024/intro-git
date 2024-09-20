import { Component } from '@angular/core';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {

  imageWidth: number = 50;
  imageMargin: number = 2;
  muestraImagenes: boolean = true;

    productos: any[] = [
        {
            "productoId": 1,
            "modelo": "sentra",
            "descripcion": "5 puertas",
            "year": "marzo 12 2021",
            "precio": 120000,
            "marca": "nisan",
            "color": "blanco",
            "imgUrl": "https://cdn.autobild.es/sites/navi.axelspringer.es/public/bdc/dc/fotos/bugatti_bolide.jpg?tf=3840x"
        
        },
        {
            "productoId": 2,
            "modelo": "a4",
            "descripcion": "4 puertas",
            "year": "marzo 12 2021",
            "precio": 130000,
            "marca": "volsvagen",
            "color": "negro",
            "imgUrl": "https://media.gq.com.mx/photos/64dd510051be22c2d963222c/16:9/w_1280,c_limit/Bugatti_Chiron_Super_Sport_Golden_Era.jpg"
        
        },
        {
            "productoId": 3,
            "modelo": "a5",
            "descripcion": "2 puertas",
            "year": "marzo 12 2021",
            "precio": 150000,
            "marca": "chevrolet",
            "color": "rojo",
            "imgUrl": "https://motor.elpais.com/wp-content/uploads/2021/08/2024-Bugatti-Bolide-5-1200x675.jpg"
        
        },   
    ]
  }
