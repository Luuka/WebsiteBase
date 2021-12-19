.PHONY: npm-install
npm-install: 
	docker-compose exec node npm install

.PHONY: assets-watch
assets-watch: 
	docker-compose exec node gulp watch