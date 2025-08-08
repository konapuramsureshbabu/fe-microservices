# Makefile
.PHONY: all dev prod stop clean

all: dev

dev:
	docker compose -f docker-compose.dev.yml up --build

prod:
	docker compose -f docker-compose.prod.yml up --build -d

stop:
	docker compose -f docker-compose.dev.yml down
	docker compose -f docker-compose.prod.yml down

clean:
	docker compose -f docker-compose.dev.yml down -v
	docker compose -f docker-compose.prod.yml down -v
	docker system prune -f