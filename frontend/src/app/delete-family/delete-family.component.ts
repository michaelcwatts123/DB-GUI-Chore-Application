import { Component, OnInit } from '@angular/core';
import { FamilyService } from '../../services/family/family.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-family',
  templateUrl: './delete-family.component.html',
  styleUrls: ['./delete-family.component.css']
})
export class DeleteFamilyComponent implements OnInit {

  familyID: number;
  userID: number;
  lastName: string;
  canDeleteBool: boolean;

  constructor(
    private _familyService: FamilyService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.familyID = JSON.parse(window.sessionStorage.getItem('familyID'));
    this.userID = JSON.parse(window.sessionStorage.getItem('userID'));
    this.getUser();
    this.canDeleteBool = false;
  }

  getUser() {
    this._familyService.getUser(this.userID).subscribe(result => {
      this.lastName = result.lastName;
    });
  }

  delete() {
    this._familyService.deleteFamily(this.familyID).subscribe(result => {
      sessionStorage.clear();
      this._router.navigateByUrl('/login');
    });
  }

  canDelete() {
    this.canDeleteBool = true;
  }

}
