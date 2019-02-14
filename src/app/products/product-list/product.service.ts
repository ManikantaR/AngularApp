import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {tap,catchError} from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})
export class ProductService{

    productUrl ='./assets/products.json'
    constructor(private httpClient:HttpClient){

    }
    getProduct():Observable<IProduct[]>{
        return this.httpClient.get<IProduct[]>(this.productUrl).pipe(
            tap(data=>console.log('All:' + JSON.stringify(data))),
            catchError(this.handleError)
        );
                            
    }
    private handleError(handleError: HttpErrorResponse,caught:Observable<IProduct[]>):Observable<IProduct[]> {
        console.error(handleError);
        return throwError(handleError);
    }
    
}