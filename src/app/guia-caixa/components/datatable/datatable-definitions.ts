export const dtLanguageDefinitionPt = {
    buttons: {
        copy: "<i class=\"fas fa-lg fa-copy mr-2\"></i>Copiar",
        copyTitle: "Copiado",
        copySuccess: {
            _: "Copiados %d registros",
            1: "Copiado 1 registro"
        },
        pdf: "<i class=\"fa fa-lg fa-file-pdf mr-2\"></i>PDF",
        print: "<i class=\"fa fa-lg fa-print mr-2\"></i>Imprimir",
        excel: "<i class=\"fa fa-lg fa-file-excel mr-2\"></i>Exportar para planilha",
        colvis: "<i class=\"fa fa-lg fa-columns mr-2\"></i>Colunas visíveis",
        pageLength: "<i class=\"fa fa-lg fa-bars mr-2\"></i>Mostrar <b>%d</b> linhas"
    },
    processing: "Processando...",
    search: `<i class="fa fa-search fa-lg mr-2"></i>`,
    lengthMenu: "Mostrar _MENU_ elementos",
    info: "Mostrando desde <i>_START_</i> até <i>_END_</i> de <b>_TOTAL_</b> elementos",
    infoEmpty: "Mostrando nenhum elemento.",
    infoFiltered: "(filtrado _MAX_ elementos total)",
    infoPostFix: "",
    loadingRecords: "Carregando registros...",
    zeroRecords: "Não foram encontrados registros",
    emptyTable: "<div class='text-center'>Não há dados disponíveis na tabela</div>",
    paginate: {
        first: "Primeiro",
        previous: "Anterior",
        next: "Seguinte",
        last: "Último"
    },
    aria: {
        sortAscending: ": Ativar para ordenar a tabela em ordem ascendente",
        sortDescending: ": Ativar para ordenar a tabela em ordem descendente"
    },
    select: {
        rows: {
            _: " - %d linhas selecionadas",
            0: " - Clique em uma linha para selecioná-la",
            1: " - 1 linha selecionada"
        }
    }
};

export class DataTableButtons {

    private constructor(public readonly button: any) {}

    static readonly PRINT = new DataTableButtons(
        { extend: "print", className: "btn btn-sm btn-outline-accent" }
    );

    static readonly EXCEL = new DataTableButtons(
        { extend: "excel", className: "btn btn-sm btn-outline-accent" }
    );

    static readonly COPY = new DataTableButtons(
        { extend: "copy", className: "btn btn-sm btn-outline-accent" }
    );

    static readonly COLVIS = new DataTableButtons(
        { extend: "colvis", className: "btn btn-sm btn-outline-accent" }
    );
}

export enum DataTableColumnFilterType {
    INPUT = "input",
    SELECT = "select",
    NONE = "none"
}

export enum DataTableColumnFilterPosition {
    TOP = "top",
    BOTTOM = "bottom",
    NONE = "none"
}

export const DatatableDefaultButtonsList = [
    DataTableButtons.PRINT.button,
    DataTableButtons.EXCEL.button
];

export interface DataTableSettings extends DataTables.Settings {
    buttons?: any;
    columnFilterType?: DataTableColumnFilterType | string;
    columnFilterPosition?: DataTableColumnFilterPosition | string;
    configOptions?: DataTableConfigOptions;
}

export interface DataTableConfigOptions {
    showFilter?: boolean;
    searching?: boolean;
    showLength?: boolean;
    showButtons?: boolean;
    showTable?: boolean;
    showInfo?: boolean;
    showProcessing?: boolean;
    showPagination?: boolean;
    paging?: boolean;
    menuLength?: number[];
    buttons?: any[];
}

export class DataTableConfig {

    static BTN_CLASS = "btn btn-sm btn-outline-dark-light";
    static SHOW_FILTER = "f";
    static SHOW_LENGTH = "l";
    static SHOW_BUTTONS = "B";
    static SHOW_TABLE = "t";
    static SHOW_INFO = "i";
    static SHOW_PROCESSING = "r";
    static SHOW_PAGINATION = "p";
    static DEFAULT_BUTTONS = DataTableButtons;

    static DEFAULT_SETTINGS: DataTableSettings = DataTableConfig.getDataTableSettings({
        searching: true,
        showFilter: true,
        showLength: false,
        showButtons: false,
        showInfo: true,
        showProcessing: true,
        showPagination: true
    });

    static COMPLETE_SETTINGS: DataTableSettings = DataTableConfig.getDataTableSettings({
        buttons: DatatableDefaultButtonsList,
        searching: true,
        showFilter: true,
        showLength: true,
        showButtons: true,
        showInfo: true,
        showProcessing: true,
        showPagination: true
    });

    static COMPLETE_NO_BUTTON_SETTINGS: DataTableSettings = DataTableConfig.getDataTableSettings({
        searching: true,
        showFilter: true,
        showLength: true,
        showButtons: false,
        showInfo: true,
        showProcessing: true,
        showPagination: true
    });

    static PAGINATION_INFO_SETTINGS: DataTableSettings = DataTableConfig.getDataTableSettings({
        searching: false,
        showFilter: false,
        showLength: false,
        showButtons: false,
        showInfo: true,
        showProcessing: true,
        showPagination: true
    });

    static SIMPLE_SETTINGS: DataTableSettings = DataTableConfig.getDataTableSettings({
        searching: true,
        showFilter: false,
        showLength: false,
        showButtons: false,
        showInfo: false,
        showProcessing: false,
        showPagination: false,
        paging: false
    });

    static getDataTableSettings(options: DataTableConfigOptions): DataTableSettings {

        const customSettings: DataTableSettings = {
            dom: this.SHOW_TABLE,
            buttons: [],
            language: dtLanguageDefinitionPt,
            responsive: true
        };
        let preTableElements = "";
        let postTableElements = "";

        if (options.showFilter) {
            preTableElements = preTableElements += this.SHOW_FILTER;
        }
        if (options.showButtons || (options.buttons && options.buttons.length > 0)) {
            preTableElements = preTableElements += this.SHOW_BUTTONS;
        }
        if (options.showProcessing) { preTableElements = preTableElements += this.SHOW_PROCESSING; }
        if (options.showInfo) {
            postTableElements = postTableElements += this.SHOW_INFO;
        }
        if (options.showLength) {
            postTableElements = postTableElements += this.SHOW_LENGTH;
        }
        if (options.showPagination) {
            options.paging = true;
            postTableElements = postTableElements += this.SHOW_PAGINATION;
        }
        if (options.buttons && options.buttons.length > 0) {
            customSettings.buttons = options.buttons;
        }
        if (options.menuLength && options.menuLength.length > 0) {
            customSettings.lengthMenu = options.menuLength;
        }
        const dtDom = preTableElements + this.SHOW_TABLE + postTableElements;
        customSettings.dom = dtDom;
        customSettings.paging = (options.paging === false) ? options.paging : true;
        customSettings.searching = (options.searching === false) ? options.searching : true;
        customSettings.configOptions = options;
        return customSettings;
    }
}

