.DEFAULT_GOAL := docker-update

# Vars
ENV := prod
CONFIG_PATH := ./docker/$(ENV)/docker-compose.yml

# Docker 
docker-build:
	docker compose -f $(CONFIG_PATH) build

docker-up:
	docker compose -f $(CONFIG_PATH) up

docker-down: 
	docker compose -f $(CONFIG_PATH) down

docker-update:
	docker compose -f $(CONFIG_PATH) up --build

db-up:
	docker compose -f $(CONFIG_PATH) up db

db-upd: 
	docker compose -f $(CONFIG_PATH) up db -d

db-down:
	docker compose -f $(CONFIG_PATH) down db

.PHONY: docker-up docker-build docker-down docker-build-up db-up db-upd db-down