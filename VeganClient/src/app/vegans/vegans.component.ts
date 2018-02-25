import { Component, OnInit, Input } from '@angular/core';
import {User} from '../model/user';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-vegans',
  templateUrl: './vegans.component.html',
  styleUrls: ['./vegans.component.css']
})
export class VegansComponent implements OnInit {
  @Input() vegan: User;

  veganForm: FormGroup;
  title = 'Welcome - Get Ready To Eat Fresh and Healthy Food';

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.veganForm = this.fb.group({
      firstName: '',
      lastname: '',
      emailAddress: '',
      city: '',
      state: ''
    });
  }
  onSumbit() {
    this.vegan = this.savingVegan();
  }
  savingVegan(): User {

    const formModel = this.veganForm.value;

    const saveVegan: User = {
      _id: this.vegan._id,
      firstName: formModel.firstName as string,
      lastName: formModel.lastname as string,
      emailAddress: formModel.emailAddress as string,
      city: formModel.city as string,
      state: formModel.state as string
    };

    return saveVegan;
  }
  ngOnInit() {
  }

}
