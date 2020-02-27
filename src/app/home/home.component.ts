import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { WarningComponent } from './../shared/dialog/warning/WarningComponent';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  navigateToDetails() {
    this.router.navigate(['details'])
  }

  openWarningDialog() {
    this.dialog.open(WarningComponent, { disableClose: true, data: { message: 'This is home' } });
  }

}
