import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { camera,  bookmarkOutline, warning } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const capacitorPages: AppPage[] = [
  {
    title: 'Camera',
    url: '/page/Camera',
    iosIcon: camera,
    mdIcon: camera
  }
];

const cordovaPages: AppPage[] = [];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
      <IonList id="inbox-list">
          <IonListHeader>Current Issue</IonListHeader>
              <IonMenuToggle autoHide={false}>
                <IonItem className={location.pathname === 'page/CurrentIssue' ? 'selected' : ''} routerLink={'/page/CurrentIssue'} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={warning} md={warning} />
                  <IonLabel>{'Current Issue'}</IonLabel>
                </IonItem>
              </IonMenuToggle>
        </IonList>

        <IonList id="inbox-list">
          <IonListHeader>Capacitor Plugins</IonListHeader>
          {capacitorPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
        <IonListHeader>Cordova Plugins</IonListHeader>
          {cordovaPages.map((appPage, index) => (
            <IonMenuToggle key={index} autoHide={false}>
            <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
              <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
              <IonLabel>{appPage.title}</IonLabel>
            </IonItem>
          </IonMenuToggle>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;