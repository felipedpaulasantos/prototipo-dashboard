export interface AgrupamentoExtrato {
   valorAgrupador: string;
   linhasDoAgrupamento: any[];
   dataFormatada: AgrupamentoExtratoDataFormatada;
}

export interface AgrupamentoExtratoDataFormatada {
   principal: string;
   complementar: string;
}
