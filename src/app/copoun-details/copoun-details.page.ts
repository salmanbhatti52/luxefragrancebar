import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from "src/app/api.service";
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-copoun-details',
  templateUrl: './copoun-details.page.html',
  styleUrls: ['./copoun-details.page.scss'],
})
export class CopounDetailsPage implements OnInit {
  index:any;
  textTocopy : any;
  constructor(public api: ApiService,private route: ActivatedRoute,private clipboard: Clipboard,public toastController: ToastController) { }
  copied = false;
  ngOnInit() {
    this.route.params.subscribe((res) => {
      this.index = res.index;
      console.log("index is: ", this.index, this.api.couponCode[this.index]);
      this.textTocopy = this.api.couponCode[this.index].eg_coupon_code;
    });
  }
  copy(){
    console.log(this.textTocopy);
    this.clipboard.copy(this.textTocopy);
    this.presentToast();
    this.copied = true;
    setInterval(() => {
      this.copied = false;
    }, 3000);
  
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Coupon code copied!.',
      duration: 2000
    });
    toast.present();
  }

}
