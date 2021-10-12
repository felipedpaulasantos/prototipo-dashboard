import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent,
    data: {
      title: "Início",
      animation: "Home"
    }
  },
  {
    path: "cores",
    data: {
      title: "Cores",
      breadcrumb: "Cores",
      animation: "Cores"
    },
    loadChildren: () => import("./demonstracao/cores/cores.module").then(m => m.CoresModule)
  },
  {
    path: "layout",
    data: {
      title: "Layout",
      breadcrumb: "Layout",
      animation: "Layout"
    },
    loadChildren: () => import("./demonstracao/layout/layout.module").then(m => m.LayoutModule)
  },
  {
    path: "componentes-caixa",
    data: {
      title: "Componentes",
      breadcrumb: "Componentes Caixa",
      animation: "Componentes"
    },
    loadChildren: () => import("./demonstracao/componentes/componentes-caixa.module").then(m => m.ComponentesCaixaModule)
  },
/*   {
    path: "tipografia",
    data: {
      title: "Tipografia",
      breadcrumb: "Tipografia",
      animation: "Tipografia"
    },
    loadChildren: () => import("./demonstracao/layout/tipografia/tipografia.module").then(m => m.TipografiaModule)
  }, */
  {
    path: "chat",
    data: {
      title: "Chat",
      breadcrumb: "Chat",
      animation: "Chat"
    },
    loadChildren: () => import("./chat/chat.module").then(m => m.ChatModule)
  },
  {
    path: "config/menu",
    data: {
      title: "Configuração do Menu",
      breadcrumb: "Configuração do Menu",
      animation: "Config-menu"
    },
    loadChildren: () => import("./demonstracao/config-menu/config-menu.module").then(m => m.ConfigMenuModule)
  },
  {
    path: "paginas",
    data: {
      title: "Páginas de teste",
      breadcrumb: "Páginas",
      animation: "Paginas"
    },
    loadChildren: () => import("./demonstracao/paginas/paginas.module").then(m => m.PaginasModule)
  },
  {
    path: "prototipador",
    data: {
      title: "Prototipador",
      breadcrumb: "Prototipador",
      animation: "Prototipador"
    },
    loadChildren: () => import("./prototipador/prototipador.module").then(m => m.PrototipadorModule)
  },
  {
    path: "componentes-basicos",
    data: {
      title: "Componentes Básicos",
      breadcrumb: "Componentes Básicos",
      animation: "Componentes Básicos"
    },
    loadChildren: () => import("./demonstracao/componentes-basicos/componentes-basicos.module").then(m => m.ComponentesBasicosModule) },
  {
    path: "roadmap", loadChildren: () => import("./roadmap/roadmap.module").then(m => m.RoadmapModule),
    data: {
      title: "Roadmap",
      breadcrumb: "Roadmap",
      animation: "Roadmap"
    }
  },
  {
    path: "**",
    redirectTo: "home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
      useHash: true,
      initialNavigation: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
