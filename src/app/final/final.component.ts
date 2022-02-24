import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public result: any) { }


  ngOnInit(): void {
    console.log("incoming data: ", this.result)
  }

  restartApp() {
    window.location.reload()
  }

}
