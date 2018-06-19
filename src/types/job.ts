export interface IJob {
  platform: 'android' | 'ios';
  username: string;
  experienceName: string;
  id: string;
  experience: {
    sdkVersion: string;
    manifest: any;
  };
  config: {
    releaseChannel: string;
    turtleVersion?: string;
    // ios
    buildType?: string;
    bundleIdentifier?: string;
  };
  credentials: {
    // android
    keystore?: string;
    keystoreAlias?: string;
    keystorePassword?: string;
    // ios
    keyPassword?: string;
    certP12?: string;
    certPassword?: string;
    provisioningProfile?: string;
    password?: string;
    teamId?: string;
  };
  projectDir: string;
}

export interface IAndroidCredentials {
  keystore: string;
  keystoreAlias: string;
  keystorePassword: string;
  keyPassword: string;
}

export interface IJobResult {
  artifactUrl: string;
}
