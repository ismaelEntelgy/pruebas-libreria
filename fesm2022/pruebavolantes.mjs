import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i1 from 'primeng/button';
import { ButtonModule } from 'primeng/button';
import * as i2 from 'primeng/api';
import * as i3 from 'primeng/ripple';
import { RippleModule } from 'primeng/ripple';
import * as i4 from 'primeng/inputtext';
import { InputTextModule } from 'primeng/inputtext';
import * as i5 from 'primeng/menu';
import { MenuModule } from 'primeng/menu';
import * as i6 from 'primeng/menubar';
import { MenubarModule } from 'primeng/menubar';
import * as i7 from 'primeng/steps';
import { StepsModule } from 'primeng/steps';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import * as i1$1 from '@angular/router';
import { RouterModule } from '@angular/router';
import { MegaMenuModule } from 'primeng/megamenu';
import { DataViewModule } from 'primeng/dataview';
import { PickListModule } from 'primeng/picklist';
import { OrderListModule } from 'primeng/orderlist';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';

class VolantesICAMComponent {
    constructor() {
        this.plainMenuItems = [];
        this.megaMenuItemsH = [];
        this.routeItems = [];
        this.items = [];
    }
    ngOnInit() {
        this.plainMenuItems = [
            {
                label: 'Colegiados',
                items: [
                    {
                        label: 'Ver datos colegiados',
                        icon: 'pi pi-fw pi-user'
                    },
                    {
                        label: 'Histórico de volantes de colegiado',
                        icon: 'pi pi-fw pi-book'
                    }
                ]
            },
            {
                label: 'Volantes',
                items: [
                    {
                        label: 'Búsqueda de volantes',
                        icon: 'pi pi-fw pi-search'
                    }
                ]
            }
        ];
        this.routeItems = [
            { label: 'Colegiado', routerLink: 'colegiado' },
            { label: 'Designación', routerLink: 'designacion' },
            { label: 'Datos visita prisión', routerLink: 'datosvisita' },
            { label: 'Acciones finales', routerLink: 'acciones' },
        ];
        this.items = [
            {
                label: 'Volantes de prisión',
                icon: 'pi pi-fw pi-tag'
            },
            {
                label: 'Volantes Web',
                icon: 'pi pi-fw pi-desktop'
            },
            {
                label: 'Consultas',
                icon: 'pi pi-fw pi-search',
                items: [
                    {
                        label: 'Consulta de volantes',
                        icon: 'pi pi-fw pi-eye'
                    }
                ]
            }
        ];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: VolantesICAMComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: VolantesICAMComponent, selector: "prueba-volantes", ngImport: i0, template: "<div class=\"grid\" style=\"padding: 20px;\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card p-4 border-1 surface-border shadow-2\">\r\n\r\n            <ng-content select=\"[header]\"></ng-content>\r\n            \r\n            <div class=\"col-12 md:col-12\">\r\n                <p-menubar [model]=\"items\">\r\n                    <ng-template pTemplate=\"end\">\r\n                        <span class=\"p-input-icon-right\">\r\n                            <input type=\"text\" pInputText placeholder=\"Search\">\r\n                            <i class=\"pi pi-search\"></i>\r\n                        </span>\r\n                    </ng-template>\r\n                </p-menubar>\r\n            </div>\r\n\r\n            <div class=\"grid\">\r\n            <!-- Men\u00FA a la izquierda-->\r\n            <div class=\"col-12 md:col-2\" style=\"margin-top: 5%;\">\r\n                <p-menu [model]=\"plainMenuItems\"></p-menu>\r\n            </div>\r\n\r\n            <!-- Contenedor del formulario a la derecha -->\r\n            <div class=\"col-12 md:col-10\">\r\n                <div class=\"col-12\">\r\n                    <p-steps [model]=\"routeItems\" styleClass=\"mt-5\" [readonly]=\"false\"></p-steps>\r\n                </div>\r\n                <div class=\"card mt-5\">\r\n                    <h5>Datos del colegiado</h5>\r\n                    <div class=\"p-fluid p-formgrid grid\">\r\n                        <div class=\"field col-12 md:col-3\">\r\n                            <label htmlFor=\"Cronologico\">Cronol\u00F3gico</label>\r\n                            <input pInputText id=\"Cronologico\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"field col-12 md:col-3\">\r\n                            <label htmlFor=\"Colegiado\">Colegiado</label>\r\n                            <input pInputText id=\"Colegiado\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"field col-12 md:col-3\">\r\n                            <label htmlFor=\"DNI\">DNI</label>\r\n                            <input pInputText id=\"DNI\" type=\"text\" />\r\n                        </div>\r\n\r\n                        <div class=\"field col-12 md:col-3\">\r\n                            <div class=\"flex\">\r\n                                <button pButton pRipple type=\"button\" label=\"Buscar\" class=\"p-button-secondary\" style=\"margin-right: 10px;\"></button>\r\n                                <button pButton pRipple type=\"button\" label=\"Limpiar\"></button>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"field col-12 md:col-4\">\r\n                            <label htmlFor=\"primerApellido\">Primer Apellido</label>\r\n                            <input pInputText id=\"primerApellido\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"field col-12 md:col-4\">\r\n                            <label htmlFor=\"segundoApellido\">Segundo Apellido</label>\r\n                            <input pInputText id=\"segundoApellido\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"field col-12 md:col-4\">\r\n                            <label htmlFor=\"nombre\">Nombre Apellido</label>\r\n                            <input pInputText id=\"nombre\" type=\"text\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n", styles: [""], dependencies: [{ kind: "directive", type: i1.ButtonDirective, selector: "[pButton]", inputs: ["iconPos", "loadingIcon", "label", "icon", "loading"] }, { kind: "directive", type: i2.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "directive", type: i3.Ripple, selector: "[pRipple]" }, { kind: "directive", type: i4.InputText, selector: "[pInputText]" }, { kind: "component", type: i5.Menu, selector: "p-menu", inputs: ["model", "popup", "style", "styleClass", "appendTo", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions"], outputs: ["onShow", "onHide"] }, { kind: "component", type: i6.Menubar, selector: "p-menubar", inputs: ["model", "style", "styleClass", "autoZIndex", "baseZIndex", "autoDisplay", "autoHide", "autoHideDelay"] }, { kind: "component", type: i7.Steps, selector: "p-steps", inputs: ["activeIndex", "model", "readonly", "style", "styleClass"], outputs: ["activeIndexChange"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: VolantesICAMComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prueba-volantes', template: "<div class=\"grid\" style=\"padding: 20px;\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card p-4 border-1 surface-border shadow-2\">\r\n\r\n            <ng-content select=\"[header]\"></ng-content>\r\n            \r\n            <div class=\"col-12 md:col-12\">\r\n                <p-menubar [model]=\"items\">\r\n                    <ng-template pTemplate=\"end\">\r\n                        <span class=\"p-input-icon-right\">\r\n                            <input type=\"text\" pInputText placeholder=\"Search\">\r\n                            <i class=\"pi pi-search\"></i>\r\n                        </span>\r\n                    </ng-template>\r\n                </p-menubar>\r\n            </div>\r\n\r\n            <div class=\"grid\">\r\n            <!-- Men\u00FA a la izquierda-->\r\n            <div class=\"col-12 md:col-2\" style=\"margin-top: 5%;\">\r\n                <p-menu [model]=\"plainMenuItems\"></p-menu>\r\n            </div>\r\n\r\n            <!-- Contenedor del formulario a la derecha -->\r\n            <div class=\"col-12 md:col-10\">\r\n                <div class=\"col-12\">\r\n                    <p-steps [model]=\"routeItems\" styleClass=\"mt-5\" [readonly]=\"false\"></p-steps>\r\n                </div>\r\n                <div class=\"card mt-5\">\r\n                    <h5>Datos del colegiado</h5>\r\n                    <div class=\"p-fluid p-formgrid grid\">\r\n                        <div class=\"field col-12 md:col-3\">\r\n                            <label htmlFor=\"Cronologico\">Cronol\u00F3gico</label>\r\n                            <input pInputText id=\"Cronologico\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"field col-12 md:col-3\">\r\n                            <label htmlFor=\"Colegiado\">Colegiado</label>\r\n                            <input pInputText id=\"Colegiado\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"field col-12 md:col-3\">\r\n                            <label htmlFor=\"DNI\">DNI</label>\r\n                            <input pInputText id=\"DNI\" type=\"text\" />\r\n                        </div>\r\n\r\n                        <div class=\"field col-12 md:col-3\">\r\n                            <div class=\"flex\">\r\n                                <button pButton pRipple type=\"button\" label=\"Buscar\" class=\"p-button-secondary\" style=\"margin-right: 10px;\"></button>\r\n                                <button pButton pRipple type=\"button\" label=\"Limpiar\"></button>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"field col-12 md:col-4\">\r\n                            <label htmlFor=\"primerApellido\">Primer Apellido</label>\r\n                            <input pInputText id=\"primerApellido\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"field col-12 md:col-4\">\r\n                            <label htmlFor=\"segundoApellido\">Segundo Apellido</label>\r\n                            <input pInputText id=\"segundoApellido\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"field col-12 md:col-4\">\r\n                            <label htmlFor=\"nombre\">Nombre Apellido</label>\r\n                            <input pInputText id=\"nombre\" type=\"text\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n" }]
        }] });

class VolantesICAMRoutingModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: VolantesICAMRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: VolantesICAMRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: VolantesICAMRoutingModule, imports: [RouterModule.forChild([
                { path: '', component: VolantesICAMComponent }
            ]), RouterModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: VolantesICAMRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild([
                            { path: '', component: VolantesICAMComponent }
                        ])],
                    exports: [RouterModule]
                }]
        }] });

// import { HeaderModule } from 'src/app/demo/components/pages/header/header.module';
class VolantesICAMModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: VolantesICAMModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: VolantesICAMModule, declarations: [VolantesICAMComponent], imports: [CommonModule,
            FormsModule,
            InputTextareaModule,
            VolantesICAMRoutingModule,
            ButtonModule,
            RippleModule,
            InputTextModule,
            // AppConfigModule,
            DataViewModule,
            PickListModule,
            OrderListModule,
            DropdownModule,
            RatingModule,
            ButtonModule,
            MenuModule,
            MegaMenuModule,
            MenubarModule,
            StepsModule], exports: [VolantesICAMComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: VolantesICAMModule, imports: [CommonModule,
            FormsModule,
            InputTextareaModule,
            VolantesICAMRoutingModule,
            ButtonModule,
            RippleModule,
            InputTextModule,
            // AppConfigModule,
            DataViewModule,
            PickListModule,
            OrderListModule,
            DropdownModule,
            RatingModule,
            ButtonModule,
            MenuModule,
            MegaMenuModule,
            MenubarModule,
            StepsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: VolantesICAMModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        InputTextareaModule,
                        VolantesICAMRoutingModule,
                        ButtonModule,
                        RippleModule,
                        InputTextModule,
                        // AppConfigModule,
                        DataViewModule,
                        PickListModule,
                        OrderListModule,
                        DropdownModule,
                        RatingModule,
                        ButtonModule,
                        MenuModule,
                        MegaMenuModule,
                        MenubarModule,
                        StepsModule,
                        // HeaderModule
                    ],
                    declarations: [
                        VolantesICAMComponent
                    ],
                    exports: [
                        VolantesICAMComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of pruebavolantes
 */

/**
 * Generated bundle index. Do not edit.
 */

export { VolantesICAMComponent, VolantesICAMModule };
//# sourceMappingURL=pruebavolantes.mjs.map
