import { WhatsappSettings } from "../whatsapp-api/whatsapp-settings";
import { WhatsappProfileAbout } from '../whatsapp-api/whatsapp-profile-about';
import { WhatsappProfileBusiness } from '../whatsapp-api/whatsapp-profile-business';

export const mockWhatsappSettings = new WhatsappSettings(
  true, 300, null, 200, "Yes", false, true, 40, 50, { max_concurrent_requests: 6, url: "https://webhookurl.com" }
);
export const mockWhatsappAbout = new WhatsappProfileAbout("Conta Mock");
export const mockWhatsappProfile = new WhatsappProfileBusiness(
  "Rua Tal nº 0 Bairro X Cidade Y", "Conta Mock para Testes", "mock@mock.com.br", "Testes", ["www.site1.com", "www.site2.com"]
);

export const mockWhatsappPhoto = "https://www.ambienteenergia.com.br/wp-content/uploads/2018/10/caixa-logo-x.png";

export const mockWhatsappData = [
  { settings:
    {
      application: mockWhatsappSettings
    }
  },
  { settings:
    {
      profile: {
        about: mockWhatsappAbout
      }
    }
  },
  { settings:
    {
      business: {
        profile: mockWhatsappProfile
      }
    }
  },
  { settings:
    {
      profile: {
        photo: {
          link: mockWhatsappPhoto
        }
      }
    }
  },
];
