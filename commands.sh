## Compile Project
cd lib
rm -r core 
rm -r layouts 
rm -r utils 
rm -r widgets
rm -r styles
cd ..

cd types
rm -r core 
rm -r layouts 
rm -r utils 
rm -r widgets 
rm -r css
cd ..

## Add CSS Types to types
xcopy /s src\css\*.d.ts types\css\

## Compile
npm run compile

## Generate Documentation
## typedoc --out docs --theme minimal  --excludePrivate

## Copy Types
xcopy /s lib\*.d.ts types\

## Copy Styles
xcopy /s src\styles\* lib\styles\



## Remove types from lib
rm -r lib\*.d.ts
rm -r lib\**\*.d.ts
rm -r lib\**\**\*.d.ts

rm -r lib\*.js.map
rm -r lib\**\*.js.map
rm -r lib\**\**\*.js.map

## Put back css types
xcopy /s src\css\*.d.ts lib\css\

## Publish Jeddy Library
cd lib

npm version patch
npm publish --access=public

## Publish Jeddy Types
cd..
cd types 

npm version patch
npm publish --access=public

cd..

git add .
git commit -m "StackPane"
git push
