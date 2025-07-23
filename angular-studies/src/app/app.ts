import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Component01 } from './textInterpolation/component01';
import { Component02 } from './eventBinding/component02';
import { Component03 } from './propertyBinding/component03';
import { Component04 } from './ngIf/component04';
import { Component05 } from './ngFor/component05';
import { Component06 } from './ngSwitch/component06';
import { Component07 } from './ngStyle-ngClass/component07';
import { Component08 } from './controlFlow/component08';
import { Component09 } from "./formsModule/component09";
import { Component10 } from "./reactiveForms/component10";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Component01, Component02, Component03, Component04, Component05, Component06, Component07, Component08, Component09, Component10],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-studies');
}
