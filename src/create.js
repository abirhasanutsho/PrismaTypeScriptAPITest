"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = [
                {
                    name: "Abir Hasan Utsho",
                    description: "I am Node js Developer",
                    subscribers: 20,
                    link: "http://youtube.com",
                },
                {
                    name: "Abir",
                    description: "I am Full Stack Developer",
                    subscribers: 30,
                    link: "http://facebook.com",
                },
            ];
            const dataObject = {
                name: "Abir Haasan",
                description: "I am Ios Developer",
                subscribers: 40,
                link: "http://instagram.com",
            };
            const res = yield prisma.users_channel.create({
                data: dataObject,
            });
            console.log(res);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            () => __awaiter(this, void 0, void 0, function* () {
                yield prisma.$disconnect();
            });
        }
    });
}
main();
