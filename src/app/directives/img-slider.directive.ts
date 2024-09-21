import { Directive, HostListener, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ImgSlider]',
  standalone:true
})
export class ImgSliderDirective {
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}  
  @Input() set ImgSlider(images: string[]) {
    if (images) {
      //console.log(images);
    }
  }


  ngOnInit(){
    this.templateRef.elementRef.nativeElement.class="slideshow-container";
    //this.viewContainer.createEmbeddedView(this.templateRef);
    console.log(this.templateRef.elementRef);
  }


  ngAfterViewInit() {
   /*  let slideIndex = 0;
    let slides = this.viewContainer.element.nativeElement.children as HTMLCollectionOf<HTMLElement>;/
    function showSlides() {
      for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
      if (slideIndex >= slides.length) slideIndex = 0;
      slides[slideIndex++].style.display = "block";
      setTimeout(showSlides, 2000);
    }
    showSlides(); */
  }
}
