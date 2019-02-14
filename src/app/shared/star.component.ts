import { Component, OnChanges, Input, Output,EventEmitter } from '@angular/core';


@Component({
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css'],
    selector:'app-star'
})
export class StarComponent implements OnChanges{
    @Input() rating:number;
    starWidth:number;
    
    @Output() ratingClicked:EventEmitter<string>= new EventEmitter<string>();
    
    ngOnChanges(): void {
        this.starWidth = this.rating * 75/5;
    }

    onClick():void{
       console.log('rating clicked');
       this.ratingClicked.emit(` the rating ${this.rating} clicked!`);
    }
}