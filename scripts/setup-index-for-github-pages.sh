#!/bin/bash

sed -i 's#href="favicon.ico"#href="boomer/favicon.ico"#g'       "$1"/index.html
sed -i 's#src="\(python/brython.min.js\)"#src="boomer/\1"#g'    "$1"/index.html
sed -i 's#src="\(python/brython-stdlib.js\)"#src="boomer/\1"#g' "$1"/index.html
sed -i 's#src="\(python/boomer.brython.js\)"#src="boomer/\1"#g' "$1"/index.html
sed -i 's#href="\(styles.*.css\)"#href="boomer/\1"#g'           "$1"/index.html
sed -i 's#src="\(runtime.*.js\)"#src="boomer/\1"#g'             "$1"/index.html
sed -i 's#src="\(polyfills.*.js\)"#src="boomer/\1"#g'           "$1"/index.html
sed -i 's#src="\(main.*.js\)"#src="boomer/\1"#g'                "$1"/index.html

sed -i 's#"../assets/angular-logo.svg"#"../boomer/assets/angular-logo.svg"#g' "$1"/main.*.js
sed -i 's#"../assets/github-logo.svg"#"../boomer/assets/github-logo.svg"#g'   "$1"/main.*.js
sed -i 's#"../assets/python-logo.svg"#"../boomer/assets/python-logo.svg"#g'   "$1"/main.*.js
sed -i 's#"python/boomer-wrapper.py"#"boomer/python/boomer-wrapper.py"#g' "$1"/main.*.js