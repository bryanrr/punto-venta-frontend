import { Component, ContentChild, HostBinding, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { InputRefDirective } from '../directives/input-ref.directive';
import { SvgRefDirective } from '../directives/svg-ref.directive';

@Component({
  selector: 'app-fa-input',
  templateUrl: './fa-input.component.html',
  styleUrls: ['./fa-input.component.css']
})
export class FaInputComponent implements OnInit {

  @Input() icon: string;

  @ContentChild(InputRefDirective)
  input: InputRefDirective;

  @ViewChildren(SvgRefDirective)
  svg: QueryList<SvgRefDirective>;

  constructor() { }

  @HostBinding("class.focus")
  get focus() {
    if(this.input&&this.svg){
      this.svg.forEach(svgs=>{
        if(svgs&&this.input.focus){
          svgs.$focus=true;
        }else{
          svgs.$focus=false;
        }
      });
    }
    return this.input ? this.input.focus : false;
  }

  ngOnInit(): void {
  }

}
