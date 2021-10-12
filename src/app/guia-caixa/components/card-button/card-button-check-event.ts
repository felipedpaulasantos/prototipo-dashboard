import { FormGroup } from '@angular/forms';
import { CardButtonComponent } from './card-button.component';

export interface CardButtonCheckEvent {
   target: CardButtonComponent;
}

export interface CardButtonFormControlData {
   formGroup: FormGroup;
   formControlName: string;
}
