# Makefile

DST_DIR=./dst
PKG_DIR=./dst/pkg/famiphoto_frontend
BUILDER=builder

.PHONY: pkg

init:
	docker compose build --no-cache
	docker compose up -d

build:
	npm run build

pkg:
	mkdir -p $(PKG_DIR)/var/www/famiphoto_frontend
	cp -r ./pkg/. $(PKG_DIR)
	cp -r ./.output/. $(PKG_DIR)/var/www/famiphoto_frontend
	dpkg-deb --build $(PKG_DIR) $(DST_DIR)

clean:
	rm -rf .nuxt/ .output/ dst/

dc_pkg:
	docker compose exec $(BUILDER) make pkg
