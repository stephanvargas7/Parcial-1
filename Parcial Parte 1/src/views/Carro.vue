<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Gestión de Carros</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div id="car-management-container">
        <ion-grid>
          <ion-row>
            <ion-col size="12" size-md="6">
              <!-- Formulario para Agregar Carro -->
              <ion-card>
                <ion-card-header>
                  <ion-card-title>Agregar Carro</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  <ion-item>
                    <ion-label position="floating">ID</ion-label>
                    <ion-input v-model="newCar.id" type="text" required></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label position="floating">Marca</ion-label>
                    <ion-input v-model="newCar.marca" type="text" required></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label position="floating">Modelo</ion-label>
                    <ion-input v-model="newCar.modelo" type="text" required></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label position="floating">Placa</ion-label>
                    <ion-input v-model="newCar.placa" type="text" required></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label position="floating">Color</ion-label>
                    <ion-input v-model="newCar.color" type="text" required></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label position="floating">Categoría ID</ion-label>
                    <ion-input v-model="newCar.categoriaId" type="text" required></ion-input>
                  </ion-item>
                  <ion-button expand="block" @click="addCar" :disabled="!isFormValid">Agregar Carro</ion-button>
                </ion-card-content>
              </ion-card>
            </ion-col>
            <ion-col size="12" size-md="6">
              <!-- Lista de Carros -->
              <ion-card>
                <ion-card-header>
                  <ion-card-title>Lista de Carros</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  <ion-list>
                    <ion-item v-for="car in carList" :key="car.id">
                      <ion-label>
                        <h2>{{ car.marca }} - {{ car.modelo }}</h2>
                        <p>ID: {{ car.id }}</p>
                        <p>Placa: {{ car.placa }}</p>
                        <p>Color: {{ car.color }}</p>
                        <p>Categoría ID: {{ car.categoriaId }}</p>
                      </ion-label>
                    </ion-item>
                  </ion-list>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
      <!-- Notificación Toast -->
      <ion-toast :is-open="showToast" message="Carro añadido exitosamente" duration="3000" @ionDidDismiss="showToast = false"></ion-toast>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonGrid, IonInput, IonItem, IonList, IonPage, IonRow, IonCol, IonTitle, IonToast, IonToolbar } from '@ionic/vue';

const newCar = ref({
  id: '',
  marca: '',
  modelo: '',
  placa: '',
  color: '',
  categoriaId: ''
});

const carList = ref([]);

const showToast = ref(false);

const addCar = () => {
  if (isFormValid) {
    carList.value.push({ ...newCar.value });
    resetForm();
    showToast.value = true;
  }
};

const resetForm = () => {
  Object.keys(newCar.value).forEach(key => {
    newCar.value[key] = '';
  });
};

const isFormValid = computed(() => {
  return Object.values(newCar.value).every(value => value.trim() !== '');
});
</script>

<style scoped>
#car-management-container {
  padding: 16px;
}

ion-card {
  margin-bottom: 20px;
}
</style>



  
  
  