# Pokedex
Pokedex is a simple React application built with create-react-app that allows users to search for Pokemon by name or ID. When a user enters a Pokemon name or ID, the application sends a GET request to the PokeAPI to retrieve information about that Pokemon. A card element is then created on the website displaying the Pokemon's sprite image, ID, name, height, weight, and description.

## Getting Started
To get started with this project, you can simply clone this repository:

```
git clone https://github.com/bbocko/pokedex.git
```

After cloning the repository, you can install the required dependencies by running:

```
npm install
```

## Usage
To run the application, you can use the following command:

```
npm start
```

This will start the development server and open the application in your default browser at http://localhost:3000.

To search for a Pokemon, enter its name or ID into the search bar and press the "Search" button. If the Pokemon exists, a card element will be displayed on the page with information about that Pokemon. If the Pokemon cannot be found, an error message will be displayed.

## Built With
- React
- PokeAPI

## Contributing
Contributions are welcome! If you have any suggestions or find any bugs, please open an issue or submit a pull request.
