# World Atlas Project

The **World Atlas** project is a comprehensive tool designed to provide detailed information about every country across the globe. This project is ideal for anyone looking to explore various nations' capitals, populations, and interesting facts in an organized and accessible way.

## Features

1. **Country Information**
   - `countryName`: The name of the country.
   - `capital`: The capital city of the country.
   - `population`: The total population of the country.
   - `interestingFact`: A unique or intriguing fact about the country.

2. **Global Overview**
   - A default entry for the world as a whole:
     ```json
     {
       "countryName": "World",
       "capital": "No Capital",
       "population": "Null",
       "interestingFact": "Earth is home to over 7.8 billion people."
     }
     ```

3. **Search Functionality**
   - Quickly find details about a specific country using its name.

4. **Mobile and Desktop Responsive**
   - Accessible on all devices with an optimized user interface.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/deep-49/React.git
   ```

2. Navigate to the project directory:
   ```bash
   cd country
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Usage

1. Open the application in your web browser (default: `http://localhost:3000`).
2. Use the search bar to input a country name.
3. Explore detailed information about the selected country.

## Technologies Used

- **Frontend**: React, HTML, CSS, JavaScript
- **API**: RESTful API for fetching country data

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.


## Acknowledgements

- Thanks to [REST Countries API](https://restcountries.com) for providing extensive country data.
- Inspired by the idea of fostering global awareness and knowledge.

---

Feel free to explore and enhance the **World Atlas** project. Together, let's make global learning more accessible!
