import { Body, Controller, Post, HttpCode, HttpStatus, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { FastifyReply } from 'fastify';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    async signIn(@Body() signInDto: Record<string,any>, @Res() response: FastifyReply) {
        try {
            const token = await this.authService.signIn(signInDto.email, signInDto.password)
            response.status(200).send({"message":'Authorization completed successfully', "token": token})
        } catch (e) {
            response.status(400).send(e.message);
        }
    }
}