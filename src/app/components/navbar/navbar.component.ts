import { Component, OnInit, ElementRef, HostListener } from "@angular/core";
import Route from "src/app/models/route";
import { routes } from "./routes";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  routes: Route[];
  dropdownClass = {
    show: false,
  };
  buttonClass = {
    active: false,
  };

  constructor(private _el: ElementRef) {}

  ngOnInit() {
    this.routes = routes;
  }

  toggleMenu() {
    this.dropdownClass.show = !this.dropdownClass.show;
    this.buttonClass.active = this.dropdownClass.show ? true : false;
  }

  onRouteClick() {
    this.dropdownClass.show = false;
    this.buttonClass.active = false;
  }

  @HostListener("window:click", ["$event"])
  onOutsideClick(event: Event) {
    event.stopPropagation();
    if (!this._el.nativeElement.contains(event.target)) {
      this.dropdownClass.show = false;
      this.buttonClass.active = false;
    } else {
      return;
    }
  }
}
