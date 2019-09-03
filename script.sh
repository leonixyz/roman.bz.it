#!/bin/bash

# resizes all files in the ./img directory to different sizes

cd ./img;

for j in $(echo 1440 1200 1080 900 800 700 600); do 
    mkdir $j; 
    echo "------$j-------"; 
    for i in $(ls *.jpg); do 
        echo "$i"; 
        convert $i -resize x$j $j/$i ; 
    done; 
done;

cd ..;

exit 0;
