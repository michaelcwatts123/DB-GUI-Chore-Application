import { Member } from 'src/domain/models/member';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
export interface State {
  parents: Member[];
  children: Member[];
}

const state = {
  parents: [
    {id: 1, familyId: 1,  firstName: 'John', lastName: 'Doe', username: 'doeman', isParent: true},
    {id: 2, familyId: 1,  firstName: 'Jane', lastName: 'Doe', username: 'doewoman', isParent: true}
  ],
  children: [
    {id: 3, familyId: 1, firstName: 'Jimbo', lastName: 'Doe', username: 'doemango', isParent: false},
    {id: 4, familyId: 1, firstName: 'Janda', lastName: 'Doe', username: 'doewomfan', isParent: false}
  ]
};

@Injectable()
export class MembersService {

  private subject = new BehaviorSubject<State>(state);
  store = this.subject.asObservable();

  constructor() {}

  retrieveMember(memberId: number) {

  }

  addMember(member: Member) {
    const type = member.isParent ? 'parents' : 'children';
    const prevState = this.subject.value;
    this.subject.next({...prevState, [type]: [...prevState[type], member]});
  }

  editMember(member: Member | Child) {
    const type = member.isParent ? 'parents' : 'children';
    const prevState = this.subject.value;
    const memberIndex = prevState[type].findIndex(mem => mem.id === member.id);
    const newState = [
      ...prevState[type].slice(0, memberIndex),
      member,
      ...prevState[type].slice(memberIndex + 1)
    ];
    console.dir(newState);
    this.subject.next({...prevState, [type]: newState });
  }

  groundMember(memberId: number) {

  }

  retrieve<T>(name: string): Observable<T> {
    return this.store.pipe(pluck(name));
  }

}
