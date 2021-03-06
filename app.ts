import express from 'express'
import cors from 'cors'
import path from 'path'
import players from './data/players'
import PlayerInfo from './types/PlayerInfo'

const bodyParser = require('body-parser')

const app = express()
const port = 3000

// Allow cross-origin API requests
app.use(cors())

// Use bodyParser middleware to make
// Request json available
// In the `request.body`
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

const PLAYERS: PlayerInfo[] = players

app.use('/dist', express.static('dist'))

// Serve home page
app.get('/', (req, res) => {
  console.log(`Players available: ${PLAYERS}`)
  res.sendFile(path.join(__dirname, './index.html'))
})

// Get a single player
app.get('/players/:id', (req, res) => {
  const playerId: number = Number(req.params.id)
  const player: PlayerInfo = PLAYERS.find(entry => entry.id === playerId)
  res.status(200).json(player)
})

// Get all players
app.get('/players', (req, res) => {
  const players: PlayerInfo[] = PLAYERS
  res.status(200).json(players)
})

// Add new player
app.post('/players', (req, res) => {
  const newPlayer: PlayerInfo = {
    id: PLAYERS[PLAYERS.length - 1].id + 1,
    playerName: req.body.playerName,
    team: req.body.team,
    jerseyNumber: req.body.jerseyNumber,
    position: req.body.position,
  }
  PLAYERS.push(newPlayer)
  res.status(201).json({ Result: 'Player saved', player: newPlayer })
})

// Delete player by ID
app.delete('/players/:id', (req, res) => {
  const playerId: number = Number(req.params.id)
  const player: PlayerInfo = PLAYERS.find(entry => entry.id === playerId)
  let deletedPlayer = PLAYERS.splice(PLAYERS.indexOf(player), 1)
  res.status(200).json({ Result: 'Player deleted', deleted: deletedPlayer })
})

// Set server to listen on defined port
app.listen(port, () => console.log(`Server running on localhost:${port}`))
