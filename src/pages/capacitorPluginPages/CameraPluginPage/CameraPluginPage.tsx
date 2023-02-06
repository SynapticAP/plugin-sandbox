import { IonButton, IonIcon, IonItemDivider, IonLabel, IonList, IonListHeader } from '@ionic/react';
import { Camera } from '@capacitor/camera';
import { camera, images } from 'ionicons/icons';
import { useState } from 'react';


const CameraPluginPage: React.FC = () => {
    const [cameraPermission, setCameraPermission] = useState({grantedPermissionMessage: 'Permission not checked', color: 'medium'});
    const [photosPermission, setPhotosPermission] = useState({grantedPermissionMessage: 'Permission not checked', color: 'medium'});

    /**
     * Checks if camera has permission to be used
     *
     * @returns boolean if device has permission to use Camera
     */
    const checkCameraPluginPermission = async (): Promise<void> => {
        const cameraPermission = await Camera.checkPermissions();
        if (cameraPermission.camera === 'granted') {
            setCameraPermission({grantedPermissionMessage: cameraPermission.camera, color: 'success'});
        }
        else {
            setCameraPermission({grantedPermissionMessage: cameraPermission.camera, color: 'danger'});
        }

        if (cameraPermission.photos === 'granted') {
            setPhotosPermission({grantedPermissionMessage: cameraPermission.photos, color: 'success'});
        }
        else {
            setPhotosPermission({grantedPermissionMessage: cameraPermission.photos, color: 'danger'});
        }
    };

    const askCameraAndPhotosPermission = async () => {
        const result = await Camera.requestPermissions({permissions: ['camera', 'photos']});
        if (result.camera === 'granted') {
            setCameraPermission({grantedPermissionMessage: result.camera, color: 'success'});
        }
        else {
            setCameraPermission({grantedPermissionMessage: result.camera, color: 'danger'});
        }

        if (result.photos === 'granted') {
            setPhotosPermission({grantedPermissionMessage: result.photos, color: 'success'});
        }
        else {
            setPhotosPermission({grantedPermissionMessage: result.photos, color: 'danger'});
        }
    };

    const askCameraPermission = async () => {
        const result = await Camera.requestPermissions({permissions: ['camera']});
        if (result.camera === 'granted') {
            setCameraPermission({grantedPermissionMessage: result.camera, color: 'success'});
        }
        else {
            setCameraPermission({grantedPermissionMessage: result.camera, color: 'danger'});
        }
    };

    const askPhotosPermission = async () => {
        const result = await Camera.requestPermissions({permissions: ['photos']});
        if (result.photos === 'granted') {
            setPhotosPermission({grantedPermissionMessage: result.photos, color: 'success'});
        }
        else {
            setPhotosPermission({grantedPermissionMessage: result.photos, color: 'danger'});
        }
    };

    return (
        <>
            <IonList>
                <IonListHeader>
                    <IonLabel>Check Camera Plugin Permissions</IonLabel>
                </IonListHeader>
                <IonButton expand="full" onClick={checkCameraPluginPermission}>
                    <IonIcon slot="start" icon={camera}></IonIcon>
                    <IonIcon slot="start" icon={images}></IonIcon>
                    Camera AND AND Photo Permission
                </IonButton>

                <IonItemDivider color={cameraPermission.color}>
                    <IonLabel>Camera Permission: {cameraPermission.grantedPermissionMessage} </IonLabel>
                </IonItemDivider>
                <IonItemDivider color={photosPermission.color}>
                    <IonLabel>Photos Permission: {photosPermission.grantedPermissionMessage} </IonLabel>
                </IonItemDivider>
            </IonList>

            <IonList>
                <IonListHeader>
                    <IonLabel>Request Camera Plugin Permissions</IonLabel>
                </IonListHeader>

                <IonButton expand="full" onClick={askCameraAndPhotosPermission}>
                    <IonIcon slot="start" icon={camera}></IonIcon>
                    <IonIcon slot="start" icon={images}></IonIcon>
                    Camera AND AND Photo Permission
                </IonButton>

                <IonButton expand="full" onClick={askCameraPermission}>
                    <IonIcon slot="start" icon={camera}></IonIcon>
                    Camera Permission
                </IonButton>

                <IonButton expand="full" onClick={askPhotosPermission}>
                    <IonIcon slot="start" icon={images}></IonIcon>
                    Photos (Gallery) Permission
                </IonButton>
            </IonList>
        </>


    );
}

export { CameraPluginPage };