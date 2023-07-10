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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
import { Users } from "./users.model";
import { Resolver, Query } from "@nestjs/graphql";
export let UsersResolver = (() => {
    let _classDecorators = [Resolver(of => Users)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _allusers_decorators;
    let _user_decorators;
    let _removeuser_decorators;
    let _adduser_decorators;
    var UsersResolver = _classThis = class {
        constructor(usersService) {
            this.usersService = (__runInitializers(this, _instanceExtraInitializers), usersService);
        }
        allusers() {
            return __awaiter(this, void 0, void 0, function* () {
                return this.usersService.findAll();
            });
        }
        user(email) {
            return __awaiter(this, void 0, void 0, function* () {
                return this.usersService.findOne(email);
            });
        }
        removeuser(email) {
            return __awaiter(this, void 0, void 0, function* () {
                return this.usersService.remove(email);
            });
        }
        adduser(firstname, lastname, email, gender, password, isActive) {
            return __awaiter(this, void 0, void 0, function* () {
                return this.usersService.addUser(firstname, lastname, email, gender, password, isActive);
            });
        }
    };
    __setFunctionName(_classThis, "UsersResolver");
    (() => {
        _allusers_decorators = [Query(returns => [Users])];
        _user_decorators = [Query(returns => Users)];
        _removeuser_decorators = [Query(returns => Users)];
        _adduser_decorators = [Query(returns => Users)];
        __esDecorate(_classThis, null, _allusers_decorators, { kind: "method", name: "allusers", static: false, private: false, access: { has: obj => "allusers" in obj, get: obj => obj.allusers } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _user_decorators, { kind: "method", name: "user", static: false, private: false, access: { has: obj => "user" in obj, get: obj => obj.user } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _removeuser_decorators, { kind: "method", name: "removeuser", static: false, private: false, access: { has: obj => "removeuser" in obj, get: obj => obj.removeuser } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _adduser_decorators, { kind: "method", name: "adduser", static: false, private: false, access: { has: obj => "adduser" in obj, get: obj => obj.adduser } }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        UsersResolver = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UsersResolver = _classThis;
})();
