import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {text: 'Sobre', href: '#features'},
    { text: 'Tech', href: '#tech' },
    { text: 'Agência', href: '#agency' },
    {text: 'Contratar',href: '#hire',},
    { text: 'FAQ', href: '#faq' },
  ],
  actions: [{ text: 'Entre em Contato', href: 'https://wa.me/5511950507175?text=Estava%20no%20site%20da%20PWER%20e%20me%20interessei%20pelos%20serviços%20prestados.%20Gostaria%20de%20mais%20detalhes.', target: '_blank' }],
};

export const footerData = {
  links: [
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://pwer.com.br/"> PWER IO</a> · All rights reserved.
  `,
};
