import { Component, OnInit, Inject } from '@angular/core';
import { QuestionService } from '../question.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private myService: QuestionService, @Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<DialogComponent>) { }
  qA: any;
  random: number = 0;
  currentQuestion: any;
  tempValue: any;

  currentQA: any;

  category: string = "";
  value: string = "";

  question: string = ""
  answer: string = ""

  isAnswerShowing = false;
  displayAnswerText = "Show Answer"


  ngOnInit(): void {
    this.myService.getQA().subscribe((res: any) => {
      this.getQsAndAs(res.questions);
      this.setContent();
    })
    this.setValues();
    console.log("incoming data: ", this.data)
  }

  getQsAndAs(questionsArray: any) {
    this.qA = questionsArray
    console.log("QAs: ", this.qA);
  }

  setValues() {
    this.category = this.data.category;
    this.value = this.data.value;
  }

  setContent() {
    this.tempValue = Math.floor(parseInt(this.value) / 200);
    this.currentQA = this.qA[0][this.category];
    this.question = this.currentQA[this.tempValue][this.value].question
    this.answer = this.currentQA[this.tempValue][this.value].answer
  }

  showAnswer() {
    if (this.isAnswerShowing) {
      this.isAnswerShowing = !this.isAnswerShowing;
      this.displayAnswerText = "Show Answer"
    } else {
      this.isAnswerShowing = !this.isAnswerShowing;
      this.displayAnswerText = "Hide Answer"
    }
  }

  playerOneCorrect() {
    this.dialogRef.close(1)
  }

  playerTwoCorrect() {
    this.dialogRef.close(2)
  }

}
