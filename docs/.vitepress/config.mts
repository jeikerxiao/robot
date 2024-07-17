import { provide } from "vue";

export default {
    title: '知晓',
    description: '晓疯嵌入式开发小站', // 博客的介绍
    base: '/blog/',
    themeConfig: {
    // 增加搜索框-在导航栏
    search: {
      provider: 'local'
    },
    // 增加社交链接-在导航栏
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jeikerxiao' }
    ],
    // 顶部导航栏
    nav: [
      { text: 'C51', link: '/C51' },
      { text: 'STM32', link: '/STM32' },
      { text: 'Arduino', link: '/Arduino' },
      { text: 'ESP8266', link: '/ESP8266' },
      { text: 'ESP32', link: '/ESP32' },
      { text: 'RaspberryPi', link: '/RaspberryPi' }
    ],
    sidebar: {
      // 当用户位于 `guide` 目录时，会显示此侧边栏
      '/C51/': [
        {
          text: 'C51传感器',
          items: [
            { text: 'C51传感器', link: '/C51/' },
            { text: 'C51传感器', link: '/C51/1-rain' },
            { text: 'C51小项目', link: '/C51/2-rain' }
          ]
        }
      ],

      // 当用户位于 `config` 目录时，会显示此侧边栏
      '/STM32/': [
        {
          text: 'STM32',
          items: [
            { text: 'STM32开发环境搭建', link: '/STM32/' },
            { text: 'STM32传感器', link: '/STM32/1' },
            { text: 'STM32小项目', link: '/STM32/2' }
          ]
        }
      ]
    }
  }
}