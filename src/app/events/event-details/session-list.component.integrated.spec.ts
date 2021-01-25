import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { DebugElement, NO_ERRORS_SCHEMA } from "@angular/core";
import { SessionListComponent } from "./session-list.component";
import { AuthService } from "src/app/user/auth.service";
import { VoterService } from "./voter.service";
import { DurationPipe } from "../shared";
//import { CollapsibleWellComponent } from "src/app/common";
//import { UpvoteComponent } from "./upvote.component";
import { By } from "@angular/platform-browser";

describe('SessionListComponent', () => {
  let fixture: ComponentFixture<SessionListComponent>,
      component: SessionListComponent,
      element: HTMLElement,
      debugEl: DebugElement;

  beforeEach(async(() => {
    let mockAuthService = {
      isAuthenticated: () => true,
      currentUser: {userName: 'joe'}
    };
    let mockVoterService = {
      userHasVoted: () => true
    };

    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        SessionListComponent,
        DurationPipe,
        //CollapsibleWellComponent,
        //UpvoteComponent
      ],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: VoterService, useValue: mockVoterService }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = fixture.nativeElement;
  });

  describe('Initial display', () => {
    it('should have the correct session title', () => {
      component.sessions = [
        {
          id: 3,
          name: 'Session 1',
          presenter: 'Joe',
          duration: 1,
          level: 'beginner',
          abstract: 'abstract',
          voters: ['john', 'bob']
        }
      ];
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 4;

      component.ngOnChanges();

      fixture.detectChanges();

      //expect(element.querySelector('[well-title]').textContent).toContain('Session 1');

      /*---------------------------------------------------
      You can choose to use the DebugElement method instead
      of element.querySelector('[well-title]').textContent
      ----------------------------------------------------*/
      //for directives we use By.directive, for css we use By.css

      expect(debugEl.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1');


    });
  });
});
