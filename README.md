# NFL Player Info API

This is an API using TypeScript, Node.js, and Express to provide data about NFL players for the 2020-21 season.

![NFL](football.jpg)

## Installing Dependencies

Install dependencies by running the command `npm install`

## Running The Application

Run the application using the command `npm start`

Then navigate to [localhost:3000](http://localhost:3000)

## Available API Routes

- List players - GET `/players`
- Get player by ID - GET `/players/:id` e.g `/players/1`
- Create new player - POST `/players`
- Delete player by ID - DELETE `/players/:id`
- Update player by ID - PUT `/players/:id`