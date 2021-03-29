import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appSvgRef]'
})
export class SvgRefDirective {

  private focus=false;

  constructor() { }

  @HostBinding("class.focus")
  get $focus() {
    return this.focus;
  }

  set $focus(focus){
    this.focus=focus;
  }

}
