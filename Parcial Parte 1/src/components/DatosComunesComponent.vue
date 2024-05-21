<template>

  <ion-item>
      <ion-label position="stacked">código</ion-label>
      <ion-input placeholder="  " @input="validateName"></ion-input>
    </ion-item>
    <ion-item>
      <ion-label position="stacked">Nombre</ion-label>
      <ion-input placeholder=" " @input="validateName"></ion-input>
    </ion-item>
    <ion-item>
      <ion-label position="stacked">descripción</ion-label>
      <ion-input placeholder=" " @input="validateName"></ion-input>
    </ion-item>
    <ion-item>
      <ion-label position="stacked">estado</ion-label>
      <ion-input placeholder="   " @input="validateName"></ion-input>

      <ion-label position="stacked">referencia</ion-label>
      <ion-input placeholder="   " @input="validateName"></ion-input>
    </ion-item>
    <ion-item>
    </ion-item>
  </template>
  
  <script>
      import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton, IonToast } from '@ionic/vue';
  
  </script>
  
  <style scoped>
    /* Estilo global */
  </style>  