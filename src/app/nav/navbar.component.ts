import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`
  .nav.navbar-nav {
    font-size: 15px;
  }

  #searchForm {
    margin-right: 50px;
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

}
