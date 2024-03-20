import { Component, OnInit } from "@angular/core";
import { NavController, ToastController } from "@ionic/angular";
import { ApiService } from "src/app/api.service";
import { Settings } from "src/app/data/settings";
@Component({
  selector: "app-copoun-code",
  templateUrl: "./copoun-code.page.html",
  styleUrls: ["./copoun-code.page.scss"],
})
export class CopounCodePage implements OnInit {
  loading = true;
  constructor(
    public api: ApiService,
    private nav: NavController,
    public toast: ToastController,
    public settings: Settings
  ) { }

  ngOnInit() {
    this.loadCoupon();
  }

  loadCoupon() {
    let customer = btoa(this.settings.customer.id);
    this.api
      .getPosts("wp-admin/admin-ajax.php?action=eg_get_couponspromo&ref_id=" + customer)
      .then((res) => {
        console.log("pdf eg_get_couponspromo are: ", res);
        this.api.couponCode = res;
        console.log(
          "pdf this.api.couponCode are: ",
          this.api.couponCode[0].eg_title
        );
        this.loading = false;
      })
      .catch((error) => {
        this.loading = false;
        console.log("error for the pdf files is: ", error);
      });
  }

  viewdetails(index) {
    this.nav.navigateForward(["copoun-details", { index: index }]);
  }
}
