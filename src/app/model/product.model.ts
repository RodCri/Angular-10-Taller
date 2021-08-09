// Es muy importante definir un modelo de datos estructurado
// para saber con que datos trabajaremos y asi evitar problemas
// en la compaginacion de los mismos
export class Product{
    name: string;
    price: number;
    imgURL: string;
    count: number;

    constructor(pName:string , pPrice:number, pImgURL:string){
        this.name = pName;
        this.price = pPrice
        this.imgURL = pImgURL;
        this.count = 0;
    }
}