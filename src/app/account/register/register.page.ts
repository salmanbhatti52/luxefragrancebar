import { Component, OnInit } from "@angular/core";
import { LoadingController, NavController, Platform } from "@ionic/angular";
import { ApiService } from "../../api.service";
import { Data } from "../../data";
import { Settings } from "./../../data/settings";
import { FormBuilder, FormArray, Validators } from "@angular/forms";
// import { OneSignal } from "@ionic-native/onesignal/ngx";
// import OneSignal from 'onesignal-cordova-plugin';
@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage implements OnInit {
  form: any;
  errors: any;
  status: any = {};
  disableSubmit: boolean = false;
  pushForm: any;
  phoneLogingInn: boolean = false;
  userInfo: any;
  phoneVerificationError: any;
  constructor(
    public platform: Platform,
    // private oneSignal: OneSignal,
    public api: ApiService,
    public data: Data,
    public loadingController: LoadingController,
    public settings: Settings,
    public navCtrl: NavController,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      first_name: ["", Validators.required],
      last_name: ["", Validators.required],
      email: ["", Validators.email],
      phone: ["", Validators.required],
      password: ["", Validators.required],
      ref_id: [""],
    });
  }
  ngOnInit() { }
  async onSubmit() {
    this.disableSubmit = true;
    await this.api.postItem("create-user", this.form.value).then(
      (res) => {
        this.status = res;
        if (this.status.errors) {
          this.errors = this.status.errors;
          this.disableSubmit = false;
          for (var key in this.errors) {
            this.errors[key].forEach((item) =>
              item.replace("<strong>ERROR</strong>:", "")
            );
          }
        } else if (this.status.data != undefined) {
          this.settings.customer.id = this.status.ID;
          if (this.platform.is("cordova"))
            this.onesignalpush()
          // this.oneSignal.getIds().then((data: any) => {
          //   this.pushForm.onesignal_user_id = data.userId;
          //   this.pushForm.onesignal_push_token = data.pushToken;
          //   this.api
          //     .postItem("update_user_notification", this.pushForm)
          //     .then((res) => {});
          // });
          this.navCtrl.navigateBack("/tabs/account");
          this.disableSubmit = false;
        } else this.disableSubmit = false;
      },
      (err) => {
        this.disableSubmit = false;
      }
    );
  }
  loginWithPhone() {
    this.phoneLogingInn = true;
    (<any>window).AccountKitPlugin.loginWithPhoneNumber(
      {
        useAccessToken: true,
        defaultCountryCode: "ID",
        facebookNotificationsEnabled: true,
      },
      (data) => {
        (<any>window).AccountKitPlugin.getAccount(
          (info) => this.handlePhoneLogin(info),
          (err) => this.handlePhoneLogin(err)
        );
      }
    );
  }

  handlePhoneLogin(info) {
    if (info.phoneNumber) {
      this.api
        .postItem("phone_number_login", {
          phone: info.phoneNumber,
        })
        .then(
          (res) => {
            this.status = res;
            if (this.status.errors) {
              this.errors = this.status.errors;
            } else if (this.status.data) {
              this.settings.customer.id = this.status.ID;
              if (this.platform.is("cordova")) {
                this.onesignalpush()
                // this.oneSignal.getIds().then((data: any) => {
                //   this.form.onesignal_user_id = data.userId;
                //   this.form.onesignal_push_token = data.pushToken;
                // });
                // this.api
                //   .postItem("update_user_notification", this.form)
                //   .then((res) => {});
              }
              if (
                this.status.allcaps.wc_product_vendors_admin_vendor ||
                this.status.allcaps.dc_vendor ||
                this.status.allcaps.seller ||
                this.status.allcaps.wcfm_vendor
              ) {
                this.settings.vendor = true;
              }
              if (this.status.allcaps.administrator) {
                this.settings.administrator = true;
              }
              this.navCtrl.navigateBack("/tabs/account");
            }
            this.phoneLogingInn = false;
          },
          (err) => {
            this.phoneLogingInn = false;
          }
        );
    } else this.phoneLogingInn = false;
  }
  handlePhoneLoginError(error) {
    this.phoneVerificationError = error;
    this.phoneLogingInn = false;
  }

  registerme() {
    console.log("ref_id is: ", this.form.value.ref_id);
    if (this.form.value.ref_id) {
      this.disableSubmit = true;
      this.api
        .getPosts(
          "wp-admin/admin-ajax.php?action=eg_add_points&ref_id=" +
          this.form.value.ref_id
        )
        .then((res) => {
          console.log("response for the ref_id points add is: ", res);
          this.onSubmit();
        })
        .catch((res) => {
          this.onSubmit();
        });
    } else {
      this.onSubmit();
    }
  }
  onesignalpush() {
    // OneSignal.setAppId('51ba3722-840c-4b3a-97f9-4938a044197b');

    // OneSignal.setNotificationOpenedHandler((jsonData) => {
    //   console.log('setNotificationOpenedHandler: ' + JSON.stringify(jsonData));
    // });

    // OneSignal.promptForPushNotificationsWithUserResponse((accepted) => {
    //   console.log('promptForPushNotificationsWithUserResponse: ' + accepted);
    // });

    // OneSignal.getDeviceState((resp: any) => {
    //   const osUser: any = resp;

    //   console.log('userID==========>', osUser);
    //   this.form.onesignal_user_id = osUser.userId;
    //   this.form.onesignal_push_token = osUser.pushToken;
    //   this.api
    //     .postItem("update_user_notification", this.form)
    //     .then((res) => {
    //       console.log('update_user_notification', res);

    //     });
    //   // console.log('userID==========>', this.uid);
    //   // localStorage.setItem("oneSignaldeviceID", this.uid);

    // });
  }
}
