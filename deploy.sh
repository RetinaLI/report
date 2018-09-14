#!/bin/bash
function check_result(){
  if [ "$1" != "0" ]
  then
    echo "出错了，请检查！";
    exit 2;
  fi
}


npm run build;

mv dist/report/*.js dist/report/*.css dist/report/assets/;
cp dist/report/index.html dist/report/pv.html;