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
function insertAssignment(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, name, assignment, date, usersId, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, name = _a.name, assignment = _a.assignment, date = _a.date;
                    usersId = res.locals[0].usersId;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, repositors.insert({ table: "assignment(name, assignments, \"userCreat\", \"dateEnd\")", iten: [name, assignment, usersId, date] })];
                case 2:
                    _b.sent();
                    res.sendStatus(200);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    res.sendStatus(400);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function AllAssignment(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var rows, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, repositors.getItem({ table: "assignment", colun: '', iten: '' })];
                case 1:
                    rows = (_a.sent()).rows;
                    res.status(200).send(rows);
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
function delAssignment(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var name, usersId, rows, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    name = req.body.name;
                    usersId = res.locals[0].usersId;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    if (!name)
                        return [2 /*return*/, res.sendStatus(401)];
                    return [4 /*yield*/, repositors.getItem({ table: 'assignment', colun: "name", iten: name, colun1: "\"userCreat\"", iten1: usersId })];
                case 2:
                    rows = _a.sent();
                    if (rows.length === 0)
                        return [2 /*return*/, res.sendStatus(401)];
                    return [4 /*yield*/, repositors.deleteIten({ table: "assignment", colun: "name", iten: name, colun1: "\"userCreat\"", iten1: usersId })];
                case 3:
                    _a.sent();
                    res.sendStatus(200);
                    return [3 /*break*/, 5];
                case 4:
                    error_3 = _a.sent();
                    console.log(error_3);
                    res.sendStatus(400);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function updatAssignment(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var name, rows, boolean, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    name = req.body.name;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    if (!name)
                        return [2 /*return*/, res.sendStatus(401)];
                    return [4 /*yield*/, repositors.getItem({ table: 'assignment', colun: "name", iten: name })];
                case 2:
                    rows = _a.sent();
                    if (rows.length === 0)
                        return [2 /*return*/, res.sendStatus(401)];
                    boolean = false;
                    if (!rows[0].status)
                        boolean = true;
                    return [4 /*yield*/, repositors.updateIten({ table: "assignment", colun: "status", iten: boolean, iten1: rows[0].id })];
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
function contAssignment(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var rows, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, repositors.countAssig()];
                case 1:
                    rows = _a.sent();
                    res.send(rows).status(200);
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    res.sendStatus(400);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
export { contAssignment, insertAssignment, AllAssignment, delAssignment, updatAssignment };
