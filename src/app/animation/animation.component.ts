import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('openClose', [

      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'blue'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'pink'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
      transition('* => closed', [
        animate('1s')
      ]),
      transition('* => open', [
        animate('0.5s')
      ]),
      transition('open <=> closed', [
        animate('0.5s')
      ]),
      transition ('* => open', [
        animate ('1s',
          style ({ opacity: '*' }),
        ),
      ]),
      transition('* => *', [
        animate('1s')
      ]),
    ]),
    trigger('flyOut',[
      transition('void => *',[
        style({transform: 'translateX(-100%)'}),
        animate('1s')
      ]),
      transition('* => void',[
        animate('1s',style({transform: 'translateX(100%)'}))
      ])
    ]),
  ]
  })
export class AnimationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isOpen = true;
  show=true;
  toggle() {
    this.isOpen = !this.isOpen;
  }
  click()
  {
    this.show=!this.show;
  }
}
