<template>
  <div class="User">
    <span>{{name}}</span>
    <template v-if="isAdmin">
      <button @click="removeUser()">削除</button>
    </template>
  </div>
</template>

<script>
  export default {
    props: {
      id: Number,
      name: String,
      isAdmin: Boolean
    },
    methods: {
      removeUser() {
        this.$emit('removeUser', {id: this.id})
      }
    }
  }
</script>