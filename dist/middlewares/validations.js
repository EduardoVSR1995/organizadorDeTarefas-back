var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { creatuserSchema, authorizationSchema, creatassignmentSchema } from '../schemas/schemas.js';
import * as repositors from '../repositoris/repositors.js';
import bcrypt from 'bcrypt';
function aux(_a) {
    var value = _a.value;
    return value.slice(17);
}
function creatUservalid(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var name, value, rows, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    name = req.body.name;
                    value = creatuserSchema.validate(req.body, { abortEarly: false });
                    if (value.error)
                        return [2 /*return*/, res.status(401).send(aux({ value: value.error.stack }))];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, repositors.getItem({ table: "users", colun: "name", iten: name })];
                case 2:
                    rows = _a.sent();
                    if (rows.length > 0)
                        return [2 /*return*/, res.status(400).send("user already registered")];
                    next();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    res.sendStatus(400);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function creatAssignmentValid(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, name, password, value, rows, comparer, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, name = _a.name, password = _a.password;
                    value = creatuserSchema.validate(req.body, { abortEarly: false });
                    if (value.error)
                        return [2 /*return*/, res.status(401).send(aux({ value: value.error.stack }))];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, repositors.getItem({ table: "users", colun: "name", iten: name })];
                case 2:
                    rows = _b.sent();
                    if (rows.length === 0)
                        return [2 /*return*/, res.status(400).send("user not registerede")];
                    comparer = bcrypt.compareSync(password, rows[0].password);
                    if (!comparer)
                        return [2 /*return*/, res.sendStatus(401)];
                    res.locals = rows;
                    next();
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _b.sent();
                    res.sendStatus(400);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function authorization(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var value, token, rows, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    value = authorizationSchema.validate({ authorization: req.headers.authorization }, { abortEarly: false });
                    if (value.error)
                        return [2 /*return*/, res.status(401).send(aux({ value: value.error.stack }))];
                    token = req.headers.authorization.replace('Bearer ', '');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, repositors.getItem({ table: "login", colun: "token", iten: token })];
                case 2:
                    rows = _a.sent();
                    if (rows.length === 0)
                        return [2 /*return*/, res.sendStatus(401)];
                    res.locals = rows;
                    next();
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    res.sendStatus(400);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function autorizationAssignment(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var name, value, rows, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    name = req.body.name;
                    value = creatassignmentSchema.validate(req.body, { abortEarly: false });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, repositors.getItem({ table: "assignment", colun: "name", iten: name })];
                case 2:
                    rows = _a.sent();
                    if (rows.length > 0)
                        return [2 /*return*/, res.status(401).send("Activit name exist")];
                    if (value.error)
                        return [2 /*return*/, res.status(401).send(aux({ value: value.error.stack }))];
                    next();
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    res.sendStatus(400);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
export { creatUservalid, creatAssignmentValid, authorization, autorizationAssignment };
