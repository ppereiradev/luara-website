FROM node:19-buster-slim
LABEL maintainer="paulopereira.dev"

EXPOSE 3000

RUN useradd -m website-user
COPY ./website /home/website-user/website
COPY ./entrypoint.sh /entrypoint.sh

WORKDIR /home/website-user/website

RUN chmod +x /entrypoint.sh

RUN npm --version && \
    npm install -g npm@latest && \
    npm --version

RUN FILE=/home/website-user/website/package.json && \
    if [ -f "$FILE" ]; \
    then \
        npm install ; \
    fi

USER website-user

ENTRYPOINT ["/entrypoint.sh"]
