## Compile Project
npm run compile

## Copy Types
##xcopy /s lib\*.d.ts types\

## Remove types from lib
## rm -r lib\*.d.ts
## rm -r lib\**\*.d.ts
## rm -r lib\**\**\*.d.ts

##rm -r lib\*.js.map
##rm -r lib\**\*.js.map
##rm -r lib\**\**\*.js.map

## Publish Jeddy Library
cd lib
##npm version 1.0.18
npm version patch
npm publish --access=public

## Publish Jeddy Types
## cd..
## cd types 
## ##npm version 1.0.18
## npm version patch
## npm publish --access=public

cd..



