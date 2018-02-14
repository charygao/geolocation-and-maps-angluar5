import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector:'[myIf]'
})
/*Structural directive , choosing whether or not to display a template based on a truthy value*/
export class myIfDirective{
  constructor( private templateRef: TemplateRef<any>,  private viewContainer: ViewContainerRef){
      console.log(this.templateRef);
      console.log(this.viewContainer);
    }
    @Input() set myIf(shouldAdd:boolean){
      if (shouldAdd) {
      // If condition is true add template to DOM
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
     // Else remove template from DOM
      this.viewContainer.clear();
    }
    }
}
