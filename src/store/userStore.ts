// src/store/userStore.ts
import { defineStore } from 'pinia'

interface UserState {
  name: string
  age: number
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    name: 'John Doe',
    age: 30
  }),
  actions: {
    changeName(newName: string) {
      this.name = newName
    },
    changeAge(newAge: number) {
      this.age = newAge
    }
  }
})
