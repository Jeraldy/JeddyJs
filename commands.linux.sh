## Compile Project
cd lib
rm -rf core 
rm -rf layouts 
rm -rf utils 
rm -rf widgets
rm -rf styles
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
## Generate Documentation
## typedoc --out docs --theme minimal  --excludePrivate

## Copy Types
cp lib/*.d.ts types/

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
mkdir -p lib/css && cp  src/css/*.d.ts lib/css

## Publish Jeddy Library
cd lib

npm version patch
npm publish --access=public

## Publish Jeddy Types
cd ..
cd types 

npm version patch
npm publish --access=public

cd ..

git add .
git commit -m "bash cmd"
git push
