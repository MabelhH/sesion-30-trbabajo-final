import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit{

lista:any[]=[
  {
      "id": 1,
      "name": "Verduras",
      "imagen":"https://agraria.pe/imgs/a/lx/el-proximo-martes-lanzaran-el-ano-internacional-de-las-fruta-24194.jpg",
      "costo": 10,
      "cantidad":2,
      "descripcion":"Nuestras productos son selecionados minuciosamentes para ofreserles lo mejor para ti y tu familia. "
    },
    {
      "id": 2,
      "name": "Colimentos",
      "imagen":"https://i.pinimg.com/474x/8b/12/5a/8b125aafd05c8c155bc0619db2c9fa83.jpg",
      "costo": 5,
      "cantidad":2,
      "descripcion":"Nuestras productos son selecionados minuciosamentes para ofreserles lo mejor para ti y tu familia. "
      

    },
    {
      "id": 3,
      "name": "Frutas",
      "imagen":"https://i.blogs.es/f8606a/julia-zolotova-m_xiaxqe3ms-unsplash/450_1000.webp",
      "costo": 15,
      "cantidad":2,
      "descripcion":"Nuestras productos son selecionados minuciosamentes para ofreserles lo mejor para ti y tu familia. "
    },
    {
      "id": 4,
      "name": "Plantas",
      "imagen":"https://img.freepik.com/vector-gratis/coleccion-plantas-interior-diseno-plano-organico_23-2148906273.jpg?auto=format&h=200",
      "costo": 18,
      "cantidad":2,
      "descripcion":"Nuestras productos son selecionados minuciosamentes para ofreserles lo mejor para ti y tu familia. "
    },
    {
      "id": 5,
      "name": "Ropa",
      "imagen":"https://conceptodefinicion.de/wp-content/uploads/2018/04/Ropa-2.jpg",
      "costo": 80,
      "cantidad":2,
      "descripcion":"Nuestras productos son selecionados minuciosamentes para ofreserles lo mejor para ti y tu familia. "
    },
    {
      "id": 6,
      "name": "Libros",
      "imagen":"https://www.comunidadbaratz.com/wp-content/uploads/Sabes-cuales-son-los-libros-mas-vendidos-de-2017-a-traves-de-Internet-en-Espana.jpg",
      "costo": 25,
      "cantidad":2,
      "descripcion":"Nuestras productos son selecionados minuciosamentes para ofreserles lo mejor para ti y tu familia. "
    },
    {
      "id": 7,
      "name": "Tecnologia",
      "imagen":"https://apicms.thestar.com.my/uploads/images/2022/09/19/1740058.jpg",
      "costo": 1500,
      "cantidad":2,
      "descripcion":"Nuestras productos son selecionados minuciosamentes para ofreserles lo mejor para ti y tu familia. "
    },
    {
      "id": 8,
      "name": "Mas productos",
      "imagen":"https://www.nestle.com.pe/sites/g/files/pydnoa276/files/2022-04/WEB_BODEGON.png",
      "costo": 50,
      "cantidad":2,
      "descripcion":"Nuestras productos son selecionados minuciosamentes para ofreserles lo mejor para ti y tu familia. "
    }
  ]
  ngOnInit(): void {
   
  }

}
