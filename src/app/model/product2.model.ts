export class Product2{
    
    nombre: string;
    cantidad: number;
    departamento: string;

    // establecemos valores por defecto
    constructor(pNombre: string = '', pCantidad: number = 0, pDepartamento: string = ''){
        this.nombre = pNombre;
        this.cantidad = pCantidad;
        this.departamento = pDepartamento;
    }
}