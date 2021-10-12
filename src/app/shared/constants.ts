import { AccordionMenu } from "./components/accordion/types/accordion-menu";

export const mockedSideMenuItems: AccordionMenu[] = [
  {
    name: "Início",
    iconClass: "fas fa-lg fa-home",
    url: "/home",
    isLink: true,
    enabled: true,
    level: 1
  },
  {
    name: "Cores",
    iconClass: "fas fa-lg fa-palette",
    url: "/cores",
    isLink: true,
    enabled: true,
    level: 1
  },
  {
    name: "Layout",
    iconClass: "fas fa-lg fa-layer-group",
    url: "/layout",
    isLink: true,
    enabled: true,
    level: 1,
    submenu: [
      {
        name: "Tipografia",
        iconClass: "fas fa-lg fa-font",
        url: "/layout/tipografia",
        isLink: true,
        enabled: true,
        level: 2
      }
    ]
  },
  {
    name: "Componentes Caixa",
    url: "/componentes-caixa",
    iconClass: "fas fa-lg fa-toolbox",
    isLink: true,
    enabled: true,
    level: 1,
    submenu: [
      /*       {
              name: 'Botões',
              iconClass: 'fa fa-lg fa-dot-circle',
              url: '/componentes-caixa/botoes',
              isLink: true,
              enabled: true
            }, */
      /*       {
              name: 'Cards',
              iconClass: 'fa fa-lg fa-clipboard',
              url: '/componentes-caixa/cards',
              isLink: true,
              enabled: true
            }, */
      /*       {
              name: 'Inputs',
              iconClass: 'fa fa-lg fa-keyboard',
              url: '/componentes-caixa/inputs',
              isLink: true,
              enabled: true
            }, */
      /*       {
              name: 'Mensagens',
              iconClass: 'fa fa-lg fa-comment',
              url: '/componentes-caixa/mensagens',
              isLink: true,
              enabled: true
            }, */
      /*       {
              name: 'Select',
              iconClass: 'fa fa-lg fa-hand-pointer',
              url: '/componentes-caixa/select',
              isLink: true,
              enabled: true
            }, */
      {
        name: "Stepper",
        iconClass: "fa fa-lg fa-shoe-prints",
        url: "/componentes-caixa/stepper",
        isLink: true,
        enabled: true,
        level: 2
      },
/*       {
        name: "Tabber",
        iconClass: "fa fa-lg fa-ellipsis-h",
        url: "/componentes-caixa/tabber",
        isLink: true,
        enabled: true,
        level: 2
      }, */
      {
        name: "Card-button",
        iconClass: "fa fa-lg fa-dot-circle",
        url: "/componentes-caixa/card-button",
        isLink: true,
        enabled: true,
        level: 2
      },
      {
        name: "Timeline",
        iconClass: "fa fa-lg fa-calendar-alt",
        url: "/componentes-caixa/timeline",
        isLink: true,
        enabled: true,
        level: 2
      },
      {
        name: "DataTable",
        iconClass: "fa fa-lg fa-table",
        url: "/componentes-caixa/datatable",
        isLink: true,
        enabled: true,
        level: 2
      },
/*       {
        name: "Button Control",
        iconClass: "fa fa-lg fa-check-square",
        url: "/componentes-caixa/button-control",
        isLink: true,
        enabled: true,
        level: 2
      } */
    ]
  },
  {
    name: "Componentes básicos",
    iconClass: "fas fa-lg fa-tools",
    url: "/componentes-basicos",
    isLink: true,
    enabled: true,
    level: 1,
    submenu: [
      /*       {
              name: "Alerts",
              iconClass: "fa fa-lg fa-exclamation-triangle",
              url: "/componentes-basicos/alerts",
              isLink: true,
              enabled: true
            }, */
      {
        name: "Botões",
        iconClass: "fa fa-lg fa-bullseye",
        url: "/componentes-basicos/botoes",
        isLink: true,
        enabled: true,
        level: 2
      },
      {
        name: "Cards",
        iconClass: "fa fa-lg fa-clipboard",
        url: "/componentes-basicos/cards",
        isLink: true,
        enabled: true,
        level: 2
      },
      {
        name: "Forms",
        iconClass: "fab fa-lg fa-wpforms",
        url: "/componentes-basicos/forms",
        isLink: true,
        enabled: true,
        level: 2
      },
      {
        name: "Mensagens",
        iconClass: "fa fa-lg fa-envelope",
        url: "/componentes-basicos/mensagens",
        isLink: true,
        enabled: true,
        level: 2
      }
    ]
  },
  /*   {
      name: "Prototipador",
      iconClass: "fa fa-lg fa-puzzle-piece",
      url: "/prototipador",
      isLink: true,
      enabled: true
    }, */
  /*   {
      name: 'Chat',
      iconClass: 'fas fa-lg fa-comment',
      url: '/chat',
      isLink: true,
      enabled: false
    }, */
  /*   {
      name: 'Páginas',
      iconClass: 'fas fa-lg fa-newspaper',
      url: '/paginas',
      isLink: true,
      enabled: true
    }, */
  /*   {
      name: 'Configurações',
      iconClass: 'fas fa-lg fa-wrench',
      url: '/config',
      isLink: false,
      enabled: true,
      submenu: [{
        name: 'Menu',
        iconClass: 'fas fa-lg fa-th-large',
        url: '/config/menu',
        isLink: true,
        enabled: true
      }]
    } */
];

