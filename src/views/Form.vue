<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import AlertCard from '@/components/AlertCard/AlertCard.vue';

import emailjs from '@emailjs/browser';
import { ref } from 'vue';

const name = ref('')
const email = ref('')
const message = ref('')

const verificarEnvio = ref('')

const verificarEmail = (email:string) => {
  const regex = /^[^\s]+@[^\s]+\.[^\s]+$/
  return regex.test(email)
}

function sendEmail (evt: Event) {
  evt.preventDefault()

  const isValid = verificarEmail(email.value)

  if (name.value == '' || email.value == '' || message.value == '' || isValid == false) {
    verificarEnvio.value = 'Erro'
    setTimeout(()=>{
      verificarEnvio.value = ''
      name.value = ''
      email.value = ''
      message.value = ''
    }, 3500)
    return
  }

  const templateParams = {
    from_name: name.value,
    message: message.value,
    email: email.value,
  }

  emailjs.send('service_ipy1glf', 'template_n82o15d', templateParams, '73I6jLdH7Fq7WiDwh')
  .then((res)=>{
    console.log('E-mail enviado', res.status, res.text)
    verificarEnvio.value = res.text
    setTimeout(()=>{
      verificarEnvio.value = ''
      name.value = ''
      email.value = ''
      message.value = ''
    }, 3500)
  }, (err) => {
    console.log('Erro: ', err)
    verificarEnvio.value = err
    setTimeout(()=>{
      verificarEnvio.value = ''
      name.value = ''
      email.value = ''
      message.value = ''
    }, 3500)
  })
}

</script>

<template>
  <div class="h-screen overflow-y-auto pa-4">
    <div class="mt-5">
      <h1 class="text-center">Contato</h1>
      <form @submit="sendEmail" class="mx-auto w-77 w-md-50 w-lg-50 pa-4 border-rounded">
        <AlertCard v-if="verificarEnvio === ''" class="d-none"/>
        <AlertCard v-else-if="verificarEnvio === 'OK'" title="Enviado com sucesso" text="Logo estarei respondendo!" type="success"/>
        <AlertCard v-else title="Envio mal sucedido" text="Algo deu errado!" type="error"/>
        <div class="container-text">
          <label class="font-weight-medium" for="name">Nome</label>
          <input v-model="name" class="w-100 border-md" type="text" name="name" id="name" placeholder="Informe seu nome">
        </div>
        <div class="container-text">
          <label class="font-weight-medium" for="email">E-mail</label>
          <input v-model="email" class="w-100 border-md" type="email" name="email" id="email" placeholder="Informe seu e-mail">
        </div>
        <div class="container-text">
          <label class="font-weight-medium" for="message">Mensagem</label>
          <textarea v-model="message" class="w-100 border-md" name="message" id="message" placeholder="Digite sua mensagem" rows="8"></textarea>
        </div>
          <input class="mt-7 w-100 bg-green font-weight-bold" type="submit" value="Enviar">
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-text {
  margin-bottom: 8px;
}

label, input, textarea {
  display: block;
  padding: 8px;
  border-radius: 5px;
}
</style>
