import { Component, OnInit, Input } from '@angular/core';
import {User} from '../model/user';

@Component({
  selector: 'app-vegans',
  templateUrl: './vegans.component.html',
  styleUrls: ['./vegans.component.css']
})
export class VegansComponent implements OnInit {
  @Input() vegan: User;

  title = 'Welcome - Get Ready To Eat Fresh and Healthy Food';

  constructor() { }

  ngOnInit() {
  }

}
