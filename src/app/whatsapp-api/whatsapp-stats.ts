export class WhatsappStats {

    constructor(

        public instance_name?: string,
        public callback_queue_size?: WhatsappStatsItem,
        public callback_requests_duration_ms_count?: WhatsappStatsItem,
        public callback_requests_duration_ms_sum?: WhatsappStatsItem,
        public db_request_duration_us_count?: WhatsappStatsItem,
        public db_request_duration_us_sum?: WhatsappStatsItem,
        public endpoint_requests?: WhatsappStatsItem,
        public endpoint_requests_duration_ms_count?: WhatsappStatsItem,
        public endpoint_requests_duration_ms_sum?: WhatsappStatsItem,
        public in_message_decoded?: WhatsappStatsItem,
        public in_message_from_server?: WhatsappStatsItem,
        public in_message_persisted?: WhatsappStatsItem,
        public in_messages_pending_processing?: WhatsappStatsItem,
        public internal_server_conn_duration_ms_count?: WhatsappStatsItem,
        public internal_server_requests_duration_ms_sum?: WhatsappStatsItem,
        public media_downloads?: WhatsappStatsItem,
        public media_uploads?: WhatsappStatsItem,
        public out_message_persisted?: WhatsappStatsItem,
        public out_message_sent_duration_ms_count?: WhatsappStatsItem,
        public out_message_sent_duration_ms_sum?: WhatsappStatsItem,
        public out_message_status?: WhatsappStatsItem,
        public pending_callbacks?: WhatsappStatsItem,
        public pending_messages?: WhatsappStatsItem
    ) {}

}

export interface WhatsappStatsItem {

    data?: WhatsappStatsItemData[];
    help?: string;
    type?: string;
}

export interface WhatsappStatsItemData {

    value: number;
    labels?: WhatsappStatsItemLabels;
}

export interface WhatsappStatsItemLabels {

    result?: string;
    type?: string;
    db?: string;
    request?: string;
    method?: string;
    operation?: string;
    status?: string;
}
