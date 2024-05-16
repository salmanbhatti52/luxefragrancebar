import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "src/app/api.service";
import { SocialSharing } from "@ionic-native/social-sharing/ngx";
import { ModalController, NavController, Platform } from "@ionic/angular";
import {
  DocumentViewer,
  DocumentViewerOptions,
} from "@ionic-native/document-viewer/ngx";
import { FileOpener } from "@ionic-native/file-opener/ngx";
import { File } from "@ionic-native/file/ngx";
import { FileTransfer } from "@ionic-native/file-transfer/ngx";
@Component({
  selector: 'app-allfilesdetails',
  templateUrl: './allfilesdetails.page.html',
  styleUrls: ['./allfilesdetails.page.scss'],
})
export class AllfilesdetailsPage implements OnInit {
  index: number;
  loading = false;
  fileExt: any;
  filedetails: any;
  data: any;
  constructor(
    private route: ActivatedRoute,
    public api: ApiService,
    private social: SocialSharing,
    private nav: NavController,
    private document: DocumentViewer,
    public platform: Platform,
    private fileOpener: FileOpener,
    private file: File,
    private filetransfer: FileTransfer,
    private router: Router,
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
    // this.route.params.subscribe((res) => {
    //   console.log(res);

    //   this.index = res.index;
    //   this.fileExt = res.fileExt
    //   console.log("index is: ", this.index, this.api.allfiles[this.index]);
    // });

    // this.route.queryParams.subscribe(params => {
    //   if (this.router.getCurrentNavigation().extras.state) {
    //     this.filedetails = this.router.getCurrentNavigation().extras.state.file;
    //     this.fileExt = this.router.getCurrentNavigation().extras.state.fileExt;
    //   }
    //   console.log("File details:", this.filedetails);
    // });
  }

  getFileType(fileSrc: string): string {
    const ext = fileSrc.split('.').pop().toLowerCase();
    if (['png', 'jpg', 'jpeg', 'bmp', 'gif'].includes(ext)) {
      return 'image';
    } else if (['mp4', 'avi', 'mov', 'wmv'].includes(ext)) {
      return 'video';
    }
    return 'file';  // Fallback to generic file type if needed
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

  open() {
    this.loading = true;
    console.log("opening pdf file", this.filedetails.file_src);
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

    const url = encodeURI(this.filedetails.file_src);
    const filename = url.split('/').pop();
    // Change dataDirectory to externalDataDirectory for external storage access
    const path = this.platform.is('android') ? this.file.externalDataDirectory : this.file.dataDirectory;
    const fileTransfer = this.filetransfer.create();

    // const path = this.file.dataDirectory + 'myfile.png';
    this.api.presentLoading();
    fileTransfer.download(url, path + filename, true).then(
      (entry) => {

        console.log('Download complete: ' + entry.toURL());
        let url = entry.toURL();
        let fileExtension = url.split('.').pop().toLowerCase();

        let mimeType = 'image/png';  // Default to image/png
        let isVideo = false;

        // Determine if the file is a video and set the appropriate MIME type
        if (['mp4', 'mov', 'avi', 'wmv'].includes(fileExtension)) {
          isVideo = true;
          if (fileExtension === 'mp4') {
            mimeType = 'video/mp4';
          } else if (fileExtension === 'mov') {
            mimeType = 'video/quicktime';
          } else if (fileExtension === 'avi') {
            mimeType = 'video/x-msvideo';
          } else if (fileExtension === 'wmv') {
            mimeType = 'video/x-ms-wmv';
          }
        }
        // if (this.platform.is('ios')) {
        //   const options: DocumentViewerOptions = { title: 'My PNG File' };
        //   this.document.viewDocument(entry.toURL(), mimeType, options);
        // } else {
        //   this.fileOpener.open(entry.toURL(), mimeType)
        //     .then(() => console.log('File is opened'))
        //     .catch(e => console.error('Error opening file', e));
        // }
        // Platform-specific behavior for opening the file
        this.api.dismissLoading()
        if (this.platform.is('ios')) {
          const options = { title: `My ${isVideo ? 'Video' : 'Image'} File` };
          this.document.viewDocument(url, mimeType, options);
        } else {
          this.fileOpener.open(url, mimeType)
            .then(() => console.log('File is opened'))
            .catch(e => console.error('Error opening file', e));
        }
      },
      (error) => {
        // Handle error
        console.error('Error downloading file: ', error);
      }
    );
  }

  // share() {
  //   var link = this.api.allfiles[this.index].eg_thumbnail;
  //   console.log("link is: ", link);
  //   this.social.share("", "", link, "");
  // }
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
