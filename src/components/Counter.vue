<template>
    <div>
        {{ count }}
        <button id="plus" @click="increment">Increment</button>
        <button id="minus" @click="decrement">Decrement</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        }
    },

    methods: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        }
    }
}
</script>