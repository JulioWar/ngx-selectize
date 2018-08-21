import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[ngx-selectize-option]'
})
export class NgxSelectizeOptionDirective {

  @Input() value: any;

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {
    this.renderer.addClass(this.getNativeElement(), 'option');
    this.renderer.listen(this.getNativeElement(), 'click', () => {
      console.log(this.value);
    });
  }

  private getNativeElement() {
    return this.hostElement.nativeElement;
  }

  @HostListener('mouseover') onMouseOver() {
    this.renderer.addClass(this.getNativeElement(), 'active');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.getNativeElement(), 'active');
  }

}
