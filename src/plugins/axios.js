import axios from 'axios'

export default axios.create({

  // headers: {
  //   'authorization': 'Bearer ' + localStorage.getItem('id_token')
  // }
  baseURL: process.env.baseURL || 'https://api.videa.design'
  // baseURL: process.env.baseURL || 'http://localhost:3000'
})

// in pages... import axios from '@/plugins/axios'

// Stay Connected
