import { Timestamp } from 'rxjs';

export class WhatsappSupport {

    constructor(
        public instance_name?: string,
        public context?: string,
        public db_engine?: string,
        public debug_info?: string,
        public description?: string,
        public device_iso8601?: Timestamp<string>,
        public e2e?: SupportEncryptionDebugInfo,
        public env?: Array<string>,
        public expire_timestamp?: Timestamp<string>,
        public free_space_data?: number,
        public free_space_logs?: number,
        public free_space_media_incoming?: number,
        public free_space_media_outgoing?: number,
        public lc?: string,
        public lg?: string,
        public multi_connect?: boolean,
        public os_name?: string,
        public os_version?: string,
        public schema?: SupportSchema,
        public socket_conn?: string,
        public version?: string
    ) {}
}

interface SupportEncryptionDebugInfo {

    identity_timestamp?: string;
    registration_id?: Timestamp<string>;
}

interface SupportSchema {

    axolotl: number;
    callback: number;
    cluster: number;
    config: number;
    contact: number;
    jobqueue: number;
    message: number;
}
