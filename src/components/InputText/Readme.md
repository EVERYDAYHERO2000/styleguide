```js
    new Vue({
      data(){
        return {
          value: 'Имя Фамилия'
        }
      },
      template: `
        <InputText label="Имя пользователя" id="user" v-bind:value="value" v-model="value" v-on:update="value" />
      `
    })
```