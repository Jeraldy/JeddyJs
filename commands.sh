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
xcopy src\css\*.d.ts types\css\ /S /Q /Y

## Compile
npm run compile

## Generate Documentation
## typedoc --out docs --theme minimal  --excludePrivate

## Copy Types
xcopy lib\*.d.ts types\ /S /Q /Y

## Copy Styles
## xcopy /s src\styles\* lib\styles\



## Remove types from lib
rm -r lib\*.d.ts
rm -r lib\**\*.d.ts
rm -r lib\**\**\*.d.ts

rm -r lib\*.js.map
rm -r lib\**\*.js.map
rm -r lib\**\**\*.js.map

## Put back css types
xcopy  src\css\*.d.ts lib\css\ /S /Q /Y

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
git commit -m "readme"
git push
