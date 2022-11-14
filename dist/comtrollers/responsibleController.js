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
import * as repositors from '../repositoris/repositors.js';
function insertResponsible(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var params, usersId, rows, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    params = req.params.id;
                    usersId = res.locals[0].usersId;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, repositors.getItem({ table: "assignment", colun: "id", iten: params })];
                case 2:
                    rows = _a.sent();
                    if (rows.length === 0)
                        return [2 /*return*/, res.sendStatus(401)];
                    return [4 /*yield*/, repositors.insert({ table: "responsible(\"usersId\",\"assignmentId\")", iten: [usersId, params] })];
                case 3:
                    _a.sent();
                    res.sendStatus(200);
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    res.sendStatus(400);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function allResponsible(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var rows, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, repositors.allRespon()];
                case 1:
                    rows = _a.sent();
                    res.send(rows).status(200);
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    res.sendStatus(400);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function contResponsible(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var rows, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, repositors.countRespons()];
                case 1:
                    rows = _a.sent();
                    res.send(rows).status(200);
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    res.sendStatus(400);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function deletResponsible(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var params, usersId, rows, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    params = req.params.id;
                    usersId = res.locals[0].usersId;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, repositors.getItem({ table: "responsible", colun: "id", iten: params })];
                case 2:
                    rows = _a.sent();
                    if (rows.length === 0)
                        return [2 /*return*/, res.status(401).send("Activit not cadaster")];
                    return [4 /*yield*/, repositors.deleteIten({ table: "responsible", colun: "\"usersId\"", iten: usersId, colun1: "id", iten1: rows[0].id })];
                case 3:
                    _a.sent();
                    res.sendStatus(200);
                    return [3 /*break*/, 5];
                case 4:
                    error_4 = _a.sent();
                    res.sendStatus(400);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
export { deletResponsible, insertResponsible, contResponsible, allResponsible };
