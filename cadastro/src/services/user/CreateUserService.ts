import prismaClient from "../../prisma";

interface UserRequest{
    cpf:string,
    nome:string
   
}


class CreateUserService {
    async execute({cpf,nome}: UserRequest){

    if (!cpf){
        throw new Error("Cpf invalido!");
    }

    const UserAlreadyExists = await prismaClient.usuario.findFirst({
     where:{
        cpf:cpf
     }
    })

    if (UserAlreadyExists)
    {
        throw new Error("Usuario já cadastrado")
    }
    
    const user = await prismaClient.usuario.create({
        data:{
            cpf:cpf,
            nome:nome
        },
        select:{
            id:true,
            cpf:true,
            nome:true,

        }
    })
    console.log('Cadastro realizado com sucesso!')
    return user;
    }
}

export {CreateUserService}