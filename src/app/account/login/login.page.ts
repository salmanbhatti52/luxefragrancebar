import { Component, OnInit, ViewChild } from "@angular/core";
import {
  NavParams,
  LoadingController,
  NavController,
  Platform,
  ModalController,
  IonSlides,
  ToastController,
} from "@ionic/angular";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "../../api.service";
import { Settings } from "./../../data/settings";
import { FormBuilder, Validators } from "@angular/forms";
import { OneSignal } from "@ionic-native/onesignal/ngx";
import { GooglePlus } from "@ionic-native/google-plus/ngx";
import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook/ngx";
import { ForgottenPage } from "./../forgotten/forgotten.page";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  @ViewChild("mySlider", { static: false }) slides: IonSlides;
  slideOpts = { autoplay: false, loop: false, lazy: true };
  icons: any = new Array(60);
  segment: any = "login";
  form: any;
  formRegister: any;
  formSMS: any;
  loginTab: boolean = true;
  loginError= false;
  path: any = "account";
  errors: any;
  errorsRegister: any;
  status: any = {};
  disableSubmit: boolean = false;
  pushForm: any = {};
  googleStatus: any = {};
  faceBookStatus: any = {};
  googleLogingInn: boolean = false;
  facebookLogingInn: boolean = false;
  phoneLogingInn: boolean = false;
  userInfo: any;
  phoneVerificationError: any;
  loading: any;
  constructor(
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public platform: Platform,
    private oneSignal: OneSignal,
    public api: ApiService,
    public settings: Settings,
    public loadingController: LoadingController,
    public router: Router,
    public navCtrl: NavController,
    private fb: FormBuilder,
    private googlePlus: GooglePlus,
    private facebook: Facebook,
    public toastController: ToastController
  ) {
    this.form = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
    this.formRegister = this.fb.group({
      first_name: ["", Validators.required],
      last_name: ["", Validators.required],
      email: ["", Validators.email],
      phone: ["", Validators.required],
      password: ["", Validators.required],
      ref_id: [""],
    });
    this.formSMS = this.fb.group({
      country_code: ["+91", Validators.required],
      phone: ["", Validators.required],
      sms: ["", Validators.required],
    });
  }
  close(status) {
    this.modalCtrl.dismiss({
      loggedIn: status,
    });
  }
  ngOnInit() {
    this.path = this.navParams.data.path;
  }
  async onSubmit() {
    this.disableSubmit = true;
    this.presentLoading();
    await this.api.postItem("login", this.form.value).then(
      (res) => {
        this.status = res;
        console.log("response from login api",res);
        console.log("loading dismisssess",this.dismissLoading());
        if (this.status.errors) {
          console.log("Error is coming");
          this.loginError = true;
          this.errors = this.status.errors;
          for (var key in this.errors) {
            this.errors[key].forEach((item, index) => {
              this.errors[key][index] = this.errors[key][index].replace(
                "<strong>ERROR</strong>:",
                ""
              );
              this.errors[key][index] = this.errors[key][index].replace(
                "/a>",
                "/span>"
              );
              this.errors[key][index] = this.errors[key][index].replace(
                "<a",
                "<span"
              );
            });
          }
      
        } else if (this.status.data) {
           localStorage.setItem("user_name", this.status.data.display_name);
          this.settings.customer.id = this.status.ID;
          if (this.platform.is("cordova")) {
            this.oneSignal.getIds().then((data: any) => {
              this.form.onesignal_user_id = data.userId;
              this.form.onesignal_push_token = data.pushToken;
              this.api
                .postItem("update_user_notification", this.form)
                .then((res) => {});
            });
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
          this.close(true);
        }
        
        this.disableSubmit = false;
      },
      (err) => {
        this.disableSubmit = false;
      }
    );
  }
  async forgotton() {
    const modal = await this.modalCtrl.create({
      component: ForgottenPage,
      componentProps: {
        path: "tabs/account",
      },
      swipeToClose: true,
      //presentingElement: this.routerOutlet.nativeEl,
    });
    modal.present();
    const { data } = await modal.onWillDismiss();
    //this.navCtrl.navigateForward('/app/tabs/account/login/forgotten');
  }
  googleLogin() {
    this.googleLogingInn = true;
    this.presentLoading();
    this.googlePlus
      .login({})
      .then((res) => {
        console.log("response from google", res);
        this.googleStatus = res;
        this.api
          .postItem("google_login", {
            access_token: this.googleStatus.userId,
            email: this.googleStatus.email,
            first_name: this.googleStatus.givenName,
            last_name: this.googleStatus.familyName,
            display_name: this.googleStatus.displayName,
            image: this.googleStatus.imageUrl,
          })
          .then(
            (res) => {
              this.status = res;
              console.log("response from api", res);
              if (this.status.errors) {
                this.errors = this.status.errors;
              } else if (this.status.data) {
                this.settings.customer.id = this.status.ID;
                if (this.platform.is("cordova")) {
                  this.oneSignal.getIds().then((data: any) => {
                    this.form.onesignal_user_id = data.userId;
                    this.form.onesignal_push_token = data.pushToken;
                  });
                  this.api
                    .postItem("update_user_notification", this.form)
                    .then((res) => {});
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
                this.close(true);
              }
              this.googleLogingInn = false;
              this.dismissLoading();
            },
            (err) => {
              this.googleLogingInn = false;
              this.dismissLoading();
            }
          );
        this.googleLogingInn = false;
      })
      .catch((err) => {
        this.googleStatus = err;
        this.googleLogingInn = false;
        console.log("response error google", err);
        this.dismissLoading();
      });
  }
  facebookLogin() {
    this.facebookLogingInn = true;
    console.log("starting loading for login with facebook");
    this.facebook
      .login(["public_profile", "email"])
      .then((res: FacebookLoginResponse) => {
        console.log("Response from facebook ", res);
        this.faceBookStatus = res;
        this.presentLoading();
        this.api
          .postItem("facebook_login", {
            access_token: this.faceBookStatus.authResponse.accessToken,
          })
          .then(
            (res) => {
              this.status = res;
              if (this.status.errors) {
                this.errors = this.status.errors;
              } else if (this.status.data) {
                this.settings.customer.id = this.status.ID;
                if (this.platform.is("cordova")) {
                  this.oneSignal.getIds().then((data: any) => {
                    this.form.onesignal_user_id = data.userId;
                    this.form.onesignal_push_token = data.pushToken;
                  });
                  this.api
                    .postItem("update_user_notification", this.form)
                    .then((res) => {});
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
                this.close(true);
              }
              this.facebookLogingInn = false;
              this.dismissLoading();
            },
            (err) => {
              this.facebookLogingInn = false;
              this.dismissLoading();
            }
          );
        this.facebookLogingInn = false;
      })
      .catch((e) => {
        this.faceBookStatus = e;
        console.log(
          "starting loading for login with facebook Error",
          this.faceBookStatus
        );
        this.presentToast("Something went wrong");
        this.facebookLogingInn = false;
        this.dismissLoading();
      });
  }
  loginWithPhone() {
    this.phoneLogingInn = true;
    (<any>window).AccountKitPlugin.loginWithPhoneNumber(
      {
        useAccessToken: true,
        defaultCountryCode: "IN",
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
                this.oneSignal.getIds().then((data: any) => {
                  this.form.onesignal_user_id = data.userId;
                  this.form.onesignal_push_token = data.pushToken;
                });
                this.api
                  .postItem("update_user_notification", this.form)
                  .then((res) => {});
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
              this.close(true);
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
  scrollToTop() {
    this.slides.slideTo(1);
  }
  async onRegister() {
    this.disableSubmit = true;
    this.api.presentLoading();
    await this.api.postItem("create-user", this.formRegister.value).then(
      (res) => {
        this.status = res;
        if (this.status.errors) {
          this.errorsRegister = this.status.errors;
          this.disableSubmit = false;
          for (var key in this.errors) {
            this.errorsRegister[key].forEach((item) =>
              item.replace("<strong>ERROR</strong>:", "")
            );
          }
        } else if (this.status.data != undefined) {
          this.settings.customer.id = this.status.ID;
          if (this.platform.is("cordova"))
            this.oneSignal.getIds().then((data: any) => {
              this.pushForm.onesignal_user_id = data.userId;
              this.pushForm.onesignal_push_token = data.pushToken;
              this.api
                .postItem("update_user_notification", this.pushForm)
                .then((res) => {});
            });
          this.close(true);
          this.disableSubmit = false;
          this.api.dismissLoading();
        } else this.disableSubmit = false;
      },
      (err) => {
        this.disableSubmit = false;
        this.api.dismissLoading();

      }
    );
  }
  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: "Please wait...",
      
    });
    this.loading.present();
  }
  dismissLoading() {
    if (this.loading) {
      this.loading.dismiss();
    }
  }
  segmentChanged(event) {
    this.segment = event.detail.value;
  }

  registerme() {
    console.log("ref_id is: ", this.formRegister.value.ref_id);
      this.api.presentLoading();
      this.disableSubmit = true;
      this.api
        .getPosts(
          "wp-admin/admin-ajax.php?action=eg_add_points&ref_id=" +
            this.formRegister.value.ref_id
        )
        .then((res) => {
          console.log("response for the ref_id points add is: ", res);
          this.api.dismissLoading();
          this.onRegister();
        })
        .catch((res) => {
          this.api.dismissLoading();
          this.onRegister();
        });
    // } else {
    //   this.onSubmit();
    // }
  }
  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
    });
    toast.present();
  }
}
