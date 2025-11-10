import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import User from '../models/user.js'

export class UserController {
    #__filename
    #__dirname
    #usersFilePath

    constructor () {
        this.#__filename = fileURLToPath(import.meta.url)
        this.#__dirname = path.dirname(this.#__filename)
        this.#usersFilePath = path.join(this.#__dirname, '../../users.json')
    }

    // CRUD operations
    createUser (id, username, dateOfBirth) {
        if (username == null || dateOfBirth == null) {
            throw new Error (`illegal username: ${username} or dateofbirth: ${dateOfBirth}`) 
        }
        return new User(id, username, dateOfBirth)
    }

    async readUsers () {
        let data;
        try {
            data = await fs.readFile(this.#usersFilePath, 'utf-8')
        } catch (error) {
            throw new Error (`readUser() => readFile() error: ${error.message}`)
        } 
        const json = JSON.parse(data)
        const users = json.users
        return users  
    }   
    
    async modifyUser () {
        // TODO
    }

    async deleteUser (user) {
        const users = await this.readUsers()
        users.filter(currentUser => currentUser.id != user.id)
        storeUsers(users)
        return user
    }

    // storage operations
    async addUserToUsers (user) {
        const users = await this.readUsers()
        users.push(user)
        return users
    }    

    async storeUsers (users) {
        const data = { users }
        const json = JSON.stringify(data, null, 2)
        try {
            await fs.writeFile(
                this.#usersFilePath,
                json,
                'utf-8' 
            )   
        } catch (error) {
            console.error('storeUsers() write to file error')
        }
    }

}

const controller = new UserController()
export default controller