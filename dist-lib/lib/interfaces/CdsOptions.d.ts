export declare enum RegionValues {
    GLOBAL = "global",
    EUROPE = "europe"
}
export declare enum EnvironmentValues {
    OAT = "oat",
    PROD = "prod"
}
export declare enum SocialProvidersValues {
    FACEBOOK = "facebook",
    TWITTER = "twitter",
    GOOGLE = "google"
}
export declare type SocialProviders = Array<SocialProvidersValues>;
export declare enum WidgetTypeValues {
    MODERN = "modern",
    LEGACY = "legacy"
}
export interface SocialSettings {
    providers: SocialProviders;
    appId: string;
    engageDomain: string;
    widgetType: WidgetTypeValues;
}
export interface CdsOptions {
    siteName: string;
    siteID: string;
    apiKey: string;
    region: RegionValues;
    locale: string;
    ciamClientId: string;
    reCaptchakey: string;
    bundlePath: string;
    environment: EnvironmentValues;
    activityStreams: boolean;
    socialSettings: SocialSettings;
}
