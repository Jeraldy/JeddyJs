## Compile Project
cd lib
rm -rf core 
rm -rf dom 
rm -rf layouts 
rm -rf utils 
rm -rf widgets
rm -rf styles
rm README.md
cd ..

cd types
rm -rf core 
rm -rf layouts 
rm -rf utils 
rm -rf widgets 
rm -rf css
cd ..

## Add CSS Types to types
mkdir -p types/css && cp src/css/*.d.ts types/css

## Compile
npm run compile
npm run test

## Copy Types
cp lib/*.d.ts types/
mkdir -p types/dom && cp lib/dom/*.d.ts types/dom
mkdir -p types/core && cp lib/core/*.d.ts types/core
mkdir -p types/jredux && cp lib/jredux/*.d.ts types/jredux
mkdir -p types/utils && cp lib/utils/*.d.ts types/utils
mkdir -p types/layouts && cp lib/layouts/*.d.ts types/layouts
mkdir -p types/widgets && cp lib/widgets/*.d.ts types/widgets
mkdir -p types/widgets/Card && cp lib/widgets/Card/*.d.ts types/widgets/Card
mkdir -p types/widgets/Icon && cp lib/widgets/Icon/*.d.ts types/widgets/Icon

cp README.md lib/
## Copy Styles
## mkdir -p lib/styles && cp  src/styles/* lib/styles

## Remove types from lib
rm -rf lib/*.d.ts
rm -rf lib/**/*.d.ts
rm -rf lib/**/**/*.d.ts

rm -rf lib/*.js.map
rm -rf lib/**/*.js.map
rm -rf lib/**/**/*.js.map

## Put back css types
cp  src/css/*.d.ts lib/css

## Publish Jeddy Library
# cd lib

# npm version patch
# npm publish --access=public --tag beta

# ## Publish Jeddy Types
# cd ..
# cd types 

# npm version patch
# npm publish --access=public --tag beta

# cd ..

git add .
git commit -m "bash cmd"
git push
