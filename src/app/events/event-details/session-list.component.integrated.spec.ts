import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { SessionListComponent } from "./session-list.component";
import { AuthService } from "src/app/user/auth.service";
import { VoterService } from "./voter.service";
//import Issession & By later when you need them

describe('SessionListComponent', () => {
  let fixture: ComponentFixture<SessionListComponent>,
      component: SessionListComponent,
      element: HTMLElement,
      debugEl: DebugElement;

  beforeEach(async(() => {
    let mockAuthService = {};
    let mockVoterService = {};

    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        SessionListComponent
      ],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: VoterService, useValue: mockVoterService }
      ],
      schemas: []
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = fixture.nativeElement;
  });
});
