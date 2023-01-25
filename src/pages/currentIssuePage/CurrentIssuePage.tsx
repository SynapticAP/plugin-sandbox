import { Camera } from '@capacitor/camera';
import { IonButton, IonIcon, IonItem, IonLabel, IonList, IonListHeader } from '@ionic/react';
import { images } from 'ionicons/icons';

const askPhotosPermission = async () => {
    await Camera.requestPermissions({permissions: ['photos']});
};

const displayStepsToRecreate = (): JSX.Element => {
    return (
        <IonList>
            <IonListHeader>Steps to recreate</IonListHeader>
            <IonItem>
                <IonLabel>1. Press button bellow</IonLabel>
            </IonItem>
            <IonItem>
                <IonLabel>2. On the pop-over, press 'Select Photos'</IonLabel>
            </IonItem>
            <IonItem>
                <IonLabel>Issue: prompt to select doesnt show up for at least 20 seconds</IonLabel>
            </IonItem>
        </IonList>
    );
}

const CurrentIssuePage: React.FC = () => {
    return (
        <>
            {displayStepsToRecreate()}

            <IonButton expand="full" onClick={askPhotosPermission}>
                <IonIcon slot="start" icon={images}></IonIcon>
                Photos (Gallery) Permission
            </IonButton>
        </>
    )
}

export { CurrentIssuePage };