import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-text-modal',
  templateUrl: './text-modal.component.html',
  styleUrls: ['./text-modal.component.scss']
})
export class TextModalComponent {

  editedText = '';
  constructor(
    public dialogRef: MatDialogRef<TextModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {title: string, placeholder: string, value: string}
  ) {}

  onNoClick(): void {
    this.dialogRef.close('');
  }

  onYesClick(): void {
    this.dialogRef.close(this.data.value);
  }

  clear(): void {
    this.data.value = '';
  }
}
