# To Run

1. Go to [Railway.app](https://railway.app) and create a PostgreSQL database instance.

2. Copy the database URL provided by Railway.app.

3. Paste the copied database URL into your project's `.env` file.

4. Install project dependencies using the following command:

   ```bash
   pnpm i
   ```

5. Push your project's database schema to Railway.app by running:

   ```bash
   pnpm db:push
   ```

6. If needed, seed the database with initial data using:

   ```bash
   pnpm db:seed
   ```

7. Start the development server with:
   ```bash
   pnpm dev
   ```
