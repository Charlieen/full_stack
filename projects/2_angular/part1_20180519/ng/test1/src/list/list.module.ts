import {BrowserModule }from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {ListComponent} from './list.component';
import {ListItemComponent} from './list_item.component';



//1:
@NgModule({
    declarations:[
        ListComponent,
        ListItemComponent
    ],
    imports:[
        BrowserModule
    ],
    exports:[ListComponent],

    providers:[],
    bootstrap:[ListComponent]
})

//2:
export  class ListModule {}