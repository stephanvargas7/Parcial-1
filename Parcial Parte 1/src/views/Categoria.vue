<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Gestión de Elementos</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div id="element-management-container">
        <ion-grid>
          <ion-row>
            <!-- Formulario para Agregar Elemento -->
            <ion-col size="12" size-md="6">
              <ion-card>
                <ion-card-header>
                  <ion-card-title>Agregar Elemento</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  <ion-item>
                    <ion-label position="floating">ID</ion-label>
                    <ion-input v-model="newItem.id" type="text" required></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label position="floating">Nombre</ion-label>
                    <ion-input v-model="newItem.nombre" type="text" required></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label position="floating">Descripción</ion-label>
                    <ion-input v-model="newItem.descripcion" type="text" required></ion-input>
                  </ion-item>
                  <ion-button expand="block" @click="addItem" :disabled="!isFormValid">Agregar Elemento</ion-button>
                </ion-card-content>
              </ion-card>
            </ion-col>

            <!-- Lista de Elementos -->
            <ion-col size="12" size-md="6">
              <ion-card>
                <ion-card-header>
                  <ion-card-title>Lista de Elementos</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  <ion-list>
                    <ion-item v-for="item in itemList" :key="item.id">
                      <ion-label>
                        <h2>{{ item.nombre }}</h2>
                        <p>ID: {{ item.id }}</p>
                        <p>Descripción: {{ item.descripcion }}</p>
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
      <ion-toast :is-open="showToast" message="Elemento añadido exitosamente" duration="3000" @ionDidDismiss="showToast = false"></ion-toast>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonGrid, IonInput, IonItem, IonLabel, IonList, IonPage, IonRow, IonCol, IonTitle, IonToast, IonToolbar } from '@ionic/vue';

const newItem = ref({
  id: '',
  nombre: '',
  descripcion: ''
});

const itemList = ref([]);

const showToast = ref(false);

const addItem = () => {
  if (isFormValid) {
    itemList.value.push({ ...newItem.value });
    resetForm();
    showToast.value = true;
  }
};

const resetForm = () => {
  newItem.value.id = '';
  newItem.value.nombre = '';
  newItem.value.descripcion = '';
};

const isFormValid = computed(() => {
  return newItem.value.id.trim() !== '' && newItem.value.nombre.trim() !== '' && newItem.value.descripcion.trim() !== '';
});
</script>

<style scoped>
#element-management-container {
  padding: 16px;
}

ion-card {
  margin-bottom: 20px;
}

ion-card-header {
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
}

ion-card-title {
  font-size: 1.2em;
  font-weight: bold;
}

ion-item {
  margin-bottom: 15px;
}
</style>

  