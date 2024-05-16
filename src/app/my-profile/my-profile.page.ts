import { SocialSharing } from "@ionic-native/social-sharing/ngx";
import {
  AnimationController,
  LoadingController,
  PopoverController,
  ToastController,
} from "@ionic/angular";
import { ApiService } from "src/app/api.service";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Settings } from "src/app/data/settings";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { PopoversComponent } from "../popovers/popovers.component";
@Component({
  selector: "app-my-profile",
  templateUrl: "./my-profile.page.html",
  styleUrls: ["./my-profile.page.scss"],
})
export class MyProfilePage implements OnInit {
  loading = true;
  questionAnswer: any;
  dataToSend: any;
  anwsersDetails: any;
  sendResponseMsg: any;
  loadingCon: any;
  popupHidden: boolean = true;
  popupSelectedVal: any;
  showAnswers = "No";
  constructor(
    public api: ApiService,
    public settings: Settings,
    public toast: ToastController,
    public loadingController: LoadingController,
    private camera: Camera,
    public animationCtrl: AnimationController,
    private popoverController: PopoverController,
    private socialSharing: SocialSharing
  ) {}
  share(toShare) {
    let msg = "";
    console.log("to share", toShare);
    this.api.questionAnswerList.map((list, i) => {
      console.log("list", i);
      console.log("list detaiks", list.title);
      msg +=
        "Question: " +
        list.title +
        "\n Answer  :  " +
        list.description +
        "\n Picture  :  " +
        list.picture_url;
    });

    console.log("to share msg", msg);
    const options = {
      message: `${msg}`,
    };
    this.socialSharing.shareWithOptions(options).then(
      (res) => {
        console.log(res, ":sharing result");
      },
      (err) => {
        console.log(err);
      }
    );
  }
  toggle(events) {
    console.log("events   444", events.detail.checked);
    if (events.detail.checked == false) {
      this.showAnswers = "No";
    } else {
      this.showAnswers = "Yes";
    }
    console.log("this.showAnswers---", this.showAnswers);
  }
  ngOnInit() {
    this.loadQuestions();
  }
  async settingsPopover(ev: any, desc) {
    const popover = await this.popoverController.create({
      component: PopoversComponent,
      event: ev,
      cssClass: "popover_setting",
      componentProps: {
        description: desc,
      },
      translucent: true,
    });
    await popover.present();
    popover.onDidDismiss().then((result) => {
      console.log(result);
    });

    return await popover.present();
    /** Sync event from popover component */
  }
  loadQuestions(event?) {
    this.api.questionList = [];
    this.api.questionAnswerList = [];
    console.log(
      "user id is: ",
      this.settings.customer.id,
      btoa(this.settings.customer.id)
    );
    this.api
      .getPosts("wp-admin/admin-ajax.php?action=eg_get_questions")
      .then((res) => {
        const values = Object.values(res);
        console.log("res", res);
        this.api.questionList = [];
        values.map((questions, i) => {
          this.api.questionList.push({
            question_id: i + 1,
            title: questions.title,
            description: questions.description,
            answer: "",
            picture_url: "",
            picture_base_url: "",
            sort: questions.sort,
          });
        });

        //// for getting answer
        this.api
          .getPosts(
            "wp-admin/admin-ajax.php?action=eg_get_answers&user_id=" +
              this.settings.customer.id
          )
          // .getPosts(
          //   "wp-admin/admin-ajax.php?action=eg_get_answers&user_id=" + 1720
          // )
          .then((res) => {
            this.anwsersDetails = res;
            console.log(
              "this.api.questionList data else",
              this.api.questionList
            );
            console.log("New user answer: ", this.anwsersDetails.status);

            this.anwsersDetails = Object.values(this.anwsersDetails.data);
            console.log(
              "All anwsers after conversion to array: ",
              this.anwsersDetails
            );
            console.log(
              "typeof this.anwsersDetails.data",
              typeof this.anwsersDetails
            );

            this.api.questionAnswerList = this.api.questionList.map((item, i) =>
              Object.assign({}, item, this.anwsersDetails[i])
            );
            console.log(
              "sdsdsdsd",
              this.api.questionAnswerList.sort((a, b) => a.sort - b.sort)
            );
            if (event) {
              event.target.complete();
            }
            this.loading = false;
          })
          .catch((error) => {
            this.api.questionAnswerList = this.api.questionList;
            this.loading = false;
            console.log("error eg_get_answer is: ", error);
          });
      })
      .catch((error) => {
        this.loading = false;
        console.log("error eg_get_questions is: ", error);
      });
  }

  answerQuestion() {
    this.presentLoader("Sending response...");
    console.log("final answers array", this.api.questionList);
    this.dataToSend = [];
    this.api.questionAnswerList.map((questions, i) => {
      this.dataToSend.push({
        eg_questions_id: questions.question_id,
        answer: questions.answer,
        picture: questions.picture_base_url,
      });
    });
    const dataArrayToSend = {
      user_id: this.settings.customer.id,
      questions: this.dataToSend,
      show_answers: "Yes",
    };
    const jsonDataTosend = JSON.stringify(dataArrayToSend);
    console.log("dataToSend answers array", dataArrayToSend);
    console.log("jsonDataTosend", jsonDataTosend);
    this.sendResponse(jsonDataTosend);
  }
  sendResponse(data) {
    this.api
      .postAnwser(data)
      .then((res) => {
        console.log("Success sendResponse is: ", res);
        this.sendResponseMsg = res;
        this.presentToast(this.sendResponseMsg.message);
        this.dismiss();
      })
      .catch((error) => {
        console.log("error sendResponse is: ", error);
        this.dismiss();
      });
  }

  options: CameraOptions;
  selectImage(index, condition) {
    this.hidePopup();
    if (condition == "camera") {
      this.options = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
      };
    } else {
      this.options = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      };
    }

    this.camera.getPicture(this.options).then(
      (imageData) => {
        let base64Image = `data:image/jpeg;base64,${imageData}`;
        this.api.questionAnswerList[index].picture_base_url = base64Image;
        this.api.questionAnswerList[index].picture_url = "";
        console.log("base64Image", base64Image);
        console.log(
          "questionAnswerList with this index" + index,
          this.api.questionAnswerList[index]
        );
      },
      (err) => {
        // Handle error
      }
    );
  }
  async presentToast(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 2000,
    });
    toast.present();
  }
  async presentLoader(message) {
    this.loadingCon = await this.loadingController.create({
      cssClass: "ionloading",
      message,
    });
    await this.loadingCon.present();
  }
  async dismiss() {
    await this.loadingCon.dismiss();
  }
  showPopup(val) {
    this.popupHidden = false;
    console.log(val);
    this.popupSelectedVal = val;
  }

  hidePopup() {
    this.popupHidden = true;
  }
  galerySelected() {
    alert("sdsd");
  }
}
