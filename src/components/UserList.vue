<template>
  <div class="container mt-4">
    <h2>Lista de Usuarios</h2>
    <ul class="list-group">
      <li v-for="user in users" :key="user.id" class="list-group-item d-flex justify-content-between align-items-center">
        <span>{{ user.nombre }} - {{ user.email }}</span>
        <div>
          <button class="btn btn-sm btn-secondary mr-2" @click="editUser(user)">Editar</button>
          <button class="btn btn-sm btn-danger" @click="deleteUser(user.id)">Eliminar</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { db } from '../firebaseconfig';
import { collection, onSnapshot, deleteDoc, doc } from 'firebase/firestore';

export default {
  data() {
    return {
      users: []
    };
  },
  mounted() {
    const usersCollection = collection(db, 'usuarios');
    onSnapshot(usersCollection, (snapshot) => {
      this.users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    });
  },
  methods: {
    async deleteUser(userId) {
      try {
        const userDoc = doc(db, 'usuarios', userId);
        await deleteDoc(userDoc);
      } catch (error) {
        console.error('Error al eliminar usuario:', error);
      }
    },
    editUser(user) {
      this.$emit('edit-user', user);
    }
  }
};
</script>
