import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DarkModeService } from '../dark-mode.service';
import { PopoverController } from '@ionic/angular';
import { AccessibilityFeaturesComponent } from '../components/accessibility-features/accessibility-features.component';
import { FormGroup } from '@angular/forms';
import { FontSizeService } from '../font-size.service';

@Component({
  selector: 'app-new-patient-registration',
  templateUrl: './new-patient-registration.page.html',
  styleUrls: ['./new-patient-registration.page.scss'],
})
export class NewPatientRegistrationPage implements OnInit {
  title: string = 'New Patient Registration';
  isDarkMode: boolean;
  newPatientRegistrationForm: FormGroup;
  fontSize: number;

  constructor(private popoverController: PopoverController, private darkModeService: DarkModeService, private fontSizeService: FontSizeService, private changeDetectorRef: ChangeDetectorRef) {
    // TODO :: apply formBuilder to form in html file
    // this.newPatientRegistrationForm = this.formBuilder.group({
    //   input1: ['', ValidationService.isRequired],
    //   input2: ['', ValidationService.isRequired],
    //   email: ['', [ValidationService.isRequired, ValidationService.isEmailValid]],
    // });
  }

  ngOnInit() {
    this.isDarkMode = this.darkModeService.get();
    this.fontSize = this.fontSizeService.get();
  }

  async showA11yFeatures(event: any) {
    const popover = await this.popoverController.create({
      component: AccessibilityFeaturesComponent,
      event
    })
    return await popover.present();  
  }

  ngAfterViewChecked() {
    this.isDarkMode = this.darkModeService.get();
    this.fontSize = this.fontSizeService.get();
    this.changeDetectorRef.detectChanges(); // https://stackoverflow.com/questions/34364880/expression-has-changed-after-it-was-checked
  }

}
