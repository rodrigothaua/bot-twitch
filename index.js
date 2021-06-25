import {Client} from "tmi.js"
import "dotenv/config.js"

const cliente = new Client({
    identity: {
        username: process.env.BOTNAME,
        password: process.env.BOTPASS
    },
    channels: process.env.CHANNELS.split(",").map(chan=>chan.trim()).filter(v => v.length > 0),
    connection: {
        reconnect: true
    }
})

cliente.connect()

cliente.on("connected", (addr, port) => {
    console.log(`Bot conectado com sucesso: ${addr}:${port}`)
})

cliente.on("join", (channel, username, self) => {
    if (self) console.log(`Entrando no canal ${channel}`)
})

cliente.on("chat", (channel, tags, messsage, self) => {
    if (self) return
    console.log(`${channel} / ${tags['display-name']} : ${messsage}`)

    const args = messag.split("")
    const command = args.shift()
    if (command.startswith("!")) {
        switch (command) {
            case "!comando":
                const trigger = args.shift()
                switch (key) {
                    case "add":
                        
                        break;
                
                    default:
                        break;
                }
                break;
        
            default:
                break;
        }
    }
})