import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


interface WarningDialogData {
  message: string;
}

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: WarningDialogData,
    private dialogRef: MatDialogRef<WarningComponent>
  ) { }
  ngOnInit(): void {
  }
  onClose() {
    this.dialogRef.close();
  }
}
