import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, ModalController } from '@ionic/angular';
import { ApiService } from '../../api.service';
import { Settings } from './../../data/settings';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { LoginPage } from '../login/login.page';

@Component({
    selector: 'app-forgotten',
    templateUrl: './forgotten.page.html',
    styleUrls: ['./forgotten.page.scss'],
})
export class ForgottenPage implements OnInit {
    form: any;
    email: any;
    errors: any;
    status: any = {};
    disableSubmit: boolean = false;
    constructor(public modalCtrl: ModalController, public api: ApiService, public loadingController: LoadingController, public navCtrl: NavController, public settings: Settings, private fb: FormBuilder) {
        this.email = this.fb.group({
            email: ['', Validators.email]
        });
        this.form = this.fb.group({
            otp: ['', Validators.required],
            password: ['', Validators.required],
            email: ['', '']
        });
    }
    ngOnInit() { }
    close() {
        this.modalCtrl.dismiss({
            'loggedIn': false,
        });
    }
    async forgotten() {
        this.disableSubmit = true;
        await this.api.postItem('email-otp', this.email.value).then(res => {
            this.status = res;
            this.form.patchValue({ email: this.email.value.email });
            console.log(this.form.value.email);
            this.disableSubmit = false;
        }, err => {
            this.disableSubmit = false;
        });
    }
    async resetPassword() {
        this.disableSubmit = true;
        await this.api.postItem('reset-user-password', this.form.value).then((res: any) => {
            this.status = res;
            console.log("data after forgotten", res);
            if (res.status == false) {
                this.api.presentToast(res.message)
            } else {
                this.login();
            }

            this.disableSubmit = false;
        }, err => {
            this.status = err;
            this.disableSubmit = false;
        });
    }
    async login() {
        const modal = await this.modalCtrl.create({
            component: LoginPage,
            componentProps: {
                path: "tabs/account",
            },
            swipeToClose: true,
            //presentingElement: this.routerOutlet.nativeEl,
        });
        modal.present();
        const { data } = await modal.onWillDismiss();
    }
}