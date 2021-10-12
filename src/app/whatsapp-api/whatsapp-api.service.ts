import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable, forkJoin } from "rxjs";
import { WhatsappSupport } from "./whatsapp-support";
import { WhatsappStats } from "./whatsapp-stats";
import { WhatsappSettings } from "./whatsapp-settings";
import { WhatsappProfileAbout } from "./whatsapp-profile-about";
import { WhatsappProfileBusiness } from "./whatsapp-profile-business";
import { environment } from "src/environments/environment";
import { WhatsappApiMeta } from "./whatsapp-api-meta";

const BASE_URL = environment.apiUrl;

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Accept: "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class WhatsappApiService {
  constructor(
    private http: HttpClient
  ) {}

  private isMultiInstanceSource = new BehaviorSubject(false);
  isMultiInstance$: Observable<
    boolean
  > = this.isMultiInstanceSource.asObservable();

  private waApiDataSource = new BehaviorSubject(null);
  waApiData$: Observable<Object> = this.waApiDataSource.asObservable();

  private supportDataSource = new BehaviorSubject(null);
  supportData$: Observable<
    Array<WhatsappSupport>
  > = this.supportDataSource.asObservable();

  private statsDataSource = new BehaviorSubject(null);
  statsData$: Observable<
    Array<WhatsappStats>
  > = this.statsDataSource.asObservable();

  private statsAggregatedDataSource = new BehaviorSubject(null);
  statsAggregatedData$: Observable<
    Array<WhatsappStats>
  > = this.statsAggregatedDataSource.asObservable();

  private settingsDataSource = new BehaviorSubject(null);
  settingsData$: Observable<
    WhatsappSettings
  > = this.settingsDataSource.asObservable();

  private profileAboutDataSource = new BehaviorSubject(null);
  profileAboutData$: Observable<
    WhatsappProfileAbout
  > = this.profileAboutDataSource.asObservable();

  private profileBusinessDataSource = new BehaviorSubject(null);
  profileBusinessData$: Observable<
    WhatsappProfileBusiness
  > = this.profileBusinessDataSource.asObservable();

  private photoSource = new BehaviorSubject(null);
  photo$: Observable<string> = this.photoSource.asObservable();

  private whatsappApiMetaSource = new BehaviorSubject(null);
  whatsappApiMeta$: Observable<
    WhatsappApiMeta
  > = this.whatsappApiMetaSource.asObservable();

  consultAccount(idConta: number) {
    const waSettingsRequest = this.http.get(
      `${BASE_URL}/contas/settings/${idConta}`
    );
    const waProfileRequest = this.http.get(
      `${BASE_URL}/contas/profile/about/${idConta}`
    );
    const waBusinessRequest = this.http.get(
      `${BASE_URL}/contas/business/profile/${idConta}`
    );
    const waPhotoRequest = this.http.get(
      `${BASE_URL}/contas/profile/photo/${idConta}`
    );
    const waSupportRequest = this.http.get(
      `${BASE_URL}/contas/support/${idConta}`
    );
    const waStatsRequest = this.http.get(`${BASE_URL}/contas/stats/${idConta}`);
    const listParameters = this.http.get(`${BASE_URL}/contas/parametros`);

    return forkJoin([
      waSettingsRequest,
      waProfileRequest,
      waBusinessRequest,
      waPhotoRequest,
      waSupportRequest,
      waStatsRequest,
      listParameters
    ]);
  }

  setWaApiData(apiData: any) {
    this.waApiDataSource.next(apiData);
    this.setSettingsData(apiData[0]);
    this.setProfileAboutData(apiData[1]);
    this.setProfileBusinessData(apiData[2]);
    this.setPhoto(apiData[3]);
    this.setSupportData(apiData[4]);
    this.setStatsData(apiData[5]);
  }

  setSettingsData(newSettingsData) {
    if (
      newSettingsData &&
      newSettingsData.settings &&
      newSettingsData.settings.application
    ) {
      this.settingsDataSource.next(newSettingsData.settings.application);
      this.whatsappApiMetaSource.next(newSettingsData.meta);
    } else {
      console.error("Não há informações de Configurações na API.");
    }
  }

  setProfileAboutData(newProfileAboutData) {
    if (
      newProfileAboutData &&
      newProfileAboutData.settings &&
      newProfileAboutData.settings.profile &&
      newProfileAboutData.settings.profile.about
    ) {
      this.profileAboutDataSource.next(
        newProfileAboutData.settings.profile.about
      );
    } else {
      console.error("Não há informações de Perfil na API.");
    }
  }

  setProfileBusinessData(newProfileBusinessData) {
    if (
      newProfileBusinessData &&
      newProfileBusinessData.settings &&
      newProfileBusinessData.settings.business &&
      newProfileBusinessData.settings.business.profile
    ) {
      this.profileBusinessDataSource.next(
        newProfileBusinessData.settings.business.profile
      );
    } else {
      console.error("Não há informações de Perfil Comercial na API.");
    }
  }

  setPhoto(newPhotoData) {
    if (
      newPhotoData &&
      newPhotoData.settings &&
      newPhotoData.settings.profile &&
      newPhotoData.settings.profile.photo &&
      newPhotoData.settings.profile.photo.link
    ) {
      this.photoSource.next(newPhotoData.settings.profile.photo.link);
    } else {
      console.error("Não há informações de Suporte na API.");
    }
  }

  setSupportData(newSupportData: any) {
    if (!newSupportData || !newSupportData.support) {
      return;
    }

    const supportData = newSupportData.support;

    const isMultiInstance: boolean = this.checkIsMultiInstance(supportData);
    this.isMultiInstanceSource.next(isMultiInstance);

    const supportDataArray = [];
    let instance: WhatsappSupport;

    if (isMultiInstance) {
      Object.keys(supportData).forEach((instanceName: string) => {
        instance = supportData[instanceName];
        instance.instance_name = instanceName;
        supportDataArray.push(instance);
      });
    } else {
      instance = supportData;
      instance["instance_name"] = "single_instance";
      supportDataArray.push(instance);
    }

    this.supportDataSource.next(supportDataArray);
  }

  setStatsData(newStatsData: any) {
    if (!newStatsData || !newStatsData.stats || !newStatsData.stats.app) {
      return;
    }

    const statsData = newStatsData.stats.app;

    let isMultiInstance: boolean;
    this.isMultiInstance$.subscribe(multiInstance => {
      isMultiInstance = multiInstance;
    });
    const statsDataArray = [];
    let instance: WhatsappStats;

    if (isMultiInstance) {
      Object.keys(statsData).forEach((instanceName: string) => {
        instance = statsData[instanceName];
        instance.instance_name = instanceName;
        statsDataArray.push(instance);
      });

      this.aggregateStats(statsDataArray);
    } else {
      instance = statsData;
      instance.instance_name = "single_instance";
      statsDataArray.push(instance);
    }

    this.statsDataSource.next(statsDataArray);
  }

  updateAccountPhoto(newPhoto: File, mimeType: string, accountId: number) {
    return this.http.post(
      `${BASE_URL}/contas/profile/photo/${accountId}`,
      newPhoto
    );
  }

  updateAccountProfileAbout(data: any, accountId: number) {
    return this.http.post(
      `${BASE_URL}/contas/profile/about/${accountId}`,
      data,
      httpOptions
    );
  }

  updateAccountProfileBusiness(data: any, accountId: number) {
    return this.http.post(
      `${BASE_URL}/contas/business/profile/${accountId}`,
      data,
      httpOptions
    );
  }

  updateProfileSettings(data: any, accountId: number) {
    return this.http.post(
      `${BASE_URL}/contas/settings/${accountId}`,
      data,
      httpOptions
    );
  }

  private checkIsMultiInstance(supportData) {
    if (
      supportData &&
      typeof supportData["multi_connect"] !== "undefined" &&
      supportData["multi_connect"] === false
    ) {
      return false;
    }
    return true;
  }

  private aggregateStats(statsDataArray: WhatsappStats[]) {
    const props = [
      "in_message_decoded",
      "in_message_from_server",
      "in_message_persisted",
      "out_message_persisted",
      "out_message_status",
      "media_downloads",
      "media_uploads"
    ];

    const totalObj = {};

    const totalSimpleObj: any = {};

    props.forEach(dataType => {
      totalObj[dataType] = {};
      totalObj[dataType].data = [];

      totalSimpleObj[dataType] = [];

      statsDataArray.forEach((instanceStats: WhatsappStats) => {
        if (
          instanceStats &&
          instanceStats[dataType] &&
          instanceStats[dataType].data
        ) {
          totalObj[dataType].help = instanceStats[dataType].help;
          totalObj[dataType].type = instanceStats[dataType].type;

          instanceStats[dataType].data.forEach(labelObj => {
            totalObj[dataType].data.push({
              labels: labelObj.labels,
              value: labelObj.value
            });
          });
        }
      });

      if (totalObj[dataType].data.length != 0) {
        totalObj[dataType].data.forEach(dataObj => {
          if (dataObj.labels) {
            const label =
              dataObj.labels["type"] ||
              dataObj.labels["result"] ||
              dataObj.labels["status"];
            const flatObj = {};
            flatObj[label] = dataObj.value;
            totalSimpleObj[dataType].push(flatObj);
          }
        });
      } else {
        delete totalObj[dataType];
      }

      totalSimpleObj[dataType] = totalSimpleObj[dataType].reduce(
        (dataTypeObj, flatObj) => {
          for (const label in flatObj) {
            if (flatObj.hasOwnProperty(label)) {
              dataTypeObj[label] = (dataTypeObj[label] || 0) + flatObj[label];
            }
          }
          return dataTypeObj;
        },
        {}
      );
    });

    this.statsAggregatedDataSource.next([totalObj]);
  }

  resetApiData() {
    this.waApiDataSource.next(null);
    this.whatsappApiMetaSource.next(null);
    this.isMultiInstanceSource.next(false);
    this.profileAboutDataSource.next(null);
    this.profileBusinessDataSource.next(null);
    this.settingsDataSource.next(null);
    this.statsDataSource.next(null);
    this.statsAggregatedDataSource.next(null);
    this.photoSource.next(null);
    this.supportDataSource.next(null);
  }
}
