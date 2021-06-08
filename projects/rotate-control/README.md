# rotate-control

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.14.

## Description

This Package is fully supported with angular's various version and written in angular. This provide simple drag UI for change angle. Package is configurable with multiple directives and support two way bindind.

## Preview of control

![Preview of control](https://raw.githubusercontent.com/contact2mayurkukadiya/Rotate-Control/master/assets/preview.PNG)

## [Live Demo Here](https://contact2mayurkukadiya.github.io/Rotate-Control/)

## How to Use Package

Import `RotateControlModule` into your `app.module.ts` like Below :
```javascript
import { RotateControlModule } from 'rotate-control';
.
.
@NgModule({
    imports: [
        ...
        RotateControlModule
    ]
});
```
>In Your `HTML Template` file of angular, Just Use `rotate-control` selecter like below : 

```html
<rotate-control [(angle)]="angle"></rotate-control>
```


## Configuration Options

Option | Purpose
------------ | -------------
angle | input/output value binder. used for two way binding like `ngModel`
radius | radius of circle of rotate-control (control's Size). Value should be in between 15 - 50 (in px). Default Value: 50
borderColor | `border-color` property of control. You can change UI's border color by this property (hex code is supported). Default value: "#000"
borderWidth | set border width in UI. value should be in between 1 - 10 (in Px). Default Value : 1
valueContainerClass | External class that can change UI of control's value preview. default is ""


## Events

Event | Purpose
------|---------
angleChange | Fire and return angle value in `$event` when drag pin in control.
onAngleChangeEnd | Fire and return angle value in `$event` when drag end and mouse up event of pin in control.

## Examples



```html
<rotate-control [angle]="angle" (angleChange)="angleChange($event)"></rotate-control>
```

you can combine above both with one Directive like below : 

```html
<rotate-control [(angle)]="angle"></rotate-control>
```

in above merged directive, `angle` variable will be automatic update on value changes.

> Fully Functional Control look like this : 

```html
<rotate-control [(angle)]="angle" radius="30" borderColor="#ff0000" borderWidth="2" valueContainerClass="preview" (onAngleChangeEnd)="afterAngleChange($event)"></rotate-control>
```

## Help
Each and every things that on a internet is written and develop by someone with lot's of efforts and time. You can empower them to do more and best work for others who can freely use that by Buying them a coffee.

[![Buy me a Coffee][1]][2]

[1]:  https://raw.githubusercontent.com/contact2mayurkukadiya/Rotate-Control/master/assets/bmc-new-logo.webp
[2]:  https://www.buymeacoffee.com/mayurKukadiya
## Further help

To get more help on the this Control. Contact me on this email [contact2mayurkukadiya@gmail.com](mailto:contact2mayurkukadiya@gmail.com)
