import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OrderSummaryPage } from "./checkout/order-summary/order-summary.page";

const routes: Routes = [
  { path: "", loadChildren: "./tabs/tabs.module#TabsPageModule" },
  { path: "order-summary/:id", component: OrderSummaryPage },
  {
    path: "pdffiles",
    loadChildren: () =>
      import("./myPages/pdffiles/pdffiles.module").then(
        (m) => m.PdffilesPageModule
      ),
  },
  {
    path: "pdfdetails",
    loadChildren: () =>
      import("./myPages/pdfdetails/pdfdetails.module").then(
        (m) => m.PdfdetailsPageModule
      ),
  },
  {
    path: "viewpdf",
    loadChildren: () =>
      import("./myPages/viewpdf/viewpdf.module").then(
        (m) => m.ViewpdfPageModule
      ),
  },
  {
    path: "member-points",
    loadChildren: () =>
      import("./myPages/member-points/member-points.module").then(
        (m) => m.MemberPointsPageModule
      ),
  },
  {
    path: "enter-password",
    loadChildren: () =>
      import("./myPages/enter-password/enter-password.module").then(
        (m) => m.EnterPasswordPageModule
      ),
  },
  {
    path: "copoun-code",
    loadChildren: () =>
      import("./copoun-code/copoun-code.module").then(
        (m) => m.CopounCodePageModule
      ),
  },
  {
    path: "copoun-details",
    loadChildren: () =>
      import("./copoun-details/copoun-details.module").then(
        (m) => m.CopounDetailsPageModule
      ),
  },
  {
    path: "my-profile",
    loadChildren: () =>
      import("./my-profile/my-profile.module").then(
        (m) => m.MyProfilePageModule
      ),
  },
  {
    path: 'opinions',
    loadChildren: () => import('./opinions/opinions.module').then( m => m.OpinionsPageModule)
  },
  {
    path: 'redeem',
    loadChildren: () => import('./redeem/redeem.module').then( m => m.RedeemPageModule)
  },  {
    path: 'deleteaccount',
    loadChildren: () => import('./myPages/deleteaccount/deleteaccount.module').then( m => m.DeleteaccountPageModule)
  },

  //{ path: 'edit-address', loadChildren: './account/edit-address/edit-address.module#EditAddressPageModule' },
  //{ path: 'map', loadChildren: './account/map/map.module#MapPageModule' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
