import { Request, Response } from 'express';

// Lets suppose this model is from Users
const M_Template = require('../../models/ModelTemplate');

module.exports = {
    // The RoutesTemplate will call this function when our endpoint is requested
    async index(req: Request, res: Response) {
        try{
            // So await find all our users
            const mt = await M_Template.findAll();
            // Then return
            return res.json(mt);
        }catch(e){
            // If any error happens just return nothing
            return res.json({});
        }
    }
}