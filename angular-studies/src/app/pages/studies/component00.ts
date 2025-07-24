import { Component } from '@angular/core';
import { Component01 } from '../../components/textInterpolation/component01';
import { Component02 } from '../../components/eventBinding/component02';
import { Component03 } from '../../components/propertyBinding/component03';
import { Component05 } from '../../components/ngFor/component05';
import { Component04 } from '../../components/ngIf/component04';
import { Component06 } from '../../components/ngSwitch/component06';
import { Component07 } from '../../components/ngStyle-ngClass/component07';
import { Component08 } from '../../components/controlFlow/component08';
import { Component09 } from '../../components/formsModule/component09';
import { Component10 } from '../../components/reactiveForms/component10';


@Component({
  selector: 'app-component00',
  imports: [Component01, Component02, Component03, Component04, Component05, Component06, Component07, Component08, Component09, Component10],
  templateUrl: './component00.html',
  styleUrl: './component00.css'
})
export class Component00 {

}
