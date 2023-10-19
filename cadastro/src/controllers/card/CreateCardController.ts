import {Request,Response} from 'express'

import { CreateCardService } from '../../services/card/CreateCardService';

class CreateCardController {

    async handle(req: Request,res: Response){
        const {numero,codigo,senha,id_usuario} =req.body;

        const createCardService = new CreateCardService();

        const card = await createCardService.execute({numero,codigo,senha,id_usuario});

        return res.json(card)
    }
}

export {CreateCardController}