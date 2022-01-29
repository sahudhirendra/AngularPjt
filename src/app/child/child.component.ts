import { Component, OnInit,Input, EventEmitter ,Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Output() greetEvent=new EventEmitter();
  name='DK';
  constructor() { }

  @Input() item1 = 0;
  ngOnInit(): void {
  }
  callParentGreet()
  {
    // alert('Child Message');
    this.greetEvent.emit(this.name);
  }
}
