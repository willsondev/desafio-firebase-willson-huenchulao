<template>
  <div class="container mt-4">
    <h2>{{ isEditing ? 'Editar Usuario' : 'Agregar Usuario' }}</h2>
    <form @submit.prevent="submitForm" class="form-inline">
      <div class="form-group mr-2">
        <input v-model="nombre" class="form-control" placeholder="Nombre" required />
      </div>
      <div class="form-group mr-2">
        <input v-model="email" type="email" class="form-control" placeholder="Email" required />
      </div>
      <button type="submit" class="btn btn-primary">
        {{ isEditing ? 'Actualizar' : 'Agregar' }}
      </button>
      <button type="button" class="btn btn-secondary ml-2" v-if="isEditing" @click="resetForm">Cancelar</button>
    </form>
  </div>
</template>

<script>
import { db } from '../firebaseconfig';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';

export default {
  props: ['userToEdit'],
  data() {
    return {
      nombre: '',
      email: '',
      isEditing: false,
      userId: null,
    };
  },
  watch: {
    userToEdit(newVal) {
      if (newVal) {
        this.nombre = newVal.nombre;
        this.email = newVal.email;
        this.isEditing = true;
        this.userId = newVal.id;
      }
    }
  },
  methods: {
    async submitForm() {
      try {
        const usersCollection = collection(db, 'usuarios');
        if (this.isEditing) {
          const userDoc = doc(usersCollection, this.userId);
          await updateDoc(userDoc, {
            nombre: this.nombre,
            email: this.email
          });
        } else {
          await addDoc(usersCollection, {
            nombre: this.nombre,
            email: this.email
          });
        }
        this.resetForm();
      } catch (error) {
        console.error('Error al agregar o actualizar usuario:', error);
      }
    },
    resetForm() {
      this.nombre = '';
      this.email = '';
      this.isEditing = false;
      this.userId = null;
      this.$emit('user-updated'); 
    }
  }
};
</script>
