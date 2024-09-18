import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({
  selector: '[appImgNotFound]',
  //standalone:true
})
export class ImgNotFoundDirective {
  constructor(private elementImg: ElementRef) { }
  @HostListener('error')
  onError(){
    this.elementImg.nativeElement.src='../../../assets/images/poke.svg';
  }
}
