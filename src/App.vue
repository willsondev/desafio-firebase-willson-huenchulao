<template>
  <div id="app">
    <UserForm :userToEdit="userToEdit" @user-updated="refreshList" />
    <UserList @edit-user="editUser" />
  </div>
</template>

<script>
import UserForm from './components/UserForm.vue';
import UserList from './components/UserList.vue';

export default {
  components: {
    UserForm,
    UserList
  },
  data() {
    return {
      userToEdit: null
    };
  },
  methods: {
    editUser(user) {
      this.userToEdit = user;
    },
    refreshList() {
      this.userToEdit = null; 
    }
  }
};
</script>
