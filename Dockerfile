FROM node:16-alpine

# Variables
ENV TOKEN changeme
ENV CLIENT_ID chamgeme
ENV MONGODB "mongodb://localhost:27017/NickNelson"

# Create the bot's directory
RUN mkdir -p /usr/src/bot
WORKDIR /usr/src/bot

COPY package.json yarn.lock /usr/src/bot/
RUN ["yarn", "install"]

COPY . /usr/src/bot

# Start the bot.
CMD ["yarn", "start"]