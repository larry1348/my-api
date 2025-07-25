import { strapi } from '@strapi/client'

const client = strapi({
  baseURL: 'http://localhost:1337/api',
  auth: 'c5d3011b07171a47c243bcb81d8d3df0819caecf2cbebe6ff55b2158d7fca1f573c1c11acd09b3bc43fcf17948ad8f63dc1c83b295d742b62f2fccde611a4bb3283c713082cc479b76560832863e750f130daae18d0799d033e42bd0cc8052d36cdd66b5184126cbb93bcd557348a3540bc78e8deb161d6a636865f3af412433',
})

export default client