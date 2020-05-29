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

  const getUsers = ({response} : {response: any }) => {
      response.body = users
  }