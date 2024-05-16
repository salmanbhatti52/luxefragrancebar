import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from "@ionic/angular";
import { ApiService } from "src/app/api.service";
import { Router, NavigationExtras } from '@angular/router';
import { AllfilesdetailsPage } from '../allfilesdetails/allfilesdetails.page';
@Component({
  selector: 'app-allfiles',
  templateUrl: './allfiles.page.html',
  styleUrls: ['./allfiles.page.scss'],
})
export class AllfilesPage implements OnInit {
  loading = true;
  ext: any;
  expandedIndex = -1;
  categories = [];
  constructor(public api: ApiService, private nav: NavController, private router: Router, public modalController: ModalController) { }

  ngOnInit() {
    this.loadpdffiles();
  }

  loadpdffiles() {
    this.api
      .getPosts("wp-admin/admin-ajax.php?action=eg_get_filedirectory")
      .then((res) => {
        console.log("files are: ", res);
        this.api.allfiles = res
        this.loading = false;
      })
      .catch((error) => {
        console.log("error for the pdf files is: ", error);
      });
  }

  // getFileType(url: string): string {
  //   this.ext = url.split('.').pop().toLowerCase();
  //   return (this.ext === 'png' || this.ext === 'jpeg' || this.ext === 'jpg') ? 'image' : 'video';
  // }

  toggleSection(index: number): void {
    this.expandedIndex = this.expandedIndex === index ? -1 : index;
  }
  getFileType(fileSrc: string): string {
    this.ext = fileSrc.split('.').pop().toLowerCase();
    if (['png', 'jpg', 'jpeg', 'bmp', 'gif'].includes(this.ext)) {
      return 'image';
    } else if (['mp4', 'avi', 'mov', 'wmv'].includes(this.ext)) {
      return 'video';
    }
    return 'file';
  }

  getVideoThumbnail(videoUrl: string): string {
    // If you have a naming convention or a path for thumbnails
    return videoUrl.replace('.mp4', '.jpg'); // Example assumes thumbnail has same name as video but with .jpg extension
  }


  // viewdetails(item) {
  //   // this.nav.navigateForward(["allfilesdetails", { val: item, fileExt: this.ext }]);
  //   let navigationExtras: NavigationExtras = {
  //     state: {
  //       file: item,
  //       fileExt: this.ext // This assumes your file extension is at the end after a dot.
  //     }
  //   };
  //   this.router.navigate(['allfilesdetails'], navigationExtras);
  // }
  async viewdetails(file) {
    const modal = await this.modalController.create({
      component: AllfilesdetailsPage,
      cssClass: 'my-custom-popup',
      componentProps: {
        data: file
      }
    });

    return await modal.present();
  }
}
