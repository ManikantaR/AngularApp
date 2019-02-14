import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ConvertToSpacesPipe } from '../shared/convert.to.spaces.pipe';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailGuard } from './product-detail.guard';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,    
    ConvertToSpacesPipe,    
  ]
  ,
  imports: [
    RouterModule.forChild([
      {path:'products',component:ProductListComponent},
      {path:'product/:id',
      canActivate:[ProductDetailGuard],
      component:ProductDetailsComponent}    
    ]),
    SharedModule
  ]
})
export class ProductModule { }
