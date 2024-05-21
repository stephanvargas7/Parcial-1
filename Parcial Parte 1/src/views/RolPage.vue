<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>RolPage</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <ion-grid>
        <ion-row>
          <ion-col size="12" size-md="6" offset-md="3">
            <ion-card>
              <ion-card-content>
                <DatosComunesComponent/>
              </ion-card-content>
            </ion-card>
            <ion-button expand="block" @click="submitForm">Registrarse</ion-button>
            <ion-toast :isOpen="showToast" message="Tu registro se ha completado exitosamente" duration="3000" onIonDidDismiss="showToast = false"></ion-toast>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton, IonToast } from '@ionic/vue';
import { ref } from 'vue';
import DatosComunesComponent from '../components/DatosComunesComponent.vue';

const formData = ref({
  firstName: '',
  lastName: '',
  documentType: '',
  documentNumber: ''
})

const showToast = ref(false);

const submitForm = () => {
  // Lógica para enviar el formulario
  showToast.value = true;
}
</script>
