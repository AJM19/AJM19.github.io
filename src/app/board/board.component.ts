import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { FinalComponent } from '../final/final.component';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  qA: any;
  categories: any;
  points: any;
  correctPlayer: any;
  player1Score = 0;
  player2Score = 0;

  currentButton: any;

  totalBoxesSelected = 0;


  constructor(private myService: QuestionService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.myService.getQA().subscribe((res: any) => {
      this.getCategories(res.categories)
      this.getPoints(res.points)
    })
  }
  getCategories(categoriesArray: any) {
    this.categories = categoriesArray
    console.log("Categories: ", this.categories);
  }
  getPoints(pointsArray: any) {
    this.points = pointsArray
    console.log("Points: ", this.points);
  }

  openSportsDialog(value: any) {
    this.totalBoxesSelected = this.totalBoxesSelected + 1;
    console.log("current button: ", this.currentButton);
    console.log("Sports Clicked");
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { "value": value, "category": "Sports" }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.correctPlayer = result;
      console.log(`Correct Player: Player ${this.correctPlayer}`);
      this.evaluateScore(this.correctPlayer, value);
      this.currentButton = document.getElementById(`${value}_Sports`);
      this.currentButton.className = "mat-card mat-focus-indicator pointsBoxes disabled";
    });

  }
  openHistoryDialog(value: any) {
    this.totalBoxesSelected = this.totalBoxesSelected + 1;
    console.log("History Clicked");
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { "value": value, "category": "History" }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.correctPlayer = result;
      console.log(`Correct Player: Player ${this.correctPlayer}`);
      this.evaluateScore(this.correctPlayer, value);
      this.currentButton = document.getElementById(`${value}_History`);
      this.currentButton.className = "mat-card mat-focus-indicator pointsBoxes disabled";
    });
  }
  openPopCultureDialog(value: any) {
    this.totalBoxesSelected = this.totalBoxesSelected + 1;
    console.log("Pop-Culture Clicked");
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { "value": value, "category": "PopCulture" }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.correctPlayer = result;
      console.log(`Correct Player: Player ${this.correctPlayer}`);
      this.evaluateScore(this.correctPlayer, value);
      this.currentButton = document.getElementById(`${value}_PopCulture`);
      this.currentButton.className = "mat-card mat-focus-indicator pointsBoxes disabled";
    });
  }
  openFoodDialog(value: any) {
    this.totalBoxesSelected = this.totalBoxesSelected + 1;
    console.log("Food Clicked");
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { "value": value, "category": "Food" }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.correctPlayer = result;
      console.log(`Correct Player: Player ${this.correctPlayer}`);
      this.evaluateScore(this.correctPlayer, value);
      this.currentButton = document.getElementById(`${value}_Food`);
      this.currentButton.className = "mat-card mat-focus-indicator pointsBoxes disabled";
    });
  }
  openScienceDialog(value: any) {
    this.totalBoxesSelected = this.totalBoxesSelected + 1;
    console.log("Science Clicked");
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { "value": value, "category": "Science" }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.correctPlayer = result;
      console.log(`Correct Player: Player ${this.correctPlayer}`);
      this.evaluateScore(this.correctPlayer, value);
      this.currentButton = document.getElementById(`${value}_Science`);
      this.currentButton.className = "mat-card mat-focus-indicator pointsBoxes disabled";
    });

  }

  evaluateScore(player: number, value: any) {
    if (player === 1) {
      this.player1Score += parseInt(value);
    } else if (player === 2) {
      this.player2Score += parseInt(value);
    }

    if (this.totalBoxesSelected === 25) {
      console.log("GAME FINISHED");
      let winner = (this.player1Score >= this.player2Score) ? (this.player1Score == this.player2Score) ? "Tie" : "Player1" : "Player2";
      const dialogRef = this.dialog.open(FinalComponent, {
        data: { "winner": winner }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog Closed: ${result}`);
      });
    }
  }
}
