export enum RegionValues {
  GLOBAL = 'global',
  EUROPE = 'europe'
}

export enum EnvironmentValues {
  OAT = 'oat',
  PROD = 'prod'
}

export enum SocialProvidersValues {
  FACEBOOK = 'facebook',
  TWITTER = 'twitter',
  GOOGLE = 'google'
}

export type SocialProviders = Array<SocialProvidersValues>

export enum WidgetTypeValues {
  MODERN = 'modern',
  LEGACY = 'legacy'
}

export interface SocialSettings {
  providers: SocialProviders
  appId: string
  engageDomain: string
  widgetType: WidgetTypeValues
}

export interface CdsOptions {
  siteName: string
  siteID: string
  apiKey: string
  region: RegionValues
  locale: string
  ciamClientId: string
  reCaptchakey: string
  bundlePath: string
  environment: EnvironmentValues
  activityStreams: boolean
  socialSettings: SocialSettings
}

/*
{
"siteName": "FANSTORE-ES",
"siteID": "8738792393209",
"apiKey": "ukl9SJcl1w33S531MtmWo4feYnx5HE1HDPsX1xM1",
"region": "global",
"locale": "es-ES",
"ciamClientId": "j5w2mvepee94thbvv4ckkx32nz6phnwr",
"reCaptchakey": "6LczcaUZAAAAACotUxMR5S4teDmvzHWfgvjeSamm",
"bundlePath": "GIGIGO/cds-prod-fanstore-es-15july2020/resource",
"environment": "prod",
"activityStreams": true,
"socialSettings": {
"providers": [
"facebook",
"twitter"
],
"appId": "hcpkofaadinmlnjhielg",
"engageDomain": "cds-prod-fanstore-es-15july2020",
"widgetType": "modern"
}
}


*/
