# Makefile - Convenient commands

.PHONY: dev prod build clean logs health

dev:
	@chmod +x scripts/docker-dev.sh
	@./scripts/docker-dev.sh

prod:
	@chmod +x scripts/docker-prod.sh
	@./scripts/docker-prod.sh

build:
	@chmod +x scripts/docker-build.sh
	@./scripts/docker-build.sh

clean:
	@chmod +x scripts/docker-clean.sh
	@./scripts/docker-clean.sh

logs:
	@chmod +x scripts/docker-logs.sh
	@./scripts/docker-logs.sh $(filter-out $@,$(MAKECMDGOALS))

health:
	@chmod +x scripts/docker-health.sh
	@./scripts/docker-health.sh

install:
	@echo "Setting up PDF2MD Docker environment..."
	@mkdir -p scripts nginx/ssl
	@chmod +x scripts/*.sh
	@echo "✅ Setup complete!"

%:
	@:
