export class WhatsappSettings {
  constructor(
    public callback_persist?: boolean,
    public max_callback_backoff_delay_ms?: number,
    public media?: ApiSettingsMediaData,
    public callback_backoff_delay_ms?: number,
    public on_call_pager?: string,
    public pass_through?: boolean,
    public sent_status?: boolean,
    public heartbeat_interval?: number,
    public unhealthy_interval?: number,
    public webhooks?: ApiSettingsWebhooks
  ) {}
}

export interface ApiSettingsMediaData {
  auto_download?: string[];
}

export interface ApiSettingsWebhooks {
  max_concurrent_requests?: number;
  url?: string;
}
