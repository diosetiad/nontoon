<img src="/public/images/nontoon-sneak-peek.png" alt="Nontoon sneak peek">

## Nontoon

Nontoon is a subscription-based movie streaming platform built with Laravel and integrated with Midtrans Snap.

## Installation

To get started with Nontoon, follow these steps:

```bash
# clone repository
git clone https://github.com/diosetiad/nontoon.git

# navigate into project directory
cd nontoon

# remove existing remote
git remote remove origin

# install PHP dependencies
composer install

# install Javascript dependencies
npm install

# copy .env example file to .env
cp .env.example .env

# create database ex: nontoon, then put it in .env
DB_DATABASE=nontoon

# get Midtrans access keys on Sandbox environment, then put in in .env
MIDTRANS_SERVER_KEY= "your server key"
MIDTRANS_CLIENT_KEY= "your client key"

# generate new application key
php artisan key:generate

# run migrations and seed
php artisan migrate --seed

# start development server
npm run dev
php artisan serve

# recreate symbolic link
php artisan storage:link

# start ngrok for Midtrans payment testing
ngrok http 8000

# copy ngrok URL and put it in Midtrans payment settings
your_ngrok_url/midtrans/notification
```
