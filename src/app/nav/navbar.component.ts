import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`
  li > a.active {
    color: #f97924;
  }

  .nav.navbar-nav {
    font-size: 15px;
  }

  #searchForm {
    margin-right: 100px;
  }

  .menu-btn {
    background: #3b4e60;
    color: #fefefe;
    border: 1px solid #2b3e50;
  }

  .menu-btn:hover,
  .menu-btn:focus {
    background: #2b3e50;
  }

  @media screen and (max-width: 1199px) and (min-width: 992px) {
    #searchForm {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 991px) and (min-width: 768px) {
    #searchForm {
      padding: 0;
      margin: 10px 0;
    }

    .search-btn {
      background: #3b4e60;
      color: #fefefe;
      border: 1px solid transparent;
    }

    .search-btn:hover {
      background: #2b3e50;
    }
  }
  `]
})
export class NavBarComponent {
  constructor(public auth: AuthService) {

  }
}
