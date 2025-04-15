import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTransformUp]',
  standalone: true
})
export class TransformUpDirective {

  constructor(private el:ElementRef,private render:Renderer2) {
  }


  @HostListener("mouseenter") moveUp():void{
    this.render.setStyle(this.el.nativeElement.children[0], 'opacity', '.7');
    this.render.setStyle(this.el.nativeElement.children[0], 'transform', 'translateY(-5px)');
  }
  @HostListener("mouseleave") moveDown():void{
    this.render.setStyle(this.el.nativeElement.children[0], 'opacity', '1');
    this.render.setStyle(this.el.nativeElement.children[0], 'transform', 'translateY(0px)');
  }

}
