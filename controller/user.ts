import { IUser } from '../model/user.ts'

let users: Array<IUser> = [{
  id: "1",
  name: "Kauê Murakami",
  email: "kaue@gmail.com",
  create_at: new Date("2020-05-13"),
  update_at: new Date("2020-05-13"),
}, {
  id: "2",
  name: "Luiza Costa",
  email: "luiza@gmail.com",
  create_at: new Date("2020-05-13"),
  update_at: new Date("2020-05-13"),
}, {
  id: "3",
  name: "Ricardo da Silva",
  email: "Ricardo@gmail.com",
  create_at: new Date("2020-05-13"),
  update_at: new Date("2020-05-13"),
}, {
  id: "4",
  name: "Maria Oliveira",
  email: "maria@gmail.com",
  create_at: new Date("2020-05-13"),
  update_at: new Date("2020-05-13"),
}];

const getUsers = ({ response }: {
   response: any }) => {
  response.body = users
}

const getUser = ({ params, response }:
  { params: { id: string }; response: any },) => {
  const user: IUser | undefined = users.find((user) => user.id == params.id)
  if (user) {
    response.status = 200
    response.body = user
  } else {
    response.status = 404
    response.body = { message: 'User not found.' }
  }
}

const addUser = async ({ request, response }: {
   request: any; 
   response: any 
  }) => {
  const body = await request.body()
  const user: IUser = body.value

  user.create_at = new Date()
  user.update_at = new Date()

  users.push(user)
  response.body = { message: "ok" }
  response.status = 200
}

const updateUser = async (
  { params, request, response } : {
    params: { id: string };
    request: any;
    response: any;
  }) => {
    let user: IUser | undefined = users.find(
        (user) => user.id === params.id 
      )
      if(user){
        const body = await request.body()
        const updateUser: {
          name? : string
          email? : string
        } = body.value

        user = {
          //... copiando todos dados do user
          //      ... pegando todos os dados de updateUser e sobrescreve user
          ...user, ...updateUser, update_at: new Date() 
        }
          users = [
            //...users copia todos os usuarios , menos o que estamos alterando, depois passamos o usuario que estamos alterando
            ...users.filter( (user) => user.id !== params.id), user
          ]
          response.status = 200
          response.body = {message : 'ok'}
      }else {
        response.status = 404
        response.body = {message : "not found"}
      }
  }

export { getUsers, getUser, addUser, updateUser };