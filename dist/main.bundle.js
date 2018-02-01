webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  This is about page.\n</p>\n\n<p>\n  <button\n    type=\"button\"\n    (click)=\"takeMeHome()\">\n    <strong>< HOME</strong>\n</button>\n</p>\n\n\n<ul >\n  <li *ngFor=\"let comment of comments\">{{ comment }}</li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_state_service__ = __webpack_require__("../../../../../src/app/services/state.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutComponent = (function () {
    function AboutComponent(route, router, _state) {
        this.route = route;
        this.router = router;
        this._state = _state;
        this.route.params.subscribe(function (res) { return console.log(res.id); });
    }
    AboutComponent.prototype.ngOnInit = function () {
        // this._state.commentObs.subscribe(res => this.comments = res);
    };
    AboutComponent.prototype.takeMeHome = function () {
        this.router.navigate(['']);
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_state_service__["a" /* StateService */]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'about/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <ul>\n\t<li><a routerLink=\"\">Home</a></li>\n\t<li><a routerLink=\"about/21\">About</a></li>\n</ul> -->\n\n<div class=\"content-container\">\n\t<router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-container {\n  margin: 0 auto;\n  max-width: 980px;\n  border: 1px solid #dddfe3;\n  background-color: #ffffff;\n  padding: 30px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// decorator
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
        // logic for application
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__avatars_avatars_component__ = __webpack_require__("../../../../../src/app/avatars/avatars.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__comments_comments_component__ = __webpack_require__("../../../../../src/app/comments/comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__polls_polls_component__ = __webpack_require__("../../../../../src/app/polls/polls.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__polls_card_card_component__ = __webpack_require__("../../../../../src/app/polls/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__polls_voter_voter_component__ = __webpack_require__("../../../../../src/app/polls/voter/voter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 // animations module











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_8__avatars_avatars_component__["a" /* AvatarsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__comments_comments_component__["a" /* CommentsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__polls_polls_component__["a" /* PollsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__polls_card_card_component__["a" /* CardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__polls_voter_voter_component__["a" /* VoterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__services__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_13__services__["c" /* StateService */], __WEBPACK_IMPORTED_MODULE_13__services__["b" /* LocalStoreService */], __WEBPACK_IMPORTED_MODULE_13__services__["d" /* WebsocketService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/avatars/avatars.component.html":
/***/ (function(module, exports) {

module.exports = "<button\n\t*ngFor=\"let value of values\"\n\t(click)=\"setAvatar(value)\">{{ value }}\n</button>\n"

/***/ }),

/***/ "../../../../../src/app/avatars/avatars.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/avatars/avatars.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvatarsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_actions__ = __webpack_require__("../../../../../src/app/shared/actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AvatarsComponent = (function () {
    function AvatarsComponent(_state, _api, _localStore) {
        this._state = _state;
        this._api = _api;
        this._localStore = _localStore;
        this.values = ['JH', 'ML', 'KS', 'LR'];
    }
    AvatarsComponent.prototype.ngOnInit = function () {
        var avatar = this._localStore.getAvatar();
        if (avatar) {
            console.log("AvatarsComponent: avatar found! " + avatar);
            this.setAvatar(avatar);
        }
    };
    AvatarsComponent.prototype.setAvatar = function (avatar) {
        this._localStore.setAvatar(avatar);
        this._api.send({ action: __WEBPACK_IMPORTED_MODULE_2__shared_actions__["a" /* Action */].UpdateAvatar, value: avatar });
    };
    AvatarsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'avatars',
            template: __webpack_require__("../../../../../src/app/avatars/avatars.component.html"),
            styles: [__webpack_require__("../../../../../src/app/avatars/avatars.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services__["c" /* StateService */], __WEBPACK_IMPORTED_MODULE_1__services__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1__services__["b" /* LocalStoreService */]])
    ], AvatarsComponent);
    return AvatarsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/comments/comments.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container color-dark\">\n\t<div class=\"col\">\n\t\t<p>Add a comment here</p>\n\t</div>\n\n\t<div class=\"col\">\n\t\t<p>Comments ({{ comments.length }})</p>\n\t</div>\n</div>\n\n<div class=\"container color-light\" [@comments]=\"comments.length\">\n\t<div class=\"col\">\n\t\t<p class=\"sm\">Use this input to add new comment</p>\n\t\t<form>\n\t\t\t<input \n\t\t\t\ttype=\"text\" \n\t\t\t\tplaceholder=\"Enter snarky remark here\" \n\t\t\t\tname=\"item\" \n\t\t\t\tclass=\"txt\" \n\t\t\t\t[(ngModel)]=\"commentText\">\n\t\t\t<input\n\t\t\t\ttype=\"submit\" \n\t\t\t\tclass=\"btn\" \n\t\t\t\t[value]=\"btnText\"\n\t\t\t\t(click)=\"addItem()\">\n\t\t</form>\n\t</div>\n\n\t<div class=\"col\">\n\t\t<p \n\t\t\tclass=\"life-container\" \n\t\t\t*ngFor=\"let comment of comments; let i = index\"\n\t\t\t(click)=\"removeItem(i)\">\n\t\t\t{{ comment }}\n\t\t</p>\n\t</div>\n</div>\n\n<!-- <button type=\"button\" (click)=\"sendMessage()\">SEND</button> -->"

/***/ }),

/***/ "../../../../../src/app/comments/comments.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 50% auto;\n      grid-template-columns: 50% auto;\n  color: #fff; }\n\n.col {\n  padding: .4em 1.3em; }\n\n.color-dark {\n  background: #2885C4; }\n\n.color-light {\n  background: #57B3F1; }\n\ninput.txt {\n  border: 0;\n  padding: 1em;\n  width: 80%;\n  margin-bottom: 2em; }\n\ninput.btn {\n  border: 0;\n  display: block;\n  padding: 1em 3em;\n  background: #A5F883;\n  color: #003A61;\n  margin-bottom: 1em;\n  cursor: pointer; }\n\n.life-container {\n  background: #3FA0E1;\n  padding: .5em;\n  font-weight: bold;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comments/comments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_state_service__ = __webpack_require__("../../../../../src/app/services/state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_actions__ = __webpack_require__("../../../../../src/app/shared/actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CommentsComponent = (function () {
    function CommentsComponent(_state, _api) {
        this._state = _state;
        this._api = _api;
        this.btnText = 'Add Comment';
        this.commentText = '';
        this.comments = [];
    }
    CommentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._state.commentable.subscribe(function (res) { return _this.comments = res; });
        this.emitChange();
        // this._api.messages.subscribe(msg => {
        //   this.comments.push(msg.value);
        //   this.commentText = '';
        //   this.emitChange();
        // })
    };
    CommentsComponent.prototype.addItem = function () {
        // this.comments.push(this.commentText);
        this._api.send({ action: __WEBPACK_IMPORTED_MODULE_4__shared_actions__["a" /* Action */].NewComment, value: this.commentText });
        // this.commentText = '';
        // this.emitChange();
    };
    CommentsComponent.prototype.removeItem = function (i) {
        this.comments.splice(i, 1);
        this.emitChange();
    };
    CommentsComponent.prototype.emitChange = function () {
        this._state.updateCommentObs(this.comments);
    };
    CommentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-comments',
            template: __webpack_require__("../../../../../src/app/comments/comments.component.html"),
            styles: [__webpack_require__("../../../../../src/app/comments/comments.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* trigger */])('comments', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('* => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 0 }), { optional: true }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* stagger */])('300ms', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('.6s ease-in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* keyframes */])([
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 0.5, transform: 'translateY(35%)', offset: 0.3 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 1, transform: 'translateY(0)', offset: 1 })
                            ]))
                        ]), { optional: true }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':leave', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* stagger */])('300ms', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('.6s ease-in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* keyframes */])([
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 0.5, transform: 'translateY(35%)', offset: 0.3 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 0, transform: 'translateY(-75%)', offset: 1 })
                            ]))
                        ]), { optional: true })
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_state_service__["a" /* StateService */], __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */]])
    ], CommentsComponent);
    return CommentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<polls></polls>\n<avatars></avatars>\n<!-- <app-comments></app-comments> -->"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/polls/Result.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Result; });
var Result;
(function (Result) {
    Result[Result["Same"] = 0] = "Same";
    Result[Result["Different"] = 1] = "Different";
})(Result || (Result = {}));


/***/ }),

/***/ "../../../../../src/app/polls/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<div \n\tclass=\"polls__card\"\n\t[ngClass]=\"{ 'selected': selected===true, 'voted': voted===true }\"\n\t(click)=\"vote()\">\n\t{{ value }}\n</div>"

/***/ }),

/***/ "../../../../../src/app/polls/card/card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".polls__card {\n  display: inline-block;\n  min-width: 50px;\n  height: 70px;\n  margin: 0;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);\n  border: 1px solid transparent;\n  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);\n  border-radius: 4px;\n  font-size: 22px;\n  text-align: center;\n  line-height: 70px;\n  cursor: pointer;\n  color: #3e352f;\n  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);\n  background-color: #e0d9cf;\n  margin: 0 10px; }\n\n.polls__card.voted {\n  opacity: 0.5;\n  cursor: default; }\n\n.polls__card.selected {\n  background-color: gold;\n  opacity: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/polls/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_state_service__ = __webpack_require__("../../../../../src/app/services/state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_actions__ = __webpack_require__("../../../../../src/app/shared/actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CardComponent = (function () {
    function CardComponent(_state, _api) {
        this._state = _state;
        this._api = _api;
        this.voted = false;
        this.selected = false;
    }
    CardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._state.user.subscribe(function (u) {
            _this.voted = u.voted;
            if (!u.voted) {
                _this.selected = false;
            }
        });
    };
    CardComponent.prototype.vote = function () {
        this.selected = true;
        this._api.send({ action: __WEBPACK_IMPORTED_MODULE_3__shared_actions__["a" /* Action */].NewVote, value: this.value });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "value", void 0);
    CardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'polls-card',
            template: __webpack_require__("../../../../../src/app/polls/card/card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/polls/card/card.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_state_service__["a" /* StateService */], __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/polls/polls.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-container\">\n    <h3>Choose your estimate...</h3>\n\t<br>\n\t\n    <polls-card\n      *ngFor=\"let cardValue of cardValues\"\n      [value]=\"cardValue\">\n\t</polls-card>\n\t\n</div>\n\n<div class=\"card-container\">\n    <p>{{ estimateMessage }}</p>\n    <br>    \n\n    <polls-voter\n      *ngFor=\"let voter of voters; trackBy: trackByVoter\"\n\t  [voter]=\"voter\"\n\t  [result]=\"result\">\n\t</polls-voter>\n\n</div>\n\n<button \n\tclass=\"btn btn-primary btn-sm\"\n\ttype=\"button\"\n\t(click)=\"reveal()\">\n\tReveal\n</button>  \n\n<button \n    class=\"btn btn-primary btn-sm\"\n    type=\"button\"\n    (click)=\"reset()\">\n    Reset\n</button>  \n"

/***/ }),

/***/ "../../../../../src/app/polls/polls.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-container {\n  padding: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/polls/polls.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PollsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_state_service__ = __webpack_require__("../../../../../src/app/services/state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Result_enum__ = __webpack_require__("../../../../../src/app/polls/Result.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CARD_VALUES = ['1', '2', '3', '5', '8', '13', '21', '?'];
var PollsComponent = (function () {
    function PollsComponent(_state, _api) {
        this._state = _state;
        this._api = _api;
        this.voters = [];
        this.cardValues = CARD_VALUES;
    }
    PollsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._state.user.subscribe(function (u) {
            _this.estimateMessage = u.voted && u.vote ? "Your current estimate: " + u.vote : "You haven't estimated yet";
        });
        this._state.voters.subscribe(function (voters) {
            _this.voters = voters;
            _this.updateResult(voters);
        });
    };
    PollsComponent.prototype.trackByVoter = function (index, voter) { return voter.id; };
    PollsComponent.prototype.reset = function () {
        this._state.resetVotes();
    };
    PollsComponent.prototype.reveal = function () {
        this._state.revealVotes();
    };
    PollsComponent.prototype.updateResult = function (voters) {
        this.result = this.sameResult(voters) ? __WEBPACK_IMPORTED_MODULE_3__Result_enum__["a" /* Result */].Same : __WEBPACK_IMPORTED_MODULE_3__Result_enum__["a" /* Result */].Different;
    };
    PollsComponent.prototype.sameResult = function (voters) {
        var vote;
        for (var i = 0; i < voters.length; i++) {
            if (vote === undefined) {
                vote = voters[i].vote;
            }
            if (voters[i].vote !== vote) {
                return false;
            }
        }
        return true;
    };
    PollsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'polls',
            template: __webpack_require__("../../../../../src/app/polls/polls.component.html"),
            styles: [__webpack_require__("../../../../../src/app/polls/polls.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_state_service__["a" /* StateService */], __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]])
    ], PollsComponent);
    return PollsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/polls/voter/voter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"polls__voter flip-container\"\n\t[ngClass]=\"{\n\t\t'is_current_user': isCurrentUser, \n\t\t'voted': voter.voted,\n\t\t'flip': voter.voted && voter.reveal}\"\n\t(click)=\"cancelVote()\"\n\tontouchstart=\"this.classList.toggle('hover');\">\n\t<div class=\"flipper\">\n\t\t<div class=\"front\">\n\t\t\t<span *ngIf='voter.voted'>×</span>\t\t\t\t\n\t\t</div>\n\t\t<div class=\"back\"\n\t\t\t[ngClass]=\"{ 'green': result === Result.Same }\">\n\t\t\t{{ voter.avatar }}\n\t\t\t{{ voter.vote }}\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/polls/voter/voter.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".polls__voter {\n  display: inline-block;\n  width: 50px;\n  height: 70px;\n  margin-right: 20px; }\n\n.polls__voter .front span {\n  transition: 0.3s;\n  font-size: 24px;\n  line-height: 60px;\n  color: #5d4f46; }\n\n.polls__voter.is_current_user.voted .front,\n.polls__voter.is_current_user.voted .back {\n  background-color: gold;\n  cursor: pointer; }\n\n.polls__voter.is_current_user .front,\n.polls__voter.is_current_user .back {\n  background-color: #fff5c1;\n  cursor: pointer; }\n\n.polls__voter.voted .front,\n.polls__voter.voted .back {\n  background-color: #dbd3c9; }\n\n.polls__voter.voted .back.green {\n  background-color: #7ccd7c; }\n\n.polls__voter .front,\n.polls__voter .back {\n  background-color: #efeeee; }\n\n.front, .back {\n  width: 50px;\n  height: 70px;\n  border-radius: 4px;\n  text-align: center;\n  cursor: default;\n  color: #3e352f;\n  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);\n  border: 1px solid #BBB;\n  overflow: hidden;\n  transition: 0.3s;\n  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05); }\n\n.flip-container {\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d; }\n\n.flip-container.flip .flipper {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg); }\n\n.flipper {\n  transition: 0.6s;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  position: relative; }\n\n.front, .back {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n.front {\n  z-index: 2;\n  -webkit-transform: rotateY(0deg);\n          transform: rotateY(0deg); }\n\n.back {\n  -webkit-transform: rotateY(-180deg);\n          transform: rotateY(-180deg); }\n\n.vertical.flip-container {\n  position: relative; }\n\n.vertical .back {\n  -webkit-transform: rotateX(180deg);\n          transform: rotateX(180deg); }\n\n.vertical.flip-container:hover .back {\n  -webkit-transform: rotateX(0deg);\n          transform: rotateX(0deg); }\n\n.vertical.flip-container:hover .front {\n  -webkit-transform: rotateX(180deg);\n          transform: rotateX(180deg); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/polls/voter/voter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_state_service__ = __webpack_require__("../../../../../src/app/services/state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_actions__ = __webpack_require__("../../../../../src/app/shared/actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Result_enum__ = __webpack_require__("../../../../../src/app/polls/Result.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VoterComponent = (function () {
    function VoterComponent(_state, _api) {
        this._state = _state;
        this._api = _api;
        this.Result = __WEBPACK_IMPORTED_MODULE_4__Result_enum__["a" /* Result */];
    }
    VoterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._state.user.subscribe(function (currentUser) {
            _this.currentUser = currentUser;
            _this.isCurrentUser = _this.voter.id === currentUser.id;
        });
    };
    VoterComponent.prototype.cancelVote = function () {
        if (this.isCurrentUser && this.currentUser.voted) {
            this._api.send({ action: __WEBPACK_IMPORTED_MODULE_3__shared_actions__["a" /* Action */].CancelVote });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], VoterComponent.prototype, "voter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], VoterComponent.prototype, "result", void 0);
    VoterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'polls-voter',
            template: __webpack_require__("../../../../../src/app/polls/voter/voter.component.html"),
            styles: [__webpack_require__("../../../../../src/app/polls/voter/voter.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_state_service__["a" /* StateService */], __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]])
    ], VoterComponent);
    return VoterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__websocket_service__ = __webpack_require__("../../../../../src/app/services/websocket.service.ts");
// reference: https://tutorialedge.net/typescript/angular/angular-socket-io-tutorial/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = (function () {
    function ApiService(wsService) {
        this.wsService = wsService;
        this.messages = wsService
            .connect()
            .map(function (response) {
            return response;
        });
    }
    ApiService.prototype.send = function (data) {
        this.messages.next(data);
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__websocket_service__["a" /* WebsocketService */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "../../../../../src/app/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__local_store_service__ = __webpack_require__("../../../../../src/app/services/local-store.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__local_store_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state_service__ = __webpack_require__("../../../../../src/app/services/state.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__state_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__websocket_service__ = __webpack_require__("../../../../../src/app/services/websocket.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__websocket_service__["a"]; });






/***/ }),

/***/ "../../../../../src/app/services/local-store.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStoreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var avatarKey = 'duku-avatar';
var LocalStoreService = (function () {
    function LocalStoreService() {
    }
    LocalStoreService.prototype.getAvatar = function () {
        return localStorage.getItem(avatarKey);
    };
    LocalStoreService.prototype.setAvatar = function (avatar) {
        localStorage.setItem(avatarKey, avatar);
    };
    LocalStoreService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], LocalStoreService);
    return LocalStoreService;
}());



/***/ }),

/***/ "../../../../../src/app/services/state.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_actions__ = __webpack_require__("../../../../../src/app/shared/actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StateService = (function () {
    function StateService(_api) {
        var _this = this;
        this._api = _api;
        this.user = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]({
            id: '',
            avatar: '★',
            voted: false,
            vote: undefined,
            reveal: false
        });
        this.voters = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.commentable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](['Welcome to Helios agile board!']);
        var userId;
        this._api.messages.subscribe(function (msg) {
            switch (msg.action) {
                case __WEBPACK_IMPORTED_MODULE_4__shared_actions__["a" /* Action */].CurrentUser:
                    var user = msg.value;
                    userId = user.id;
                    _this.user.next(user);
                    break;
                case __WEBPACK_IMPORTED_MODULE_4__shared_actions__["a" /* Action */].UpdateUsers:
                    var users = msg.value; // users hash from server
                    _this.user.next(users[userId]);
                    _this.voters.next(Object.values(users));
                    break;
                default:
                    console.log("Default action: " + msg);
            }
        });
    }
    StateService.prototype.updateUser = function (options) {
        var _this = this;
        this.user.take(1).subscribe(function (u) {
            var user = Object.assign({}, u, options);
            _this.user.next(user);
        });
    };
    StateService.prototype.updateCommentObs = function (comments) {
        this.commentable.next(comments);
    };
    StateService.prototype.resetVotes = function () {
        this._api.send({ action: __WEBPACK_IMPORTED_MODULE_4__shared_actions__["a" /* Action */].ResetVotes });
    };
    StateService.prototype.revealVotes = function () {
        this._api.send({ action: __WEBPACK_IMPORTED_MODULE_4__shared_actions__["a" /* Action */].RevealVotes });
    };
    StateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */]])
    ], StateService);
    return StateService;
}());



/***/ }),

/***/ "../../../../../src/app/services/websocket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
// reference: https://tutorialedge.net/typescript/angular/angular-socket-io-tutorial/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { environment } from '../environments/environment';
var WebsocketService = (function () {
    function WebsocketService() {
    }
    WebsocketService.prototype.connect = function () {
        var _this = this;
        // you can hard code `environment.ws_url` as `http://localhost:5000`
        // this.socket = io(environment.ws_url);
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__("https://helios-tuddle.herokuapp.com/");
        // this.socket = io(`http://localhost:3000`);
        // We define our observable which will observe any incoming messages
        // from our socket.io server.
        var observable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on('message', function (data) {
                console.log('Websocket Server: ', data);
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        // We define our Observer which will listen to messages
        // from our other components and send messages back to our
        // socket server whenever the `next()` method is called.
        var observer = {
            next: function (data) {
                _this.socket.emit('message', JSON.stringify(data));
            },
        };
        // we return our Rx.Subject which is a combination
        // of both an observer and observable.
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Subject */].create(observer, observable);
    };
    WebsocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], WebsocketService);
    return WebsocketService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Action; });
var Action;
(function (Action) {
    Action["CurrentUser"] = "CURRENT_USER";
    Action["UpdateAvatar"] = "UPDATE_AVATAR";
    Action["UpdateUsers"] = "UPDATE_USERS";
    Action["NewComment"] = "NEW_COMMENT";
    Action["NewVote"] = "NEW_VOTE";
    Action["ResetVotes"] = "RESET_VOTES";
    Action["RevealVotes"] = "REVEAL_VOTES";
    Action["CancelVote"] = "CANCEL_VOTE";
})(Action || (Action = {}));


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map