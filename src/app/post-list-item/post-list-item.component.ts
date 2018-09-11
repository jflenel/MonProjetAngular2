import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() loveIts: number;
  @Input() content: string;
  @Input() created_at: Date;


  constructor() {
    this.created_at = new Date();
  }

  ngOnInit() {
  }

  getColor(){
    if(this.loveIts > 0) {
      return 'green';
    }
    else if(this.loveIts < 0) {
      return 'red';
    }
  }


  onLoveit(){
    this.loveIts += 1;
    console.log(this.loveIts);
  }
  onDontloveit(){
    this.loveIts -= 1;
    console.log(this.loveIts);
  }
}
