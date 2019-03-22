/**
 * @providesModule react-native-device-info
 */
import { Platform, NativeModules, Dimensions } from 'react-native';

let RNDeviceInfo = NativeModules.RNDeviceInfo;

if (!RNDeviceInfo && Platform.OS === 'web') {
  RNDeviceInfo = require('./web');
}

const devicesWithNotch = {
  'apple iphone x': true,
  'apple iphone xs': true,
  'apple iphone xs max': true,
  'apple iphone xr': true,
  'asus zenfone 5': true,
  'asus zenfone 5z': true,
  'google pixel 3 xl': true,
  'Huawei p20': true,
  'Huawei p20 plus': true,
  'Huawei p20 lite': true,
  'Huawei ane-lx1': true,
  'Huawei honor 10': true,
  'Huawei nova 3': true,
  'Huawei nova 3i': true,
  'leagoo s9': true,
  'lg g7': true,
  'lg g7 thinq': true,
  'lg g7+ thinq': true,
  'lg lm-q910': true,
  'lg lm-q710': true,
  'lg lm-q405': true,
  'nokia 6.1 plus': true,
  'oneplus 6': true,
  'oneplus a6003': true,
  'oneplus a6000': true,
  'oneplus oneplus a6003': true,
  'oneplus oneplus a6013': true,
  'oneplus oneplus a6000': true,
  'oppo r15': true,
  'oppo r15 pro': true,
  'oppo f7': true,
  'oukitel u18': true,
  'sharp aquos s3': true,
  'vivo v9': true,
  'vivo x21': true,
  'vivo x21 ud': true,
  'xiaomi mi 8': true,
  'xiaomi mi 8 explorer edition': true,
  'xiaomi mi 8 se': true,
  'xiaomi mi 8 ud': true,
  'xiaomi mi8lite': true,
  'xiaomi poco f1': true,
  'xiaomi pocophone f1': true,
  'xiaomi redmi 6 pro': true,
};

const { brand, model } = RNDeviceInfo;

export default {
  getUniqueID: function() {
    return RNDeviceInfo.uniqueId;
  },
  getInstanceID: function() {
    return RNDeviceInfo.instanceId;
  },
  getSerialNumber: function() {
    return RNDeviceInfo.serialNumber;
  },
  getIPAddress: function() {
    return RNDeviceInfo.getIpAddress();
  },
  getMACAddress: function() {
    return RNDeviceInfo.getMacAddress();
  },
  getDeviceId: function() {
    return RNDeviceInfo.deviceId;
  },
  getManufacturer: function() {
    return RNDeviceInfo.systemManufacturer;
  },
  getModel: function() {
    return RNDeviceInfo.model;
  },
  getBrand: function() {
    return RNDeviceInfo.brand;
  },
  getSystemName: function() {
    return RNDeviceInfo.systemName;
  },
  getSystemVersion: function() {
    return RNDeviceInfo.systemVersion;
  },
  getAPILevel: function() {
    return RNDeviceInfo.apiLevel;
  },
  getBundleId: function() {
    return RNDeviceInfo.bundleId;
  },
  getApplicationName: function() {
    return RNDeviceInfo.appName;
  },
  getBuildNumber: function() {
    return RNDeviceInfo.buildNumber;
  },
  getVersion: function() {
    return RNDeviceInfo.appVersion;
  },
  getReadableVersion: function() {
    return RNDeviceInfo.appVersion + '.' + RNDeviceInfo.buildNumber;
  },
  getDeviceName: function() {
    return RNDeviceInfo.deviceName;
  },
  getUserAgent: function() {
    return RNDeviceInfo.userAgent;
  },
  getDeviceLocale: function() {
    return RNDeviceInfo.deviceLocale;
  },
  getDeviceCountry: function() {
    return RNDeviceInfo.deviceCountry;
  },
  getTimezone: function() {
    return RNDeviceInfo.timezone;
  },
  getFontScale: function() {
    return RNDeviceInfo.fontScale;
  },
  isEmulator: function() {
    return RNDeviceInfo.isEmulator;
  },
  isTablet: function() {
    return RNDeviceInfo.isTablet;
  },
  is24Hour: function() {
    return RNDeviceInfo.is24Hour;
  },
  isPinOrFingerprintSet: function() {
    return RNDeviceInfo.isPinOrFingerprintSet;
  },
  hasNotch: function() {
    return brand.toLowerCase() + ' ' + model.toLowerCase() + '' in devicesWithNotch;
  },
  getFirstInstallTime: function() {
    return RNDeviceInfo.firstInstallTime;
  },
  getInstallReferrer: function() {
    return RNDeviceInfo.installReferrer;
  },
  getLastUpdateTime: function() {
    return RNDeviceInfo.lastUpdateTime;
  },
  getPhoneNumber: function() {
    return RNDeviceInfo.phoneNumber;
  },
  getCarrier: function() {
    return RNDeviceInfo.carrier;
  },
  getTotalMemory: function() {
    return RNDeviceInfo.totalMemory;
  },
  getMaxMemory: function() {
    return RNDeviceInfo.maxMemory;
  },
  getTotalDiskCapacity: function() {
    return RNDeviceInfo.totalDiskCapacity;
  },
  getFreeDiskStorage: function() {
    return RNDeviceInfo.freeDiskStorage;
  },
  getBatteryLevel: function() {
    return RNDeviceInfo.getBatteryLevel();
  },
  isBatteryCharging: function() {
    return RNDeviceInfo.isBatteryCharging();
  },
  isLandscape: function() {
    const { height, width } = Dimensions.get('window');
    return width >= height;
  },
  isAirPlaneMode: function() {
    return RNDeviceInfo.isAirPlaneMode();
  },
  getDeviceType: function() {
    return RNDeviceInfo.deviceType;
  },
  isAutoDateAndTime: function () {
    return RNDeviceInfo.isAutoDateAndTime();
  },
  isAutoTimeZone: function () {
    return RNDeviceInfo.isAutoTimeZone();
  }
};
