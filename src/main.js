var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import fastifyCookie from '@fastify/cookie';
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const CORS_OPTIONS = {
            origin: ['http://localhost:3000'],
            allowedHeaders: [
                'Access-Control-Allow-Origin',
                'Origin',
                'X-Requested-With',
                'Accept',
                'Content-Type',
                'Authorization',
            ],
            exposedHeaders: 'Authorization',
            credentials: true,
            methods: ['GET', 'PUT', 'OPTIONS', 'POST', 'DELETE'],
        };
        const adapter = new FastifyAdapter();
        adapter.enableCors(CORS_OPTIONS);
        const app = yield NestFactory.create(AppModule, adapter);
        yield app.register(fastifyCookie, {
            secret: 'oprwjbpjtntr45hj'
        });
        yield app.listen(5000);
    });
}
bootstrap();
