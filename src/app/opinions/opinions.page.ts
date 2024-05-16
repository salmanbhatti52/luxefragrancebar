import { ApiService } from "src/app/api.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-opinions",
  templateUrl: "./opinions.page.html",
  styleUrls: ["./opinions.page.scss"],
})
export class OpinionsPage implements OnInit {
  loading = true;
  questionList = [];
  isfaqhidden = true;

  faqisclicked = false;

  ans: any = "";
  ansid: any = "";

  img_src = "assets/imgs/plus.png";

  faqid: any = "0";
  flag: any = "0";

  recentid: any = "";

  check = false;

  loadingimgishidden = false;
  constructor(public api: ApiService) {
    this.loadQuestions();
  }

  ngOnInit() {}
  checkImg(url) {
    const img = new Image();
    img.src = url;
    console.log("asdasads", img.complete);
    return img.complete;
  }
  loadQuestions(event?) {
    this.api
      .getPosts("wp-admin/admin-ajax.php?action=eg_get_public_opinions")
      .then((res: any) => {
        if (event) {
          event.target.complete();
        }
        const values = Object.values(res.data);
        console.log("res ---all questiobns Object", res);
        console.log("res ---all questiobns Array", values);
        this.loading = false;
        this.questionList = [];
        let anwsers = [];
        values.map((questions: any, i) => {
          // [questions.answers].map((ans, j) => {
          //   anwsers.push({
          //     picture: ans.picture,
          //     user_name: ans.user_name,
          //     answer: ans.answer,
          //     flag: this.checkImg(ans.picture),
          //   });
          // });
          this.questionList.push({
            faqs_id: i + 1,
            title: questions.title,
            answers: [questions.answers],
          });
        });

        console.log("set array", this.questionList);
      })
      .catch((error) => {
        this.loading = false;
        console.log("error eg_get_questions is: ", error);
      });
  }
  showAns(faq) {
    console.log(faq.faqs_id);

    this.faqid = faq.faqs_id;

    if (this.faqid == this.flag) {
      this.flag = "0";
      this.faqisclicked = false; //plus btn
    } else {
      this.flag = faq.faqs_id;
      this.faqisclicked = true; //minus btn
    }
  }
  handleImgError(ev: any, item: any, url) {
    let source = ev.srcElement;
    let imgSrc = `https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg`;

    source.src = imgSrc;
  }
  // CHECK IF IMAGE EXISTS
  checkIfImageExists(url) {
    const img = new Image();
    img.src = url;
    console.log(img.complete);
    // if (img.complete) {
    //   console.log(img.complete);
    //   console.log("imag".);
    // } else {
    //   img.onload = () => {
    //     callback(true);
    //   };

    //   img.onerror = () => {
    //     callback(false);
    //   };
    // }
  }

  // USAGE
}
