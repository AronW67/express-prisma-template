# copy .env sample
copy .env-sample and rename .env

# Start database for development
docker-compose up -d

# Run app
npm run start

# Prisma
If you want to start fresh with no changesets, delete the existing migrations folder at ./prisma/migrations and run the below command

# Migrate Prisma changes (Update DB schemas)
npx prisma migrate dev --name init

# Generate Prisma TS types for use in app
npx prisma generate

# Additional
reference.ts contains some notes on common expressJS methods