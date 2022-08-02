import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserData } from 'src/app/views/home/home.component'

@Component({
  selector: 'app-window-dialog',
  templateUrl: './window-dialog.component.html',
  styleUrls: ['./window-dialog.component.scss']
})
export class WindowDialogComponent implements OnInit {
  element: UserData;
  isEdit: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: UserData,
    public dialogRef: MatDialogRef<WindowDialogComponent>,
  ) {}

  ngOnInit(): void {
    if (this.data.id !== null){
      this.isEdit = true;
    } else {
      this.isEdit = false;
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
