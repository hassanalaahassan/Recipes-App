import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverDir]',
  standalone: true
})
export class HoverDirDirective {

  constructor(private el:ElementRef , private render:Renderer2) {
    console.log(this.el.nativeElement.children[0]);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.toggleContent('hide');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.toggleContent('show');
  }

  private toggleContent(action: 'hide' | 'show') {
    const h5 = this.el.nativeElement.querySelector('h5');
    if (h5) {
      this.render.setStyle(h5, 'opacity', action === 'hide' ? '0' : '1');
      this.render.setStyle(h5, 'transform', action === 'hide' ? 'translateY(-10px)' : 'translateY(0)');
    }
  }

}
