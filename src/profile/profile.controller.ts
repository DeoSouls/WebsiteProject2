import { Controller, UseGuards, Request, Get, Post, Res, Body } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileGuard } from './profile.guard';
import { FastifyReply } from 'fastify';
import * as bcrypt from 'bcrypt';

@Controller('profile')
export class ProfileController {
    constructor(private profileService: ProfileService) {}

    @Post('update')
    updateDataUser(@Body() updateDto: Record<string,any>, @Res() response: FastifyReply) {
        try {
            const user = this.profileService.saveUserData(updateDto.firstname, updateDto.lastname, updateDto.email,
            updateDto.wmessage, updateDto.date, updateDto.country, updateDto.avatar, updateDto.timezone);
            user.then(res => {
                response.status(200).send({message: 'User succesfully updated', user: res});
            });
        } catch (e) {
            response.status(400).send({message: e.message});
        }
    }

    @UseGuards(ProfileGuard)
    @Get('refresh')
    getRefresh(@Request() req, @Res() response: FastifyReply) {
        try {

            req.user.then(res => {
                response.status(200).send({ firstname: res.firstname, lastname: res.lastname, email: res.email, number: res.number, isActivate: res.isActivate});
            });
        } catch (e) {
            response.status(400).send({message: e.message});
        }
    }

    @Post('user')
    getUser(@Body() updateDto: Record<string, any>, @Res() response: FastifyReply) {
        try {
            const user = this.profileService.getUserData(updateDto.email);
            user.then(res => {
                response.status(200).send({ firstname: res.firstname, lastname: res.lastname, email: res.email,
                gender: res.gender, password: res.password, wmessage: res.wmessage, dateofbirth: res.dateofbirth, country: res.country, avatar: res.avatar, timezone: res.timezone });
            })
        } catch (e) {
            response.status(400).send({message: e.message});
        }
    }

    @Post('update_email')
    async updateEmail(@Body() updateDto: Record<string, any>, @Res() response: FastifyReply) {
        try {
            const token = await this.profileService.updateEmail(updateDto.curmail, updateDto.firstname, updateDto.lastname, updateDto.number, updateDto.isActivate, updateDto.email);
            response.setCookie('access_token', token.access_token, {
                domain: 'localhost',
                path: '/',
                httpOnly: true 
            });
            
            response.status(200).send({message: 'Email was updated succesfully!', token: token});
        } catch (e) {
            response.status(400).send({message: e.message});
        }
    }

    @Post('update_pass')
    async updatePassword(@Body() updateDto: Record<string, any>, @Res() response: FastifyReply) {
        try {
            const user = await this.profileService.getUserData(updateDto.email);

            const isMatch = await bcrypt.compareSync(updateDto.curpass, user.password);
            if(!isMatch) {
                throw Error('Password mismatch')
            }

            await this.profileService.updatePassword(updateDto.email, updateDto.newpass);
            response.status(200).send({message: 'Password was updated succesfully!'});
        } catch (e) {
            response.status(400).send({message: e.message});
        }
    }

    @Post('add_number')
    async addPhoneNumber(@Body() updateDto: Record<string, any>, @Res() response: FastifyReply) {
        try {
            const data = await this.profileService.addPhoneNumber(updateDto.email, updateDto.firstname, updateDto.lastname, updateDto.isActivate, updateDto.number);
            response.setCookie('access_token', data.access_token, {
                domain: 'localhost',
                path: '/',
                httpOnly: true 
            });

            response.status(200).send({message: 'Phone number was added succesfully!', phone: data.phone, access_token: data.access_token});
        } catch (e) {
            response.status(400).send({message: e.message});
        }
    }
}