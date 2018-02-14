import { Directive, ElementRef, Renderer , Input , OnInit} from '@angular/core';

@Directive({
  selector:'[myHidden]'
})

export class HiddenDirective implements OnInit{
  @Input() myHidden: boolean; // this basically how ngIF is defined to take a boolean arg
  constructor(public el:ElementRef , public renderer: Renderer){
    console.log(el.nativeElement);
  }
  ngOnInit(){
    console.log(this.myHidden);
    if(this.myHidden){
      console.log('hide');
      this.renderer.setElementStyle(this.el.nativeElement , 'display' , 'none');
    }
  }
}
