import { ComponentFactoryResolver, Injector, Type, Component } from '@angular/core';

export interface ContextoInjecaoComponente {
  resolver: ComponentFactoryResolver;
  injector: Injector;
  componenteParaInjetar: any;
}
