import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
// import { OneSignal } from "@ionic-native/onesignal/ngx";
import { NativeStorage } from "@ionic-native/native-storage/ngx";
//import { ScrollingModule } from '@angular/cdk/scrolling/ngx';
//import { DragDropModule } from '@angular/cdk/drag-drop/ngx';
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { SocialSharing } from "@ionic-native/social-sharing/ngx";
import { AppRate } from "@ionic-native/app-rate/ngx";
import { AppMinimize } from "@ionic-native/app-minimize/ngx";
import { EmailComposer } from "@ionic-native/email-composer/ngx";
//import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
//import { CardIO } from '@ionic-native/card-io/ngx';
import { Camera } from "@ionic-native/camera/ngx";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { FormsModule, FormBuilder } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { KeysPipeModule } from "../app/pipes/pipe.module";
import { HttpModule } from "@angular/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
//import { Braintree } from '@ionic-native/braintree/ngx';
import { HomePage } from "./home/home.page";
import { HTTP } from "@ionic-native/http/ngx";
import { Clipboard } from "@ionic-native/clipboard/ngx";
//Uncomment when you use Google Login
import { GooglePlus } from "@ionic-native/google-plus/ngx";
import { Facebook } from "@ionic-native/facebook/ngx";

//vendor
import { ImagePicker } from "@ionic-native/image-picker/ngx";
import { Crop } from "@ionic-native/crop/ngx";
import {
  FileTransfer,
  FileUploadOptions,
  FileTransferObject,
} from "@ionic-native/file-transfer/ngx";
import {
  DocumentViewer,
  DocumentViewerOptions,
} from "@ionic-native/document-viewer/ngx";
//pages
import { FilterPage } from "../app/filter/filter.page";
import { OrderSummaryPage } from "./checkout/order-summary/order-summary.page";
import { FileOpener } from "@ionic-native/file-opener/ngx";
import { File } from "@ionic-native/file/ngx";

import { QRScanner, QRScannerStatus } from "@ionic-native/qr-scanner/ngx";
import { AllfilesdetailsPage } from "./allfilesdetails/allfilesdetails.page";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    FilterPage,
    OrderSummaryPage,
    AllfilesdetailsPage
    //HomePage
  ],
  entryComponents: [
    FilterPage,
    OrderSummaryPage,
    AllfilesdetailsPage
    //HomePage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    KeysPipeModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],

  providers: [
    Camera,
    StatusBar,
    SplashScreen,
    HomePage,
    Clipboard,
    //Braintree,
    GooglePlus,
    Facebook,
    // OneSignal,
    NativeStorage,
    InAppBrowser,
    FormBuilder,
    //CardIO,
    ReactiveFormsModule,
    AppMinimize,
    EmailComposer,
    AppRate,
    ImagePicker,
    Crop,
    FileTransfer,
    SocialSharing,
    DocumentViewer,
    //BarcodeScanner,
    FileOpener,
    File,
    HTTP,
    QRScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
