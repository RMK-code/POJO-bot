# This README is still under work in progress
> This README is for getting yourself to work as quickly as possible

### Prerequisites
- Install Node.js (https://nodejs.org/en/download/)

### Install (windows)
- Navigate to your development environment
- Run `mkdir POJO && cd POJO`
- Run `git clone https://github.com/RMK-code/POJO-bot.git`
- Run `npm install` to install all dependencies
- Run `copy config.json.sample config.json` to copy (base) configuration
- Run `notepad config.json` and replace `"token": "token_of_bot_here"` for your Discord Bot's token. Save File.
- Run `npm test` to run initial test
- Run `npm start` to start listening for messages

### Code (requirements)
- NEVER store any sensitive information in `config.json.sample`
- For every Feature/Bug start a new Issue on GitHub
- Always start a new Branch for every Feature/Bug
  - Make sure your master branch is up-to-date before starting a new branch (`git checkout master && git pull`)
  - Create a branch with a descriptive name e.g.:
    - Bug?: `bugfix/descriptive-name-here`
    - Feature?: `feature/descriptive-name-here`
  - Commit your changes frequently
  - Add pull request in GitHub and link it to the Issue
  - Don't make pull requests too big because they are potentially difficult to review and merge

### Contact
- NLdProd#0548 on Discrod
