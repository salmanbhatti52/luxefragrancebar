import { Component, OnInit } from "@angular/core";
import { NavParams, PopoverController } from "@ionic/angular";
@Component({
  selector: "app-popovers",
  templateUrl: "./popovers.component.html",
  styleUrls: ["./popovers.component.scss"],
})
export class PopoversComponent implements OnInit {
  description: any;
  constructor(
    private popoverController: PopoverController,
    private navParams: NavParams
  ) {}

  ngOnInit() {
    this.description = this.navParams.get("description");
    console.log(this.description);
  }

  close() {
    // code for setting wifi option in apps
    this.popoverController.dismiss();
  }
}
