import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-roadmap",
  templateUrl: "./roadmap.component.html",
  styleUrls: ["./roadmap.component.scss"]
})
export class RoadmapComponent implements OnInit {

  constructor() { }

  fases = [
    {
      titulo: "1ª fase",
      situacao: "andamento",
      objetivo: "Padronizar o estilo (css) e layout (html) básicos em todo o sistema",
      itensPendentes: [
        {
          descricao: "Padronizar modais"
        }
      ],
      itensConcluidos: [
        {
          descricao: "Regras de estilo (css) definidas globalmente para todos os componentes básicos"
        },
        {
          descricao: "Cores definidas de maneira semântica implementadas por variáveis"
        },
        {
          descricao: "Tabela aprimorada (datatable)"
        }
      ],
      estimativa: "28/05"
    },
    {
      titulo: "2ª fase",
      situacao: "nao-iniciado",
      objetivo: "Implementar melhorias globais de navegação e usabilidade",
      itensPendentes: [
        {
          descricao: "Acessibilidade - Funcionalidades de alteração de fonte e cor"
        },
        {
          descricao: "Menu lateral único dividido em níveis (módulo, grupo, funcionalidade etc.)"
        },
        {
          descricao: "Pesquisa de clientes única para todo o sistema"
        }
      ],
      itensConcluidos: [],
      estimativa: "02/07"
    },
    {
      titulo: "3ª fase",
      situacao: "nao-iniciado",
      objetivo: "Implementar componentes específicos para melhoria de usabilidade",
      itensPendentes: [
        {
          descricao: "Carregamento individual de cards e tabelas (loading com prévia do que está sendo carregado)"
        }
      ],
      itensConcluidos: [],
      estimativa: "indefinido"
    },
  ];

  ngOnInit(): void {
  }

}
