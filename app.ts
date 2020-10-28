import express from 'express'
import path from 'path'
import players from './data/players'
import PlayerInfo from './types/PlayerInfo'

const app = express()
const port = 3000

const PLAYERS = players

app.use('/dist', express.static('dist'))

// Serve home page
app.get('/', (req, res) => {
  console.log(`Players available: ${PLAYERS}`)
  res.sendFile(path.join(__dirname, './index.html'))
})

// Get a single player
app.get('/players/:id', (req, res) => {
  const playerId = Number(req.params.id)
  const player = PLAYERS.find(entry => entry.id === playerId)
  res.status(200).json(player)
})

// Get all players
app.get('/players', (req, res) => {
  const players = PLAYERS
  res.status(200).json(players)
})

// TODO: Add new player
app.post('/players', (req, res) => {
  const newPlayer: PlayerInfo = {
    id: PLAYERS[-1].id + 1,
    playerName: req.body.playerName,
    team: req.body.team,
    jerseyNumber: req.body.jerseyNumber,
    position: req.body.position,
  }
  PLAYERS.push(newPlayer)
  res.status(201).json({ Result: 'Player saved', player: newPlayer })
})

// TODO: Delete player by ID
app.get('/players', (req, res) => {
  const players = PLAYERS
  res.status(200).json(players)
})

// TODO: Update player by ID
app.get('/players', (req, res) => {
  const players = PLAYERS
  res.status(200).json(players)
})

// Set server to listen on defined port
app.listen(port, () => console.log(`Server running on localhost:${port}`))
