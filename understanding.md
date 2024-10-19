Q1) what is the problem web pack is trying to solve ?

Earlier when do not have any module bundler, we first import the script or cdn, the we run the function or use the script.

problem 1):
if the import order is changed or we try to use the script first then import the script then it will show error.

problem 2):
it polutes the global scope/object. ex, we can access it like window._ ( _ == lodash for example).
if we remove this from global scope in browser then, we will not be able to use the script.

Problem it solve:
1) ordering of scripts and tags.
2) prevents the polutions of global scope.

Q2) Defination in easy word:

Webpack allows you to modularasi your code as much as you want and 
as you like it to be and finally webpack allow you to push all of the cpde in one single file.
and that file is gona do every thing.

I dont need to worry about when should i load this module at 1st, 3rd 15th place, i dont neet to take care of that.

I dont need to worry about the import statement, or writen the stuf in modern js or old js, i dont neet to take care of that.

webpack take care of everything,

it give us a config file, on which we do the things.

Q3) loader and plugins ?

loader: 
job of loader is to working into the things while it is going to be loaded. 
before that 1 final output.js file is been created what ever the configuration 
you need to do before that like loading css and svg that is been done into the loaders

plugins:
And what ever the more ocnfiguration you need to do after the final output js is created that is done in plugin.


Point 1) HTML injection.
Now supose we have 5 js file that we have bundle it into 1 js file. ( bundle.js )
now we have to inject that js into index.html as well.
We can do it manually also, but best way is to use plugin.

recap: loader are something that do everything before the final compilation have been done.
Pluggin are something that does thing afterwards for you.

I have checked Chat GPT, best plugin : 

`https://webpack.js.org/concepts/plugins/#configuration`
`https://webpack.js.org/plugins/html-webpack-plugin/`

refer this doc, to add the config.

install : `npm install --save-dev html-webpack-plugin`

add in webpack.config: `const HtmlWebpackPlugin = require('html-webpack-plugin');`

what this will do, it will that the bundle file, inside `output > filename` and inject that onto inded\x.html