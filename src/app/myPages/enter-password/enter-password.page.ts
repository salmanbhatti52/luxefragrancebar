import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  AlertController,
  LoadingController,
  NavController,
  Platform,
} from "@ionic/angular";
import { Settings } from "src/app/data/settings";
import { QRScanner, QRScannerStatus } from "@ionic-native/qr-scanner/ngx";

@Component({
  selector: "app-enter-password",
  templateUrl: "./enter-password.page.html",
  styleUrls: ["./enter-password.page.scss"],
})
export class EnterPasswordPage implements OnInit {
  array = [];
  nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0];
  count = "1";
  allPoints: any;
  code = "";
  givenPoint: any;
  qrScan: any = "";
  dropdownFlag = false;
  type:any;
  showKeyPad = true;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private settings: Settings,
    private nav: NavController,
    private alert: AlertController,
    private loading: LoadingController,
    private qr: QRScanner,
    public router: Router,
    public platform: Platform
  ) {
    this.route.params.subscribe((res) => {
      console.log("response for points is: ", res);
      this.array = Array(Number(res.points))
        .fill(0)
        .map((val, index) => index + 1);
      console.log("givenPoint is: ", res.points);
      this.givenPoint = res.points;
      this.allPoints = res.allPoints;
      this.type = res.type;
      console.log('Type---',this.type);
    });

    this.platform.backButton.subscribeWithPriority(0, () => {
      document.getElementsByTagName("body")[0].style.opacity = "1";
      this.qrScan.unsubscribe();
    });


    
  }
  custom() {
    console.log("count", this.count);
    if (this.count == "0") {
      console.log("count", this.count);
      this.count = "";
      this.dropdownFlag = true;
    }
  }
  showFocus(){
    console.log("showFocus---");
    this.showKeyPad = false;
  }
  removeFocus(){
    console.log("removeFocus---");

    this.showKeyPad = true;
  }
  remove() {
    console.log("sdsds");
    this.dropdownFlag = false;
    this.showKeyPad = true;
  }
  checking() {
    console.log(this.array.length);
    if (Number(this.count) > this.array.length) {
      alert("You have not enough points");
      this.count = "0";
    }
  }
  ngOnInit() {}

  async clicked(val) {
    // if (Number(this.count) < this.array.length) {
    if (this.code.length < 4 && val != "") {
      this.code = this.code + val;
      console.log("code is: ", this.code);

      if (this.code.length == 4) {
        const loader = await this.loading.create({ spinner: "circles" });
        loader.present();

        console.log("this.count", this.count);
       

        if (this.count > this.givenPoint) {
          var pointsToGive = parseInt(this.count) + 100 - this.givenPoint;
          pointsToGive = pointsToGive + parseInt(this.allPoints);
          console.log("here to give", pointsToGive);
          // return;
          this.http
            .get(
              "https://luxefragrancebar.com/wp-admin/admin-ajax.php?action=eg_add_available_points&ref_id=" +
                btoa(this.settings.customer.id) +
                "&eg_points=" +
                pointsToGive.toString()
            )
            .subscribe(async (resss: any) => {
              console.log("Point are updated: ", resss);
            });
        }

        this.http
          .get(
            "https://luxefragrancebar.com/wp-admin/admin-ajax.php?action=eg_validate_points&ref_id=" +
              btoa(this.settings.customer.id) +
              "&validate_points=" +
              this.count.toString() +
              "&pincode=" +
              this.code
          )
          .subscribe(async (res: any) => {
            console.log("response for validate points is: ", res);
            loader.dismiss();
            if (res.message == "Invalid Pincode") {
              const alert = await this.alert.create({
                header: "Invalid Pincode",
                message: "You entered the invalid pin code.",
                buttons: [
                  {
                    text: "OK",
                    role: "OK",
                  },
                ],
              });
              alert.present();
            } else if (res.message == "Valid points added successfully.") {
              const alert = await this.alert.create({
                header: "Points validated",
                message: "You have successfully validated the points.",
                buttons: [
                  {
                    text: "OK",
                    role: "OK",
                  },
                ],
              });
              alert.present();
            }
            this.nav.navigateBack("member-points");
          });
      }
    }
    // } else {
    //   alert("Invalid number");
    // }
  }

  backspace() {
    if (this.code.length > 0) {
      this.code = this.code.substring(0, this.code.length - 1);
      console.log("spliced");
    }
  }

  async QRScanned() {
    this.qr.prepare().then((status: QRScannerStatus) => {
      if (status.authorized) {
        this.qr.show();
        document.getElementsByTagName("body")[0].style.opacity = "0";

        this.qrScan = this.qr.scan().subscribe(
          (textFound) => {
            console.log("text Found", textFound);
            document.getElementsByTagName("body")[0].style.opacity = "1";
            this.qrScan.unsubscribe();

            console.log(textFound);

            this.presentLoader();
            console.log("selected points", this.count);
            console.log("Available points", this.givenPoint);
            if (this.count > this.givenPoint) {
              var pointsToGive = parseInt(this.count) + 100 - this.givenPoint;
              pointsToGive = pointsToGive + parseInt(this.allPoints);
              console.log("here to give", pointsToGive);
              // if(this.type=='remove'){
              //   pointsToGive = -pointsToGive;
              // }
              // return;
              this.http
                .get(
                  "https://luxefragrancebar.com/wp-admin/admin-ajax.php?action=eg_add_available_points&ref_id=" +
                    btoa(this.settings.customer.id) +
                    "&eg_points=" +
                    pointsToGive.toString()
                )
                .subscribe(async (resss: any) => {
                  console.log("Point are updated: ", resss);
                });
            }
          
            this.http
              .get(
                "https://luxefragrancebar.com/wp-admin/admin-ajax.php?action=eg_validate_points&ref_id=" +
                  btoa(this.settings.customer.id) +
                  "&validate_points=" +
                  this.count.toString() +
                  "&pincode=" +
                  textFound
              )
              .subscribe(async (res: any) => {
                console.log("response for validate points is: ", res);
                this.dismissLoader();

                if (res.message == "Invalid Pincode") {
                  const alert = await this.alert.create({
                    header: "Invalid Pincode",
                    message: "You entered the invalid pin code.",
                    buttons: [
                      {
                        text: "OK",
                        role: "OK",
                      },
                    ],
                  });
                  alert.present();
                } else if (res.message == "Valid points added successfully.") {
                  const alert = await this.alert.create({
                    header: "Points validated",
                    message: "You have successfully validated the points.",
                    buttons: [
                      {
                        text: "OK",
                        role: "OK",
                      },
                    ],
                  });
                  alert.present();
                }
                this.nav.navigateBack("member-points");
              });
          },
          (err) => {
            console.log(JSON.stringify(err));
          }
        );
      } else if (status.denied) {
      } else {
      }
    });
  }

  loader: any;
  async presentLoader() {
    this.loader = await this.loading.create({ spinner: "circles" });
    this.loader.present();
  }
  async dismissLoader() {
    this.loader.dismiss();
  }
}
