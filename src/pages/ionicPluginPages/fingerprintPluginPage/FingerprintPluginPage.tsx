import { getPlatforms, IonButton, IonIcon, IonItemDivider, IonLabel, IonList, IonListHeader } from "@ionic/react";
import { FingerprintAIO, FingerprintOptions } from '@ionic-native/fingerprint-aio';
import { fingerPrint } from "ionicons/icons";
import { useState } from "react";


const platformList = getPlatforms();

const getErrorMsg = (error: any) => {
    let message = '';
    switch (error.code) {
        case -100:
            message = 'BIOMETRIC_UNKNOWN_ERROR'
            break;
        case -101:
            message = 'BIOMETRIC_UNAVAILABLE'
            break;
        case -102:
            message = 'BIOMETRIC_AUTHENTICATION_FAILED'
            break;
        case -103:
            message = 'BIOMETRIC_SDK_NOT_SUPPORTED'
            break;
        case -104:
            message = 'BIOMETRIC_HARDWARE_NOT_SUPPORTED'
            break;
        case -105:
            message = 'BIOMETRIC_PERMISSION_NOT_GRANTED'
            break;
        case -106:
            message = 'BIOMETRIC_NOT_ENROLLED'
            break;
        case -107:
            message = 'BIOMETRIC_INTERNAL_PLUGIN_ERROR'
            break;
        case -108:
            message = 'BIOMETRIC_DISMISSED'
            break;
        case -109:
            message = 'BIOMETRIC_PIN_OR_PATTERN_DISMISSED'
            break;
        case -110:
            message = 'BIOMETRIC_SCREEN_GUARD_UNSECURED'
            break;
        case -111:
            message = 'BIOMETRIC_LOCKED_OUT'
            break;
        case -112:
            message = 'BIOMETRIC_LOCKED_OUT_PERMANENT'
            break;
        case -113:
            message = 'BIOMETRIC_SECRET_NOT_FOUND'
            break;
    }
    return message;
}

const FingerprintPluginPage: React.FC = () => {
    const [errorObj, setErrorObj] = useState({errorCode: 0, errorMessage: 'No errors (not checked)', color: 'medium'})

    const checkBiometricAvailable = async () => {
        try {
            await FingerprintAIO.isAvailable();
            setErrorObj({errorCode: 0, errorMessage: 'No errors', color: 'success'});
        }
        catch (error: any) {
            console.log(error)
            let message = getErrorMsg(error);
            setErrorObj({errorCode: error.code, errorMessage: message, color: 'danger'});
        }
    };

    const runBiometrics = async () => {
        try {
            const bioOptions: FingerprintOptions = {
                description: 'Use biometrics',
                disableBackup: false
            };
            await FingerprintAIO.show(bioOptions);
            setErrorObj({errorCode: 0, errorMessage: 'No errors', color: 'success'});
        }
        catch (error: any) {
            console.log(error)
            let message = getErrorMsg(error);
            setErrorObj({errorCode: error.code, errorMessage: message, color: 'danger'});
        }
    };

    return (
        <>
            <IonItemDivider color='primary'>
                <IonLabel>Platform(s): {platformList.toString()}</IonLabel>
            </IonItemDivider>

            <IonList>
                <IonListHeader>
                    <IonLabel>Check Fingerprint Plugin Availability</IonLabel>
                </IonListHeader>
                <IonButton expand="full" onClick={checkBiometricAvailable}>
                    <IonIcon slot="start" icon={fingerPrint}></IonIcon>
                    Fingerprint Availability
                </IonButton>

                <IonItemDivider color={errorObj.color}>
                    <IonLabel>Errors Code: {errorObj.errorCode} - Error: {errorObj.errorMessage} </IonLabel>
                </IonItemDivider>
            </IonList>

            <IonList>
                <IonListHeader>
                    <IonLabel>Run Fingerprint Plugin</IonLabel>
                </IonListHeader>
                <IonButton expand="full" onClick={runBiometrics}>
                    <IonIcon slot="start" icon={fingerPrint}></IonIcon>
                    Run Biometrics
                </IonButton>
            </IonList>

        </>
    );
}

export { FingerprintPluginPage };