## Compile Project
cd lib
rm -r core 
rm -r layouts 
rm -r utils 
rm -r widgets
cd ..

cd types
rm -r core 
rm -r layouts 
rm -r utils 
rm -r widgets 
rm -r css
cd ..

xcopy /s src\css\*.d.ts types\css\

npm run compile

## Copy Types
xcopy /s lib\*.d.ts types\

## Remove types from lib
rm -r lib\*.d.ts
rm -r lib\**\*.d.ts
rm -r lib\**\**\*.d.ts

rm -r lib\*.js.map
rm -r lib\**\*.js.map
rm -r lib\**\**\*.js.map

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
git commit -m "npm scrpts"
git push

##   "scripts": {
##     "preinstall": "npm i run-script-os jeddy-types",
##     "postinstall": "run-script-os",
##     "postinstall:win32": "xcopy /s node_modules\\jeddy-types ..\\@types\\jeddy\\",
##     "postinstall:darwin:linux": "cp -r ./node_modules/jeddy-types ../@types/jeddy/"
##   },