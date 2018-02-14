import { NgModule } from '@angular/core';
import { HiddenDirective } from './hidden.directive';
import { UnderlineDirective } from './underline.directive';
import { myIfDirective} from './if.directive';

@NgModule({
    declarations: [
        HiddenDirective,
        UnderlineDirective,
        myIfDirective
    ],
    exports: [
        HiddenDirective,
        UnderlineDirective,
        myIfDirective
    ]
})
export class SharedModule{}
