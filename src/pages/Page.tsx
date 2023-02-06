import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import { CameraPluginPage } from './capacitorPluginPages/CameraPluginPage/CameraPluginPage';
import { CurrentIssuePage } from './currentIssuePage/CurrentIssuePage';
import { FingerprintPluginPage } from './ionicPluginPages/fingerprintPluginPage/FingerprintPluginPage';
import './Page.css';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  const getContent = (): JSX.Element => {
    let contentComponent = <></>;
    switch (name) {
      case 'CurrentIssue':
        contentComponent= <CurrentIssuePage />
        break;
      // Capacitor Plugins
      case 'Camera':
        contentComponent = <CameraPluginPage />;
        break;
      // Ionic Plugins
      case 'Fingerprint':
        contentComponent = <FingerprintPluginPage />;
        break;
    }
    return contentComponent;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        {getContent()}
      </IonContent>
    </IonPage>
  );
};

export default Page;