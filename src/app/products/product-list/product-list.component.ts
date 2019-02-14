import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  pageTitle:string = "Product List";
  imageWidth:number=50;
  imageMargin:number=2;
  showImage:boolean=false;
  _listFilter:string='';
  errorMessage: any;

  get listFilter():string{
    return this._listFilter
  }

  set listFilter(value:string){
    this._listFilter=value;
    this.filterProducts=this.listFilter?this.performFilter(this._listFilter):this.products;
  }

  filterProducts:IProduct[];
  products:IProduct[]=[];
  
  constructor(private productService:ProductService) {
    
  
   }

   toggleImage():void {
     this.showImage = !this.showImage;     
   }

  ngOnInit():void {
    
     this.productService.getProduct().subscribe(
       products=> {this.products = products,this.filterProducts=this.products},
       error=> this.errorMessage =<any>error
     )
    
  }

  performFilter(_listFilter: string): IProduct[] {
    var filterBy = this.listFilter.toLowerCase();
    return this.products.filter((product:IProduct)=> 
    product.productName.toLowerCase().indexOf(filterBy)!==-1);
  }

  onRatingClicked(message: string):void{
    this.pageTitle = this.pageTitle + message;
  }
}
