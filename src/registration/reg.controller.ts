import { Body, Controller, Post, Request, Get, Res, HttpCode } from '@nestjs/common';
import { RegService } from './reg.service';
import { FastifyReply } from 'fastify';
import { JwtService } from '@nestjs/jwt';

@Controller('reg')
export class RegController {
    constructor(private regService: RegService, private jwtService: JwtService) {}

    @Post('user')
    async registration(@Body() regDto: Record<string,any>, @Res() response: FastifyReply) {
        try {
            const payload = { email: regDto.email, isActivate: false};

            const access_token = await this.jwtService.signAsync(payload);
            response.setCookie('access_token', access_token, {
                domain: 'localhost',
                path: '/',
                httpOnly: true 
            })

            await this.regService.Registration(regDto.firstname, regDto.lastname, regDto.email, regDto.gender, regDto.password, regDto.captcha);
            response.status(200).send({"message":'Registration completed successfully'})
        } catch (e) {
            response.status(400).send(e.message);
        }
    }
}