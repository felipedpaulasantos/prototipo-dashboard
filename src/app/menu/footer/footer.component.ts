import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WhatsappApiService } from 'src/app/whatsapp-api/whatsapp-api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {

  constructor(
    public whatsappService: WhatsappApiService
  ) { }

  appVersion = environment.version;

  ngOnInit() {
  }

}
