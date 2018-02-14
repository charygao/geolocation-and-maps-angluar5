import { Directive, HostListener, Renderer, ElementRef } from '@angular/core';

@Directive({
  selector:'[myUnderline]'
})

export class UnderlineDirective{
  constructor(private renderer: Renderer , private el: ElementRef){
  }
  // Event listeners for element hosting
  // the directive , Host Listeners are event listeners attached to any element that hosts (the directive is placed on) the directive.
  //for example <p myUnderline></p> the host listerner attaches to the DOM <p> tag in our template
  @HostListener('mouseenter') onMouseEnter(){
    this.hover(true);
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.hover(false);
  }
  hover(underline:boolean):void{
    if(underline){
      this.renderer.setElementStyle(this.el.nativeElement, 'text-decoration', 'underline');
    }else{
      this.renderer.setElementStyle(this.el.nativeElement, 'text-decoration', 'none');
    }
  }
}
