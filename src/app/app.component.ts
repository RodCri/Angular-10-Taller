import { Component, Output, EventEmitter } from '@angular/core';
import { Product } from './model/product.model';
import { Product2 } from './model/product2.model';
import { Task } from './model/task.model';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Definimos un array de tareas para almacenarlas
  tasks: Task[];

  // creamos los arrays de comida y bebida
  arrComida: Product[];
  arrBebida: Product[];

  // array de productos seleccionados
  arrProductos: Product[];

  // Productos seleccionados shopingList
  productosSeleccionados: Product2[];
  productosComprados: Product2[];

  // Array de post para el api
  arrPost: any[];

  constructor(private postService: PostsService){
    this.tasks = [];

    this.arrComida = [
      new Product('Filete de pollo con ensalada',23.3,'https://image.shutterstock.com/image-photo/chicken-fillet-salad-healthy-food-600w-1721943142.jpg'),
      new Product('Carne de cerdo asada',2.3,'https://image.shutterstock.com/image-photo/roasted-pork-steak-vegetables-on-600w-1913694799.jpg'),
      new Product('ensalada con quinua',13.3,'https://image.shutterstock.com/image-photo/grilled-pork-on-wooden-tray-600w-1712423662.jpg'),
      new Product('Tasty pita', 12.4, 'https://image.shutterstock.com/image-photo/delicious-tasty-pita-meat-vegetables-600w-571810735.jpg'),
      new Product('Costillas de cerdo',23.4,'https://image.shutterstock.com/image-photo/grilled-pork-ribs-sliced-cucumbers-600w-1751405792.jpg'),
      new Product('Cerdo a la parrilla',20.9,'https://image.shutterstock.com/image-photo/grilled-pork-on-wooden-tray-600w-1712423662.jpg'),
      new Product('traditional turkish',17.7,'https://image.shutterstock.com/image-photo/traditional-turkish-food-cag-kebab-600w-1184433916.jpg')
    ];
    this.arrBebida = [
      new Product('Postobon Aqua', 2.22, 'https://tomatelavida.com.co/wp-content/uploads/2018/07/freskola-transparente-800x1200.png'),
      new Product('troíkola naranja',11.2,'https://tomatelavida.com.co/wp-content/uploads/2018/07/freskola-transparente-800x1200.png'),
      new Product('Canada dry',11.2,'https://tomatelavida.com.co/wp-content/uploads/2018/07/freskola-transparente-800x1200.png'),
      new Product('tamarindo Postobon',10.2,'https://tomatelavida.com.co/wp-content/uploads/2018/07/freskola-transparente-800x1200.png'),
      new Product('castalia', 1.6, 'https://tomatelavida.com.co/wp-content/uploads/2018/07/freskola-transparente-800x1200.png')
    ];
    this.arrProductos = [];
    this.productosSeleccionados = [];
    this.productosComprados = [];
  }

  onTaskCreate($event){
    this.tasks.push($event);
    //console.log($event);
    //console.log(this.tasks);
  }
  onProuctoSeleccionado($event){
    const productoEncontrado = this.arrProductos.find(producto => producto.name === $event.name );
    if(productoEncontrado){
      productoEncontrado.count++;
    }else{
      $event.count = 1;
      this.arrProductos.push($event);
    }
  }

  onProductoCreado($event){
    this.productosSeleccionados.push($event);
  }

  onProductoSeleccionadoCompra($event){
    const prod = this.productosSeleccionados.splice($event,1);
    this.productosComprados.push(prod[0]);
  }

  onProductoEliminadoCompra($event){
    const prod = this.productosComprados.splice($event,1);
    this.productosSeleccionados.push(prod[0]);
  }

  ngOnInit(): void {
    this.postService.getAll()
      .then(post=> this.arrPost = post)
      .catch(error => console.log(error));
    
  }  

  async details(postId){
    try{
      const post = await this.postService.getById(postId);
      console.log(post)
    }catch(error){
      console.log(error)
    }
  }

  onClickPost(){
    this.postService.newPost({
      title: 'Nuevo Titulo',
      body: 'Cuerpo del post',
      userId: 1
    }).then(response => console.log(response))
      .catch(error => console.log(error))
  }

  onClickUpdate(){
    this.postService.updatePost({
      id: 5,
      title: 'nuevo titulo',
      body: 'nuevo body',
      userId: 3
    }).then(response => console.log(response))
    .catch(error => console.log(error));
  }

  async onClickDelete(){
    try{
      const response = await this.postService.deletePost(5);
      console.log(response);
    }catch(error){
      console.log(error)
    }
  }

}
