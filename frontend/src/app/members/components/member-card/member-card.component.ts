import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Child } from 'src/domain/models/child';
import { Member } from 'src/domain/models/member';
import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-member-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./member-card.component.css'],
  template: `
    <div class="card">
      <div class="card-header d-flex justify-content-between align-items-center">
        <span>
          <h3>{{ member.firstName + " " + member.lastName }}</h3>
          <div *ngIf="member.isGrounded" class="badge badge-warning p-2">Grounded</div>
        </span>
        <button (click)="deleteMember()" class="faster-animated btn btn-warning"><fa-icon [icon]="faTimes"></fa-icon></button>
      </div>
      <div class="card-body">
        <div class="d-flex justify-content-around">
          <div class="d-flex flex-column align-items-center">
            <div class="h4">Rating</div>
            <div id="rating-container">
              <div *ngIf="member.rating === null; else stars">
                <h5>None</h5>
              </div>
              <ng-template #stars>
                <app-rating [numStars]="member.rating" id="rating" [ngClass]="{'opaque' : member.rating === null}"></app-rating>
              </ng-template>
            </div>
          </div>
           <div class="d-flex flex-column align-items-center" (click)="viewTasks()" id="tasks">
            <div class="h4">Tasks</div>
            <div class="h6">{{ member.tasks }}</div>
          </div>
        </div>
      </div>
      <div class="card-footer d-flex justify-content-around">
        <button class="faster-animated btn btn-primary" (click)="editMember()">Edit</button>
        <button [ngClass]="member.isGrounded ? 'faster-animated btn btn-success' : 'faster-animated btn btn-warning'"
          (click)="toggleGround()">
          {{ member.isGrounded ? "Unground" : "Ground" }}
        </button>
      </div>
    </div>`
})
export class MemberCardComponent {
  faTimes = faTimes;
  @Input()
  member: Child;

  @Output()
  edit = new EventEmitter<Child>();

  @Output()
  ground = new EventEmitter<Child>();

  @Output()
  tasks = new EventEmitter<number>();

  @Output()
  delete = new EventEmitter<Child>();

  editMember() {
    this.edit.emit(this.member);
  }

  toggleGround() {
    this.ground.emit(this.member);
  }

  viewTasks() {
    this.tasks.emit(this.member.userID);
  }

  deleteMember() {
    this.delete.emit(this.member);
  }
}
