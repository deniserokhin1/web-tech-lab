cd ~/web-tech-lab
npm run build:prod

rm -rf ~/../var/www/web-tech-lab/html
mv ~/web-tech-lab/build ~/../var/www/web-tech-lab/html/