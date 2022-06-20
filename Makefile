build:
	docker compose run --rm frontend npm run build

install:
	docker compose run --rm frontend npm i

clean:
	docker compose run --rm frontend npm ci

ash:
	docker compose run --rm frontend ash

dev:
	docker compose up frontend

prod:
	docker compose run -e NODE_ENV=production frontend

lint:
	docker compose run --rm frontend npm run lint-test
