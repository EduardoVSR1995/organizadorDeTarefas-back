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
import connection from "../database/postgres.js";
function getItem(_a) {
    var table = _a.table, colun = _a.colun, iten = _a.iten, colun1 = _a.colun1, iten1 = _a.iten1;
    return __awaiter(this, void 0, void 0, function () {
        var rows_1, rows_2, rows, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 6, , 7]);
                    if (!(iten !== '' && colun !== '' && !colun1 && !iten1)) return [3 /*break*/, 2];
                    return [4 /*yield*/, connection.query("SELECT * FROM ".concat(table, " WHERE ").concat(colun, " = $1 ;"), [iten])];
                case 1:
                    rows_1 = (_b.sent()).rows;
                    return [2 /*return*/, rows_1];
                case 2:
                    if (!(colun1 && iten1)) return [3 /*break*/, 4];
                    return [4 /*yield*/, connection.query("SELECT * FROM ".concat(table, " WHERE ").concat(colun, " = $1 AND ").concat(colun1, "=$2;"), [iten, iten1])];
                case 3:
                    rows_2 = (_b.sent()).rows;
                    return [2 /*return*/, rows_2];
                case 4: return [4 /*yield*/, connection.query("SELECT * FROM ".concat(table, ";"))];
                case 5:
                    rows = _b.sent();
                    return [2 /*return*/, rows];
                case 6:
                    error_1 = _b.sent();
                    return [2 /*return*/, error_1];
                case 7: return [2 /*return*/];
            }
        });
    });
}
function insert(_a) {
    var table = _a.table, iten = _a.iten;
    return __awaiter(this, void 0, void 0, function () {
        var lock, index, rows, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    lock = [];
                    for (index = 0; index < iten.length; index++) {
                        lock.push("$".concat(index + 1));
                    }
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, connection.query("INSERT INTO ".concat(table, " VALUES (").concat(lock.toString(), ") RETURNING id ;"), iten)];
                case 2:
                    rows = (_b.sent()).rows;
                    return [2 /*return*/, rows];
                case 3:
                    error_2 = _b.sent();
                    return [2 /*return*/, error_2];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function deleteIten(_a) {
    var table = _a.table, colun = _a.colun, iten = _a.iten, colun1 = _a.colun1, iten1 = _a.iten1;
    return __awaiter(this, void 0, void 0, function () {
        var error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 4, , 5]);
                    if (!(colun1 && iten1)) return [3 /*break*/, 2];
                    return [4 /*yield*/, connection.query("DELETE FROM ".concat(table, " WHERE ").concat(colun, " = $1 AND ").concat(colun1, " = $2 ;"), [iten, iten1])];
                case 1:
                    _b.sent();
                    return [2 /*return*/, true];
                case 2: return [4 /*yield*/, connection.query("DELETE FROM ".concat(table, " WHERE ").concat(colun, " = $1;"), [iten])];
                case 3:
                    _b.sent();
                    return [2 /*return*/, true];
                case 4:
                    error_3 = _b.sent();
                    return [2 /*return*/, error_3];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function updateIten(_a) {
    var table = _a.table, colun = _a.colun, iten = _a.iten, iten1 = _a.iten1;
    return __awaiter(this, void 0, void 0, function () {
        var _b, _c, error_4;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 2, , 3]);
                    _c = (_b = console).log;
                    return [4 /*yield*/, connection.query("UPDATE ".concat(table, " SET ").concat(colun, " = ").concat(iten, " WHERE id = $1;"), [iten1])];
                case 1:
                    _c.apply(_b, [_d.sent()]);
                    return [2 /*return*/, true];
                case 2:
                    error_4 = _d.sent();
                    return [2 /*return*/, error_4];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function countAssig() {
    return __awaiter(this, void 0, void 0, function () {
        var rows, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, connection.query("    \n    SELECT \n    COUNT(*) FILTER (WHERE assignment.status=false) as \"complet\",\n    COUNT(*) FILTER (WHERE assignment.status) as \"notComplet\"\n    FROM assignment;\n    ")];
                case 1:
                    rows = (_a.sent()).rows;
                    return [2 /*return*/, rows];
                case 2:
                    error_5 = _a.sent();
                    return [2 /*return*/, error_5];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function countRespons() {
    return __awaiter(this, void 0, void 0, function () {
        var rows, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, connection.query("\n    SELECT\n    COUNT(responsible) as \"assigs\" ,\n    users.name\n    FROM users\n        LEFT JOIN responsible\n            ON users.id = responsible.\"usersId\" \n        LEFT JOIN users i\n         ON i.id = responsible.\"usersId\"\n    \n         GROUP BY\n            users.name\n        ORDER BY \"assigs\" DESC\n    ;\n    ")];
                case 1:
                    rows = (_a.sent()).rows;
                    return [2 /*return*/, rows];
                case 2:
                    error_6 = _a.sent();
                    return [2 /*return*/, error_6];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function allRespon() {
    return __awaiter(this, void 0, void 0, function () {
        var rows, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, connection.query("\n    SELECT\n    responsible.id,\n    assignment.name as \"assignmentName\", \n    users.name\n    FROM users\n        LEFT JOIN responsible\n            ON users.id = responsible.\"usersId\" \n        LEFT JOIN assignment\n         ON assignment.id = responsible.\"assignmentId\"\n        ;\n\n\n    ")];
                case 1:
                    rows = (_a.sent()).rows;
                    return [2 /*return*/, rows];
                case 2:
                    error_7 = _a.sent();
                    return [2 /*return*/, error_7];
                case 3: return [2 /*return*/];
            }
        });
    });
}
export { allRespon, countRespons, countAssig, getItem, insert, deleteIten, updateIten };
