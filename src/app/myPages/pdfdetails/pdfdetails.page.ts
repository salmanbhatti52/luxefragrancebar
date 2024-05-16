import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "src/app/api.service";
import { SocialSharing } from "@ionic-native/social-sharing/ngx";
import { NavController, Platform } from "@ionic/angular";
import {
  DocumentViewer,
  DocumentViewerOptions,
} from "@ionic-native/document-viewer/ngx";
import { FileOpener } from "@ionic-native/file-opener/ngx";
import { File } from "@ionic-native/file/ngx";
import { FileTransfer } from "@ionic-native/file-transfer/ngx";
@Component({
  selector: "app-pdfdetails",
  templateUrl: "./pdfdetails.page.html",
  styleUrls: ["./pdfdetails.page.scss"],
})
export class PdfdetailsPage implements OnInit {
  index: number;
  loading = false;
  constructor(
    private route: ActivatedRoute,
    public api: ApiService,
    private social: SocialSharing,
    private nav: NavController,
    private document: DocumentViewer,
    public platform: Platform,
    private fileOpener: FileOpener,
    private file: File,
    private filetransfer: FileTransfer
  ) {}

  ngOnInit() {
    this.route.params.subscribe((res) => {
      this.index = res.index;
      console.log("index is: ", this.index, this.api.pdffiles[this.index]);
    });
  }

  open() {
    this.loading = true;
    console.log("opening pdf file", this.api.pdffiles[this.index].eg_thumbnail);
    let filpath = this.file.applicationDirectory + "www/assets";
    if (this.platform.is("android")) {
      let fakename = Date.now();
      this.file
        .copyFile(
          filpath,
          "sample.pdf",
          this.file.dataDirectory,
          `${fakename}.pdf`
        )
        .then((result) => {
          this.fileOpener.open(result.nativeURL, "application/pdf");
          this.loading = false;
        });
    } else {
      const options: DocumentViewerOptions = {
        title: "My PDF",
      };
      this.document.viewDocument(
        `${filpath}/sample.pdf`,
        "application/pdf",
        options
      );
      this.loading = false;
    }

  }
  downloadOpenPdf() {
    console.log(
      "download opening pdf file",
      this.api.pdffiles[this.index].eg_thumbnail
    );
    let downloadurl = this.api.pdffiles[this.index].eg_thumbnail;
    let path = this.file.dataDirectory;
    const transfer = this.filetransfer.create();
    transfer.download(downloadurl, `${path}myfile.pdf`).then((entry) => {
      let url = entry.toURL();
      if (this.platform.is("ios")) {
        this.document.viewDocument(url, "application/pdf", {});
      } else {
        this.fileOpener.open(url, "application/pdf");
      }
    });
  }

  share() {
    var link = this.api.pdffiles[this.index].eg_thumbnail;
    console.log("link is: ", link);
    this.social.share("", "", link, "");
  }
  figureOutFile(file: string) {
    if (this.platform.is("ios")) {
      const baseUrl = location.href.replace("/index.html", "");
      return baseUrl + `/assets/pdf/${file}`;
    }
    if (this.platform.is("android")) {
      return `file:///android_asset/www/assets/pdf/${file}`;
    }
  }
}
