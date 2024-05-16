import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoadingController, NavController } from "@ionic/angular";
import { SettingPage } from "src/app/account/setting/setting.page";
import { ApiService } from "src/app/api.service";
import { Settings } from "src/app/data/settings";

@Component({
  selector: "app-member-points",
  templateUrl: "./member-points.page.html",
  styleUrls: ["./member-points.page.scss"],
})
export class MemberPointsPage implements OnInit {
  loading = true;
  isLoaded = false;
  userName: any;
  array = [];
  validArray = [];
  points: any;
  allPoints: any;
  validPoints: any;
  availblePoints: any;
  base64_ref: any;
  constructor(
    private nav: NavController,
    private router: Router,
    public api: ApiService,
    private http: HttpClient,
    private settings: Settings,
    public loadingCtrl: LoadingController
  ) {
    this.userName = localStorage.getItem("user_name");
  }

  async ngOnInit() { }

  async ionViewWillEnter() {
    const loading = await this.loadingCtrl.create({
      cssClass: "my-custom-class",
      message: "Please wait...",
    });
    loading.present();

    this.base64_ref = btoa(this.settings.customer.id);
    this.array = [];
    this.validArray = [];

    this.http
      .get(
        "https://luxefragrancebar.com/wp-admin/admin-ajax.php?action=eg_valid_points&ref_id=" +
        btoa(this.settings.customer.id)
      )
      .subscribe(async (validPoints: any) => {
        this.http
          .get(
            "https://luxefragrancebar.com/wp-admin/admin-ajax.php?action=eg_all_points&ref_id=" +
            btoa(this.settings.customer.id)
          )
          .subscribe(async (res: any) => {
            console.log("valid points are: ", validPoints.valid_points);
            console.log("The all points: ", res.all_points);
            if (res.all_points == "") {
              this.allPoints = 0;
            }
            else {
              this.allPoints = res.all_points;
            }

            this.points = res;
            this.loading = false;
            //this.isLoaded = true;

            loading.dismiss();

            this.validArray =
              validPoints.valid_points > 0
                ? Array(Number(validPoints.valid_points)).fill(0)
                : [];
            let remaingin =
              Number(res.all_points) - Number(validPoints.valid_points);
            console.log("remaingin", remaingin);
            for (var i = 0; i < remaingin; i++) {
              let obj = {
                value: i,
              };

              this.array.push(obj);
            }
            this.validPoints =
              Number(res.all_points) - Number(validPoints.valid_points);
            this.availblePoints = validPoints.valid_points;
            /*  this.array = Array(
                  Number(res.all_points) - Number(validPoints.valid_points)
                ).fill(0); */
            console.log(
              "arrays lengths are: ",
              this.validPoints,
              this.availblePoints
            );
          });
      }, err => {
        console.log(err);

        this.loading = false;
        //this.isLoaded = true;

        loading.dismiss();
      });
  }

  enterPassword() {
    console.log("asdsadasdasdasdasdasd", this.array.length);
    this.nav.navigateForward([
      "enter-password",
      { points: this.array.length, allPoints: this.allPoints },
    ]);

  }
  redeem() {
    console.log("asdsadasdasdasdasdasd", this.array.length);
    this.nav.navigateForward([
      "redeem",
      { points: this.array.length, allPoints: this.allPoints, type: 'remove' },
    ]);

  }
  delete() {
    console.log("asdsadasdasdasdasdasd", this.array.length);
    this.nav.navigateForward([
      "redeem",
      { points: this.array.length, allPoints: this.allPoints, type: 'remove' },
    ]);
  }
}
