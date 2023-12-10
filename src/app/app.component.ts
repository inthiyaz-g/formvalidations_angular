import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialog}from '@angular/material/dialog'
import { MyvalidationComponent } from './myvalidation/myvalidation.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private dialog: MatDialog) {}
  title = 'ooo';
  openDialog(): void {
    
    const dialogRef = this.dialog.open(MyvalidationComponent, {
      data: { name: 'John Doe' },
      width:"450px",
      height:"auto"
      
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog closed:', result);
    });
  }
}
