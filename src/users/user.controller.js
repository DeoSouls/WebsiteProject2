var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
import { Controller, Get, Post } from '@nestjs/common';
export let UsersController = (() => {
    let _classDecorators = [Controller()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _getUsers_decorators;
    let _getUserOne_decorators;
    let _removeUser_decorators;
    let _addUser_decorators;
    var UsersController = _classThis = class {
        constructor(usersService) {
            this.usersService = (__runInitializers(this, _instanceExtraInitializers), usersService);
        }
        getUsers() {
            return this.usersService.findAll();
        }
        getUserOne(email) {
            return this.usersService.findOne(email);
        }
        removeUser(email) {
            return this.usersService.remove(email);
        }
        addUser(firstname, lastname, email, gender, password, isActive) {
            return this.usersService.addUser(firstname, lastname, email, gender, password, isActive);
        }
    };
    __setFunctionName(_classThis, "UsersController");
    (() => {
        _getUsers_decorators = [Get('/all_usr')];
        _getUserOne_decorators = [Post('/one_usr')];
        _removeUser_decorators = [Post('/remove')];
        _addUser_decorators = [Post('/add')];
        __esDecorate(_classThis, null, _getUsers_decorators, { kind: "method", name: "getUsers", static: false, private: false, access: { has: obj => "getUsers" in obj, get: obj => obj.getUsers } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getUserOne_decorators, { kind: "method", name: "getUserOne", static: false, private: false, access: { has: obj => "getUserOne" in obj, get: obj => obj.getUserOne } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _removeUser_decorators, { kind: "method", name: "removeUser", static: false, private: false, access: { has: obj => "removeUser" in obj, get: obj => obj.removeUser } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _addUser_decorators, { kind: "method", name: "addUser", static: false, private: false, access: { has: obj => "addUser" in obj, get: obj => obj.addUser } }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        UsersController = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UsersController = _classThis;
})();
