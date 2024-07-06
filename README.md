# Project Title

Selenium Testing for Dummy React Website

## Description

This project contains a dummy website built with React and a Selenium script to test various input fields and functionalities of the website. The goal is to automate the testing process for input validation, form submissions, and other interactions on the website.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Installation

### Prerequisites

- Node.js and npm
- Python
- Jupyter Notebook
- Google Chrome
- ChromeDriver
- Selenium

### Steps

1. **Clone the repository**

    ```sh
    git clone https://github.com/your-username/testing-selenium.git
    cd testing-selenium
    ```

2. **Install React app dependencies**

    ```sh
    cd website
    npm install
    ```

3. **Install Selenium dependencies**

    ```sh
    pip install selenium
    ```

4. **Install Jupyter Notebook**

    If you don't have Jupyter Notebook installed, you can install it using:

    ```sh
    pip install notebook
    ```

5. **Download ChromeDriver**

    Download the ChromeDriver that matches your version of Google Chrome from [here](https://sites.google.com/a/chromium.org/chromedriver/downloads) and place it in the project directory.

## Usage

### Running the React app

1. Navigate to the React app directory and start the development server:

    ```sh
    cd website
    npm start
    ```

    This will run the React app on `http://localhost:3000`.

### Running the Selenium script

2. In a new terminal, navigate to the project directory and start the Jupyter Notebook:

    ```sh
    jupyter notebook
    ```

3. Open the `selenium_testing.ipynb` notebook from the Jupyter Notebook interface and run the cells to execute the Selenium tests. The script will open the Chrome browser, navigate to the dummy website, and perform the defined tests.

## Project Structure

```
testing-selenium/
├── website/
│   ├── public/
│   ├── src/
│   ├── .gitignore
│   ├── package.json
│   └── README.md
├── selenium_testing.ipynb
├── .gitignore
└── README.md
```

- **website/**: Contains the React application code.
- **selenium_testing.ipynb**: The Jupyter Notebook containing the Selenium script to automate the testing of the React app.
