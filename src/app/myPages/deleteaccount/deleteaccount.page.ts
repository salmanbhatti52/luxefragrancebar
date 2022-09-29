import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-deleteaccount',
  templateUrl: './deleteaccount.page.html',
  styleUrls: ['./deleteaccount.page.scss'],
})
export class DeleteaccountPage implements OnInit {
  Checkboxes = [{ question: 'I concerned about my personal data', isItemChecked: false }, { question: 'I have another account', isItemChecked: false },
  { question: 'I want to remove app from my mobile', isItemChecked: false }, { question: 'I get too many emails', isItemChecked: false }, { question: 'Other', isItemChecked: false }];

  selectquestions = [];
  useremail: any;
  constructor(public location: Location,
    public api: ApiService) {
    this.useremail = localStorage.getItem('user_email')
  }

  ngOnInit() {
  }
  goBack() {
    this.location.back();
  }
  verifyEvent(ev) {
    console.log(ev);
    if (ev.isItemChecked == true) {
      this.selectquestions.push(ev.question)
      console.log('selectquestions aray', this.selectquestions)
    }
    if (ev.isItemChecked == false) {

      const index = this.selectquestions.indexOf(ev.question);
      if (index > -1) {
        this.selectquestions.splice(index, 1); // 2nd parameter means remove one item only
        console.log('job aray', this.selectquestions)
      }

    }
  }

  delete() {
    console.log('adasdsadsadsa', this.selectquestions.length);
    if (this.selectquestions.length == 0) {
      this.api.basicAlert('Choose one option atleast');
    } else {
      this.api.basicAlert('Your request has been sent to admin and your account will be deleted in 24 hours')
    }

  }


}
