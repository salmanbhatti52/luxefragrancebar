import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "src/app/api.service";
import { DocumentViewer } from "@ionic-native/document-viewer/ngx";
@Component({
  selector: "app-viewpdf",
  templateUrl: "./viewpdf.page.html",
  styleUrls: ["./viewpdf.page.scss"],
})
export class ViewpdfPage implements OnInit {
  index: any;

  constructor(
    private route: ActivatedRoute,
    public api: ApiService,
    private document: DocumentViewer
  ) {}

  ngOnInit() {
    this.route.params.subscribe((res) => {
      this.index = res.index;
      console.log("index is: ", this.index);
    });
  }
}
