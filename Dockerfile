FROM nexus-docker-msb.df.msb.com.vn/msb-node:16-alpine

WORKDIR /app

COPY dist .

RUN yarn global add serve

CMD ["serve", "-p", "3000", "-s", ".", "-n"]

EXPOSE 3000
