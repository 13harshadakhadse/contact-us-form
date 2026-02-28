import {
  BrowserModule,
  DomRendererFactory2
} from "./chunk-ODGF7NTW.js";
import "./chunk-M5CWCQBK.js";
import "./chunk-MDO3RQ6Z.js";
import {
  ANIMATION_MODULE_TYPE,
  DOCUMENT,
  Inject,
  Injectable,
  NgModule,
  NgZone,
  RendererFactory2,
  inject,
  performanceMarkFeature,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-IFRAXL25.js";
import "./chunk-RSS3ODKE.js";
import {
  __commonJS,
  __toESM
} from "./chunk-46DXP6YY.js";

// optional-peer-dep:__vite-optional-peer-dep:@angular/animations/browser:@angular/platform-browser:false
var require_platform_browser_false = __commonJS({
  "optional-peer-dep:__vite-optional-peer-dep:@angular/animations/browser:@angular/platform-browser:false"(exports, module) {
    module.exports = {};
    throw new Error(`Could not resolve "@angular/animations/browser" imported by "@angular/platform-browser". Is it installed?`);
  }
});

// node_modules/@angular/platform-browser/fesm2022/animations.mjs
var i1 = __toESM(require_platform_browser_false(), 1);
var import_browser = __toESM(require_platform_browser_false(), 1);
var InjectableAnimationEngine = class _InjectableAnimationEngine extends import_browser.ɵAnimationEngine {
  constructor(doc, driver, normalizer) {
    super(doc, driver, normalizer);
  }
  ngOnDestroy() {
    this.flush();
  }
  static ɵfac = function InjectableAnimationEngine_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InjectableAnimationEngine)(ɵɵinject(DOCUMENT), ɵɵinject(i1.AnimationDriver), ɵɵinject(i1.ɵAnimationStyleNormalizer));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _InjectableAnimationEngine,
    factory: _InjectableAnimationEngine.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InjectableAnimationEngine, [{
    type: Injectable
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: i1.AnimationDriver
  }, {
    type: i1.ɵAnimationStyleNormalizer
  }], null);
})();
function instantiateDefaultStyleNormalizer() {
  return new import_browser.ɵWebAnimationsStyleNormalizer();
}
function instantiateRendererFactory() {
  return new import_browser.ɵAnimationRendererFactory(inject(DomRendererFactory2), inject(import_browser.ɵAnimationEngine), inject(NgZone));
}
var SHARED_ANIMATION_PROVIDERS = [{
  provide: import_browser.ɵAnimationStyleNormalizer,
  useFactory: instantiateDefaultStyleNormalizer
}, {
  provide: import_browser.ɵAnimationEngine,
  useClass: InjectableAnimationEngine
}, {
  provide: RendererFactory2,
  useFactory: instantiateRendererFactory
}];
var BROWSER_NOOP_ANIMATIONS_PROVIDERS = [{
  provide: import_browser.AnimationDriver,
  useClass: import_browser.NoopAnimationDriver
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: "NoopAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var BROWSER_ANIMATIONS_PROVIDERS = [{
  provide: import_browser.AnimationDriver,
  useFactory: () => false ? new import_browser.NoopAnimationDriver() : new import_browser.ɵWebAnimationsDriver()
}, {
  provide: ANIMATION_MODULE_TYPE,
  useFactory: () => false ? "NoopAnimations" : "BrowserAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var BrowserAnimationsModule = class _BrowserAnimationsModule {
  static withConfig(config) {
    return {
      ngModule: _BrowserAnimationsModule,
      providers: config.disableAnimations ? BROWSER_NOOP_ANIMATIONS_PROVIDERS : BROWSER_ANIMATIONS_PROVIDERS
    };
  }
  static ɵfac = function BrowserAnimationsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowserAnimationsModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _BrowserAnimationsModule,
    exports: [BrowserModule]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: BROWSER_ANIMATIONS_PROVIDERS,
    imports: [BrowserModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();
function provideAnimations() {
  performanceMarkFeature("NgEagerAnimations");
  return [...BROWSER_ANIMATIONS_PROVIDERS];
}
var NoopAnimationsModule = class _NoopAnimationsModule {
  static ɵfac = function NoopAnimationsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoopAnimationsModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _NoopAnimationsModule,
    exports: [BrowserModule]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS,
    imports: [BrowserModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();
function provideNoopAnimations() {
  return [...BROWSER_NOOP_ANIMATIONS_PROVIDERS];
}
export {
  ANIMATION_MODULE_TYPE,
  BrowserAnimationsModule,
  NoopAnimationsModule,
  provideAnimations,
  provideNoopAnimations,
  InjectableAnimationEngine as ɵInjectableAnimationEngine
};
//# sourceMappingURL=@angular_platform-browser_animations.js.map
