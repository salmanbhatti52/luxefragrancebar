import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { ApiService } from "src/app/api.service";

@Component({
  selector: "app-pdffiles",
  templateUrl: "./pdffiles.page.html",
  styleUrls: ["./pdffiles.page.scss"],
})
export class PdffilesPage implements OnInit {
  loading = true;
  constructor(public api: ApiService, private nav: NavController) {}

  ngOnInit() {
    this.loadpdffiles();
  }

  loadpdffiles() {
    this.api
      .getPosts("wp-admin/admin-ajax.php?action=eg_get_pdffiles")
      .then((res) => {
        console.log("pdf files are: ", res);
        this.api.pdffiles = res;
        this.loading = false;
      })
      .catch((error) => {
        console.log("error for the pdf files is: ", error);
      });
  }

  viewdetails(index) {
    this.nav.navigateForward(["pdfdetails", { index: index }]);
  }
}
