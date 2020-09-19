import {Component} from '@angular/core';

// 1. declaration
@Component({
    selector:'list',
    templateUrl:'./list.component.html',
    styleUrls:['./list.component.css']
})

// 2.class

export class ListComponent{
   private  a:number =12;

}
