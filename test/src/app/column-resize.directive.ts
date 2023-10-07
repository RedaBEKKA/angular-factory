import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColumnResize]'
})
export class ColumnResizeDirective {
  private resizing = false;
  private initialX!: number;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    event.preventDefault();
    this.resizing = true;
    this.initialX = event.clientX;
    console.log(event," mouss");
    
    const table = this.el.nativeElement.closest('table');
    const tableWidth = table.offsetWidth;

    const th = this.el.nativeElement.closest('th');
    const thWidth = th.offsetWidth;

    const minColumnWidth = 50; // Adjust as needed

    const onMouseMove = (moveEvent: MouseEvent): void => {
      if (this.resizing) {
        const deltaX = moveEvent.clientX - this.initialX;
        const newWidth = thWidth + deltaX;
        if (newWidth >= minColumnWidth) {
          this.renderer.setStyle(th, 'width', newWidth + 'px');
        }
      }
    };

    const onMouseUp = (): void => {
      if (this.resizing) {
        this.resizing = false;
      }
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  }
}
